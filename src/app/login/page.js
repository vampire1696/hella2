"use client";
import React from "react";
import { login } from "./_action";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [error, setError] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Please enter password</CardTitle>
          <CardDescription>Enter Hella Password</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={(e) => {
              login(password).then((r) => {
                if (!!r?.error) {
                  setError(r.error);
                  setpassword("");
                } else {
                  setError("");
                }
              });
            }}
          >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Password</Label>
                <Input
                  id="name"
                  placeholder="Hella Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5"></div>
            </div>

            <Button type="submit">Login</Button>
          </form>

          <h3 className="text-red-600">{error}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
