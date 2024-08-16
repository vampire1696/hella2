//@ts-check
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Category = async ({ params }) => {
  const category = await wc.getCategory(params.category);
  const allProductsByCategoryRes = await wc.getProductsByCategory(
    category?.id,
    12,
    params.page,
    params.attribute_term
  );
  const childCategories = await wc.getAllCategories(category.id, 20);

  const allProductsByCategory = allProductsByCategoryRes?.productByCategory;
  return (
    <section>
      <CustomContainer className="bg-lightblue">
        <div className="w-full flex text-black">
          <div className="w-[70%] h-[200px] space-y-5 justify-start rounded-lg">
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
            {/* <Image
              src={category?.imageSrc ?? "/Academy_1.jpg"}
              alt="home banner"
              width={286 * 1.5}
              height={190 * 1.5}
              className="rounded-lg "
            /> */}
            <DropdownFetchDataCategories />
          </div>
        </div>
      </CustomContainer>
      {!!childCategories.length ? (
        <SubCategories allSubCategories={childCategories} />
      ) : (
        <FilterProduct
          allProductsByCategory={allProductsByCategory}
          totalPages={allProductsByCategoryRes.totalPages}
          category={params.category}
          attribute_term={params.attribute_term}
          page={params.page}
        />
      )}
    </section>
  );
};

export default Category;
const SubCategories = ({ allSubCategories }) => {
  return (
    <CustomContainer className="mt-16 bg-white">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4 gap-5 pt-10">
          {allSubCategories.map(({ name, slug, image }) => {
            return (
              <Link key={slug} href={`/courses?category=${slug}&page=1`}>
                <div className="w-[200px] relative ">
                  <AspectRatio ratio={16 / 8}>
                    <Image
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
  );
};
const FilterProduct = ({
  allProductsByCategory,
  totalPages,
  category,
  attribute_term,
  page,
}) => {
  return (
    <CustomContainer className="mt-16 bg-white">
      <div className="flex flex-col items-center">
        <Filter category={category} selectedTerm={attribute_term} />
        <div className="grid grid-cols-4 gap-10 pt-10">
          {allProductsByCategory?.map((product) => {
            return (
              <Link key={product.id} href={`/courses/${product.slug}`}>
                <CardProduct
                  image={product?.images?.at(0)?.src ?? "/Academy_1.jpg"}
                  duration={product.attributes[0]?.options[0] ?? "None"}
                  type={product.attributes[2]?.options[0] ?? "None"}
                  title={product.name}
                  level={product.attributes[4]?.options[0]}
                />
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <CustomPagination
            category={category}
            total_pages={totalPages}
            current_page={page}
            attribute_term={attribute_term}
          />
        </div>
      </div>
    </CustomContainer>
  );
};
