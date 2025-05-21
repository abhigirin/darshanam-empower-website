// src/services/corsProxyService.ts

/**
 * A proxy service to handle CORS issues during development.
 * 
 * This function uses a public CORS proxy to handle requests to the Telegram API
 * from the browser, which would otherwise be blocked by CORS.
 * 
 * NOTE: For production, use a proper backend implementation.
 */
export function createProxiedUrl(originalUrl: string): string {
  if (import.meta.env.DEV) {
    // Use a CORS proxy in development 
    return `https://corsproxy.io/?${encodeURIComponent(originalUrl)}`;
  }
  // In production, you should handle this properly on your backend
  return originalUrl;
}