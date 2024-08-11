import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import RatingInput from "./RatingInput";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import wc from "@/lib/woocommerce";
import { revalidatePath } from "next/cache";

const FormReview = ({ product_id }) => {
  async function createReview(formdata) {
    "use server";
    const rating = +formdata.get("rating"); //convert thanh number hoac Number(formdata.get("rating"))

    const review = formdata.get("reviewContent");
    const reviewer = formdata.get("name");
    const reviewer_email = formdata.get("email");
    
    const formReview = await wc.createReview(
      product_id,
      rating,
      review,
      reviewer,
      reviewer_email
    );
    if (!!formReview) {
      revalidatePath("/courses/[slug]");
    }
  }
  //! Form goi ratingInput thi lay duoc value cua name rating ben trong ratingInput
  return (
    <Card className="bg-border">
      <CardContent>
        <form action={createReview}>
          <div className="grid w-full gap-2">
            <RatingInput />
            <div className="flex gap-4">
              <div className="w-full">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="w-full">
                <Input
                  id="name"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                />
              </div>
            </div>
            <Textarea
              required
              name="reviewContent"
              placeholder="Type your review here."
            />

            <Button className="w-[120px]" type="submit">
              Send Review
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormReview;
