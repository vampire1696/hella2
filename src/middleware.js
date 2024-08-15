// import jwt from "jsonwebtoken";
import { jwtVerify } from "jose";
const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
export async function middleware(request) {
  const token = request.cookies.get("isHellaLogin")?.value;

  // const result = jwt.verify(token, process.env.TOKEN_SECRET);
  // console.log(result);
  const isTokenValid = await jwtVerify(token, secret, { algorithms: ["HS256"] })
    .then((x) => true)
    .catch((err) => false);

  if (isTokenValid && request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!isTokenValid && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
