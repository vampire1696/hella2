"use client";
import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import Link from "next/link";

const DropdownCatergories = ({ tree }) => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(true);

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Quick Navigation</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <ScrollArea className="h-72">
          <div className="p-4 space-y-1">
            {tree.map((item) => (
              <div key={item.id}>
                <Link href={`/courses?category=${item.slug}&page=1`}>
                  <DropdownMenuItem>{item.name}</DropdownMenuItem>
                </Link>
                {item.children?.length > 0 && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        href={`/courses?category=${child.slug}&page=1`}
                      >
                        <DropdownMenuItem>{child.name}</DropdownMenuItem>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownCatergories;
