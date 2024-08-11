import CardProduct from "@/components/CardProduct";
import CustomContainer from "@/components/CustomContainer";
import wc from "@/lib/woocommerce";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Search = async ({ searchParams }) => {
  const searchArrayRes = await wc.getProductsByCategory(
    162,
    12,
    1,
    searchParams.deliFormat == "All" ? undefined : searchParams.deliFormat,
    searchParams.searchText
  );
  
  const searchArray = searchArrayRes.productByCategory;

  return (
    <section>
      <CustomContainer className="bg-lightblue">
        <div className="w-full flex text-black">
          <div className="w-[70%] space-y-5 justify-start rounded-lg">
            <h6 className="text-3xl font-bold">Search Results: </h6>
          </div>
          <div className="w-[30%] p-4 flex-col flex rounded-lg items-center">
            <Image
              src={"/Academy_1.jpg"}
              alt="home banner"
              width={286 * 1.5}
              height={190 * 1.5}
              className="rounded-lg "
            />
          </div>
        </div>
      </CustomContainer>
      <CustomContainer className="mt-16 bg-white">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-10 pt-10">
            {searchArray?.map((product) => {
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
        </div>
      </CustomContainer>
    </section>
  );
};

export default Search;
