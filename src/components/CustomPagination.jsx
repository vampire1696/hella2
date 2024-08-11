import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CustomPagination = ({
  total_pages,
  current_page,
  category,
  attribute_term,
}) => {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          {Array.from({ length: total_pages }, (_, index) => {
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  scroll={false}
                  isActive={current_page == index + 1}
                  href={`/courses?category=${category}&page=${index + 1}${
                    !attribute_term ? "" : `&attribute_term=${attribute_term}`
                  }`}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          {/* ''<PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>'' */}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
