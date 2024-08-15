"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
export async function login(password) {
  if (!password || password !== process.env.DEFAULT_PASSWORD) {
    return {
      error: "Invalid password",
    };
  }

  // const token = jwt.sign(
  //   { message: "you are logged in" },
  //   process.env.TOKEN_SECRET,
  //   { expiresIn: "1y" }
  // );
  const token = await new SignJWT({ message: "you are logged in" })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1 year")
    .sign(secret);

  // Set cookie with JWT token
  // res.setHeader(
  //   "Set-Cookie",
  //   `isHellaLogin=${token}; Path=/; HttpOnly; SameSite=strict; Secure=${process.env.NODE_ENV!== "development"}`
  // );
  // res.end();
  // return {
  //   success: "Logged in successfully",
  // };

  // Set cookie with JWT token
  // res.setHeader(
  //   "Set-Cookie",
  //   `isHellaLogin=${token}; Path=/; HttpOnly; SameSite=strict; Secure=${process.env.NODE_ENV!== "development"}`
  // );
  // res.end();
  // return {
  //   success: "Logged in successfully",

  cookies().set({
    maxAge: 3600 * 24 * 30 * 12,
    name: "isHellaLogin",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", //only https can read cookies
  });
  redirect("/");
}
