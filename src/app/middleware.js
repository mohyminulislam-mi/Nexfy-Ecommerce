import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/items")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/items", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/items/:path*", "/login"],
};
