import { NextResponse } from "next/server";

export function proxy(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && pathname.startsWith("/add-products")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-products/:path*", "/login"],
};
