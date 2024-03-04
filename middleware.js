import { NextResponse } from "next/server";
import { verifyJWT } from "./utils";

export async function middleware(req) {
  console.log("middleware running");
  const token = req.cookies.get("token");
  // if (!token) {
  //   const url = req.nextUrl.clone();
  //   url.pathname = "/access-decline";
  //   return NextResponse.rewrite(url);
  // }
  // let decoded = await verifyJWT(token.value);
  // console.log(decoded);
  // const url = req.nextUrl.clone();
  // url.pathname = "/private";
  // return NextResponse.rewrite(url);
}
export const config = {
  matcher: ["/private", "/sign-in", "/sign-up"],
};
