"use client";
import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";

import { useFormStatus } from "react-dom";

import { createProductFromForm } from "@/actions/actions";
import { toast } from "sonner";

const FormUpload = () => {
  //! Form goi ratingInput thi lay duoc value cua name rating ben trong ratingInput
  const ref = React.useRef(null);
  return (
    <Card className="bg-border">
      <CardContent>
        <form
          ref={ref}
          action={async (formData) => {
            const { error, success } = await createProductFromForm(formData);
            if (error) {
              toast.error(error, {
                position: "bottom-right",
              });
            } else {
              toast.success(success, {
                position: "bottom-right",
              });
              ref.current?.reset();
            }
          }}
        >
          <div className="grid w-full gap-2">
            <div className="flex gap-4">
              <div className="w-full">
                <Input
                  id="name"
                  placeholder="Product's Name"
                  type="text"
                  name="productName"
                />
              </div>
            </div>
            <Textarea required name="desc" placeholder="Description" />
            <div className="w-full">
              <Input
                id="sourcelink"
                placeholder="Source Link"
                type="link"
                name="sourcelink"
              />
            </div>
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="w-[120px]" type="submit" disabled={pending}>
      Send
    </Button>
  );
};
export default FormUpload;
