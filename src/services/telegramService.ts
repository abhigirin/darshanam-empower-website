// src/services/telegramService.ts
import { createProxiedUrl } from './corsProxyService';
interface EnrollmentData {
  courseName: string;
  studentName: string;
  address: string;
  mobile: string;
  email: string;
  dob: string;
  age: string;
  education: string;
  guardian: string;
  courseType: string;
  declaration: string;
  timestamp: string;
}

export async function sendEnrollmentToTelegram(data: EnrollmentData): Promise<any> {
  const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
  const GROUP_ID = import.meta.env.VITE_GROUP_ID;
  const TOPIC_ID = Number(import.meta.env.VITE_TOPIC_ID);
  
  if (!BOT_TOKEN || !GROUP_ID) {
    throw new Error("Missing Telegram configuration");
  }
  
  // Format message in a readable way
  const message = `
🎓 *NEW ENROLLMENT APPLICATION* 🎓

*Course Details*
📚 Course Type: ${data.courseType === "ugc" ? "UGC Approved" : "Central Govt Approved BSS"}
📝 Course Name: ${data.courseName}

*Student Information*
👤 Name: ${data.studentName}
📅 Date of Birth: ${data.dob}
🔢 Age: ${data.age}
🏫 Education: ${data.education}
👨‍👩‍👧‍👦 Guardian: ${data.guardian}

*Contact Details*
📱 Mobile: ${data.mobile}
📧 Email: ${data.email}
🏠 Address: ${data.address}

*Declaration*
✅ Agreed: ${data.declaration}
⏰ Submitted: ${new Date(data.timestamp).toLocaleString()}
  `.trim();
  
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  console.log("Sending message to Telegram:", message);
    console.log("Using URL:", url);

  const proxiedUrl = createProxiedUrl(url);
const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: GROUP_ID,
      message_thread_id: TOPIC_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send to Telegram: ${response.status} ${response.statusText} - ${errorText}`);
  }
  
  return await response.json();
}