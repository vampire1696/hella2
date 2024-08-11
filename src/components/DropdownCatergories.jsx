"use client";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownCatergories = ({ tree }) => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(true);
  //console.log({ tree });
  const renderCategories = (categories) => {
    categories.map((category) => {
      return (
        <DropdownMenuCheckboxItem
          key={category.id}
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          {category.name}
          {category.children?.length > 0 && renderCategories(category.children)}
        </DropdownMenuCheckboxItem>
      );
    });
  };

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="outline">Quick Navigation</Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-56">
    //     <DropdownMenuSeparator />
    //     {renderCategories(tree)}
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <div>
      {tree.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownCatergories;
