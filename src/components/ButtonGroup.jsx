import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import CardProduct from "./CardProduct";
import wc from "@/lib/woocommerce";

function filterProductsByAttribute(products, attributeName, attributeValue) {
  if (!!products)
    if (Array.isArray(products)) {
      return products.filter((product) => {
        return product.attributes.some((attribute) => {
          return (
            attribute.name === attributeName &&
            attribute.options.includes(attributeValue)
          );
        });
      });
    } else {
      console.error("filterProductsByAttribute is not a Array:");
    }
}

const ButtonGroup = ({ params, products }) => {
  const filteredProduct = filterProductsByAttribute(
    products,
    "deli_format",
    "Training"
  );

  return (
    <div>
      <Button variant="outline">Traning</Button>
      {/*<div className="grid grid-cols-4 gap-10 pt-10">
            {filterProductsByAttribute?.map((product) => {
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
          </div>*/}
    </div>
  );
};

export default ButtonGroup;
