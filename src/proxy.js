import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/add-products")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/add-products", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-products/:path*", "/login"],
};
