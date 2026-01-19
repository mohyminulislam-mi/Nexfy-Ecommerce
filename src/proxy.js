import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;
  const { pathname } = request.nextUrl;

  // Proxy: If not logged in, show the login content but stay on /add-products
  if (!isLoggedIn && pathname.startsWith("/add-products")) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  // Proxy: If logged in, show the add-products content but stay on /login
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.rewrite(new URL("/add-products", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-products/:path*", "/login"],
};
