import { Button } from "@/components/ui/button";
import wc from "@/lib/woocommerce";
import Link from "next/link";
import React from "react";

const Filter = async ({ category, selectedTerm }) => {
  const deliFormatTerm = await wc.getDeliFormatTerm();

  if (!deliFormatTerm) {
    return <div>No filter</div>;
  }

  return (
    <div className="flex gap-3">
      {deliFormatTerm.map((delibutton) => {
        const isselected =
          !!selectedTerm && String(delibutton.id) == selectedTerm;
        const variantButton = isselected ? "default" : "outline";
        const href = isselected
          ? `/courses/?category=${category}&page=1`
          : `/courses/?category=${category}&page=1&attribute_term=${delibutton.id}`;
        return (
          <Button variant={variantButton} key={delibutton.id} asChild>
            <Link scroll={false} href={href}>
              {delibutton.name}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Filter;
