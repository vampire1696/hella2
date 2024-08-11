import ButtonGroup from "@/components/ButtonGroup";
import CardProduct from "@/components/CardProduct";
import CustomContainer from "@/components/CustomContainer";
import CustomPagination from "@/components/CustomPagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import wc from "@/lib/woocommerce";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Filter from "./Filter";
import DropdownCatergories from "@/components/DropdownCatergories";
import DropdownFetchDataCategories from "@/components/DropdownFetchDataCategories";

const Category = async ({ params }) => {

  const category = await wc.getCategory(params.category);
  const allProductsByCategoryRes = await wc.getProductsByCategory(
    category?.id,
    12,
    params.page,
    params.attribute_term
  );

  
  const allProductsByCategory = allProductsByCategoryRes?.productByCategory;
  return (
    <section>
      <CustomContainer className="bg-lightblue">
        <div className="w-full flex text-black">
          <div className="w-[70%] space-y-5 justify-start rounded-lg">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link className="text-black hover:text-white" href="/">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-black" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-black hover:text-white"
                      href="/courses"
                    >
                      Course
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-black" />
                <span className="text-black">{category?.name}</span>
              </BreadcrumbList>
            </Breadcrumb>
            <h6 className="text-3xl font-bold">{category?.name}</h6>
          </div>
          <div className="w-[30%] p-4 flex-col flex rounded-lg items-center">
            <Image
              src={category?.imageSrc ?? "/Academy_1.jpg"}
              alt="home banner"
              width={286 * 1.5}
              height={190 * 1.5}
              className="rounded-lg "
            />
            <DropdownFetchDataCategories />
          </div>
        </div>
      </CustomContainer>
      <CustomContainer className="mt-16 bg-white">
        <div className="flex flex-col items-center">
          {/* -----------Filter--------- */}
          <Filter
            category={params.category}
            selectedTerm={params.attribute_term}
          />
          <div className="grid grid-cols-4 gap-10 pt-10">
            {allProductsByCategory?.map((product) => {
              return (
                <Link key={product.id} href={`/courses/${product.slug}`}>
                  <CardProduct
                    image={product?.images.src ?? "/Academy_1.jpg"}
                    duration={product.attributes[0]?.options[0] ?? "None"}
                    type={product.attributes[2]?.options[0] ?? "None"}
                    title={product.name}
                    level={product.attributes[4]?.options[0]}
                  />
                </Link>
              );
            })}
          </div>
          {/* Pagination */}
          <div className="mt-10">
            <CustomPagination
              category={params.category}
              total_pages={allProductsByCategoryRes.totalPages}
              current_page={params.page}
              attribute_term={params.attribute_term}
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Category;
