import { NextResponse } from "next/server";
import { decrypt } from "./utils";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token");
  if (!token) {
    url.pathname = "/access-decline";
    return NextResponse.rewrite(url);
  }
  let decoded = await decrypt(token.value);
  if (!decoded) {
    url.pathname = "/access-decline";
    return NextResponse.rewrite(url);
  }
}
export const config = {
  matcher: ["/private"],
};
