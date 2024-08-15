import React from "react";
import DropdownCatergories from "./DropdownCatergories";
import wc from "@/lib/woocommerce";

function buildCategoryHierarchy(categories) {
  // Tạo một bản đồ để lưu trữ các category theo id của chúng
  const categoryMap = {};

  // Duyệt qua danh sách các category để thêm chúng vào categoryMap
  categories.forEach((category) => {
    category.children = []; // Khởi tạo mảng children
    categoryMap[category.id] = category; // Thêm category vào bản đồ
  });

  // Mảng để chứa các category root (các category không có cha)
  const rootCategories = [];

  // Duyệt qua danh sách các category để xây dựng cây phân cấp
  categories.forEach((category) => {
    if (category.parent === 162) {
      // Nếu category không có cha, thêm vào mảng rootCategories
      rootCategories.push(category);
    } else {
      // Nếu category có cha, thêm nó vào mảng children của cha
      const parentCategory = categoryMap[category.parent];
      if (parentCategory) {
        parentCategory.children.push(category);
      }
    }
  });

  return rootCategories;
}
const DropdownFetchDataCategories = async () => {
  const allcategory = await wc.getAllCategoriesComplete(100);

  const allCategoryTree = buildCategoryHierarchy(allcategory);

  return (
    <div>
      <DropdownCatergories tree={allCategoryTree} />
    </div>
  );
};

export default DropdownFetchDataCategories;
