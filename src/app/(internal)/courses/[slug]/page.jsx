import CustomContainer from "@/components/CustomContainer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import wc from "@/lib/woocommerce";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Star from "@/components/Star";
import FormReview from "@/components/FormReview";

const Product = async ({ params }) => {
  
  const product = await wc.getProductBySlug(params.slug);
  const reviews = await wc.getReviewsOfProductByID(product.id);
  
  return (
    <section>
      <CustomContainer className="bg-black relative min-h-[280px]">
        <div className="w-full flex text-white">
          <div className="w-[70%] space-y-5 justify-start rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {params.product}
              </BreadcrumbList>
            </Breadcrumb>
            <h6 className="text-3xl font-bold">{product.name}</h6>
            <div className="flex">
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="prime:chart-bar"
                />
                <span>{product.attributes?.level_.value}</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={20}
                  width={20}
                  icon="simple-line-icons:clock"
                />
                <span>{product.attributes?.duration_.value} hour(s)</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="entypo:price-tag"
                />
                <span>{product.price} $</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="bi:person-video3"
                />
                <span>{product.attributes?.deli_format.value}</span>
              </div>
              <div className="flex gap-x-2 pr-4">
                <Icon
                  color="blue"
                  height={25}
                  width={25}
                  icon="f7:house-fill"
                />
                <span>{product.attributes?.type.value}</span>
              </div>
            </div>
          </div>
          <div className="w-[30%] p-4 flex-col flex rounded-lg items-center">
            <Button asChild variant="customblue" className="absolute -bottom-4">
              <a href={product.attributes?.source_link.value}>Start Course</a>
            </Button>
          </div>
        </div>
      </CustomContainer>

      <div className="flex justify-center w-full pt-10">
        <Tabs
          defaultValue="desc"
          orientation="horizontal"
          className="w-[1500px] "
        >
          <TabsList>
            <TabsTrigger value="desc">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="desc">
            <CustomContainer className="bg-white mt-16 ">
              {/* Text contain html tag so i need to use dangerouselySetInnerHtml */}
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
            </CustomContainer>
          </TabsContent>
          <TabsContent value="reviews">
            <CustomContainer className="bg-white mt-16 ">
              {/* Text contain html tag so i need to use dangerouselySetInnerHtml */}
              <div className="pb-5 ">
                <FormReview product_id={product.id} />
              </div>
              {reviews.map((review) => {
                return (
                  <div key={review.id} className="pb-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <Star star={review.rating} />
                        </CardTitle>
                        <CardDescription>
                          {review.reviewer_email || "Anonymous"} -{" "}
                          {new Date(review.date_created).toLocaleString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>
                          <div
                            dangerouslySetInnerHTML={{ __html: review.review }}
                          ></div>
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </CustomContainer>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Product;
