import CardProduct from "@/components/CardProduct";
import CustomContainer from "@/components/CustomContainer";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";
import Category from "./(category)/CategoryPage";
import wc from "@/lib/woocommerce";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

const Courses = async (prop) => {
  if (!!prop.searchParams.category && !!prop.searchParams.page) {
    return (
      <Category
        params={{
          category: prop.searchParams.category,
          page: prop.searchParams.page,
          attribute_term: prop.searchParams.attribute_term,
        }}
      />
    );
  }
  const allTopCategories = await wc.getAllCategories();

  return (
    <div>
      {/* -----------------Banner --------------- */}
      <CustomContainer className="bg-customgray">
        <div className="w-full flex text-black">
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
              </BreadcrumbList>
            </Breadcrumb>
            <h6 className="text-2xl font-bold">Courses</h6>
            <p className="text-sm font-semibold">
              Welcome to our Onboarding portal for D&D and PjM in the business
              group Electronics. This site will give you clear guidance, which
              topics are important for employees during the first three months.
            </p>
            <p className="text-sm font-semibold">
              On the one site, direct links to trainings in My Talent Compass
              are highlighted. These have to assigned by the group leaders.
            </p>
            <p className="text-sm font-semibold">
              On the other site, linkages to guidelines are given which can be
              used as flexible self-studies.
            </p>
          </div>
          <div className="w-[30%] p-4 flex-col flex rounded-lg items-center">
            <Image
              src="/pexels.jpg"
              alt="home banner"
              width={286 * 1.5}
              height={190 * 1.5}
              className="rounded-lg "
            />
          </div>
        </div>
      </CustomContainer>
      {/* Categories */}
      <CustomContainer className="mt-16 bg-white">
        <div className="flex flex-col items-center">
          <h1 className=" text-black text-bold text-2xl">Top Categories</h1>
          <div className="grid grid-cols-4 gap-5 pt-10">
            {allTopCategories.map(({ name, slug, image }) => {
              //neu can them logic thi viet { roi sau do return () }
              return (
                <Link key={slug} href={`/courses?category=${slug}&page=1`}>
                  <div className="w-[200px] relative ">
                    {/* Phai co height width vi la absolute */}

                    <AspectRatio ratio={16 / 8}>
                      <Image
                        // src={image?.src ? image.src : "/Academy_1.jpg"}
                        src={image?.src ?? "/Academy_1.jpg"}
                        alt="Image Category"
                        fill
                        className="object-cover "
                      />
                    </AspectRatio>
                    <h1>{name}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Courses;
