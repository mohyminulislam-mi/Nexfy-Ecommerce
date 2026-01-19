import { NextResponse } from "next/server";

export default function proxy(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value;
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && pathname.startsWith("/add-products")) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  // if user already login - so, user back home
  if (isLoggedIn && pathname === "/login") {
    return NextResponse.rewrite(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-products/:path*", "/login"],
};
