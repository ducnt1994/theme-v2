import { headers } from "next/headers";

/**
 * Trả về domain hiện tại từ request header trong SSR context.
 * Ưu tiên các custom header như x-real-host, x-host nếu có.
 */
export async function getCurrentDomain(): Promise<string> {
  const headersList = await headers();
  return headersList.get("x-real-host") ||
    headersList.get("x-host") ||
    headersList.get("x-forwarded-host") ||
    headersList.get("host") ||
    "localhost";

  // const protocol = headersList.get("x-forwarded-proto") || "https";
}