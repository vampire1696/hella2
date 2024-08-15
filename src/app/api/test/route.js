import wc from "@/lib/woocommerce";

export async function GET(req) {
  // const result = buildCategoryTree(getArray());
  const result2 = buildCategoryHierarchy(getArray());
  return Response.json({ result2 });
}

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
    if (category.parent === 0) {
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

function getArray() {
  return [
    {
      id: 324,
      name: "ALM",
      slug: "alm",
      parent: 229,
      description: "",
      display: "default",
      image: {
        id: 5732,
        date_created: "2017-06-07T12:42:17",
        date_created_gmt: "2017-06-07T12:42:17",
        date_modified: "2023-08-19T12:12:24",
        date_modified_gmt: "2023-08-19T12:12:24",
        src: "https://enzudu.de/wp-content/uploads/2017/06/side_by_side4-1.jpg",
        name: "side_by_side4",
        alt: "",
      },
      menu_order: 0,
      count: 26,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/324",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/229",
          },
        ],
      },
    },
    {
      id: 404,
      name: "Cyber Security",
      slug: "cyber-security",
      parent: 162,
      description: "",
      display: "default",
      image: {
        id: 5910,
        date_created: "2024-06-13T07:21:57",
        date_created_gmt: "2024-06-13T07:21:57",
        date_modified: "2024-06-13T07:21:57",
        date_modified_gmt: "2024-06-13T07:21:57",
        src: "https://enzudu.de/wp-content/uploads/2024/06/443916332_8001088553243127_7382452061400718387_n-1.jpg",
        name: "443916332_8001088553243127_7382452061400718387_n",
        alt: "",
      },
      menu_order: 0,
      count: 23,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/404",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 335,
      name: "DOORS",
      slug: "doors",
      parent: 229,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 8,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/335",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/229",
          },
        ],
      },
    },
    {
      id: 336,
      name: "ECM",
      slug: "ecm",
      parent: 229,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 4,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/336",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/229",
          },
        ],
      },
    },
    {
      id: 162,
      name: "Engineering",
      slug: "engineering",
      parent: 0,
      description: "",
      display: "default",
      image: {
        id: 5732,
        date_created: "2017-06-07T12:42:17",
        date_created_gmt: "2017-06-07T12:42:17",
        date_modified: "2023-08-19T12:12:24",
        date_modified_gmt: "2023-08-19T12:12:24",
        src: "https://enzudu.de/wp-content/uploads/2017/06/side_by_side4-1.jpg",
        name: "side_by_side4",
        alt: "",
      },
      menu_order: 0,
      count: 245,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
      },
    },
    {
      id: 138,
      name: "For Kid",
      slug: "for-kid",
      parent: 0,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 4,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/138",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
      },
    },
    {
      id: 139,
      name: "For Woman",
      slug: "for-woman",
      parent: 0,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 9,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/139",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
      },
    },
    {
      id: 140,
      name: "Free Shipping",
      slug: "free-shipping",
      parent: 0,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 4,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/140",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
      },
    },
    {
      id: 141,
      name: "Highest Rating",
      slug: "highest-rating",
      parent: 139,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 3,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/141",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/139",
          },
        ],
      },
    },
    {
      id: 166,
      name: "I2P-20-10-10-10_GE: Analyse System Requirements",
      slug: "i2p-20-10-10-10_ge-analyse-system-requirements",
      parent: 165,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 21,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/166",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/165",
          },
        ],
      },
    },
    {
      id: 176,
      name: "I2P-20-10-10-20_GE: Define Technical System Architecture",
      slug: "i2p-20-10-10-20_ge-define-technical-system-architecture",
      parent: 165,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 31,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/176",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/165",
          },
        ],
      },
    },
    {
      id: 422,
      name: "I2P-20-10-10-40_GE: Carry out Design FMEA",
      slug: "i2p-20-10-10-40_ge-carry-out-design-fmea",
      parent: 165,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 3,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/422",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/165",
          },
        ],
      },
    },
    {
      id: 165,
      name: "I2P-20-10-10: Develop System Design",
      slug: "i2p-20-10-10-develop-system-design",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 52,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/165",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 178,
      name: "I2P-20-10-20-10: Develop Software Design",
      slug: "i2p-20-10-20-10-develop-software-design",
      parent: 177,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 97,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/178",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/177",
          },
        ],
      },
    },
    {
      id: 267,
      name: "I2P-20-10-20-20: Construct and Test Software Module",
      slug: "i2p-20-10-20-20-construct-and-test-software-module",
      parent: 177,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 38,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/267",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/177",
          },
        ],
      },
    },
    {
      id: 268,
      name: "I2P-20-10-20-30: Integrate Software",
      slug: "i2p-20-10-20-30-integrate-software",
      parent: 177,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 26,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/268",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/177",
          },
        ],
      },
    },
    {
      id: 352,
      name: "I2P-20-10-20-40: Test Software",
      slug: "i2p-20-10-20-40-test-software",
      parent: 177,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 10,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/352",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/177",
          },
        ],
      },
    },
    {
      id: 348,
      name: "I2P-20-10-20-50: Free and Open Source Software - Management",
      slug: "i2p-20-10-20-50-free-and-open-source-software-management",
      parent: 177,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 3,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/348",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/177",
          },
        ],
      },
    },
    {
      id: 177,
      name: "I2P-20-10-20: Develop and Verify Software Design",
      slug: "i2p-20-10-20-develop-and-verify-software-design",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 107,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/177",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 245,
      name: "I2P-20-10-30-10: Develop Hardware Design",
      slug: "i2p-20-10-30-10-develop-hardware-design",
      parent: 244,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 37,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/245",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/244",
          },
        ],
      },
    },
    {
      id: 356,
      name: "I2P-20-10-30-20: Request Development Samples",
      slug: "i2p-20-10-30-20-request-development-samples",
      parent: 244,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 7,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/356",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/244",
          },
        ],
      },
    },
    {
      id: 284,
      name: "I2P-20-10-30-30: Test Hardware",
      slug: "i2p-20-10-30-30-test-hardware",
      parent: 244,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 13,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/284",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/244",
          },
        ],
      },
    },
    {
      id: 244,
      name: "I2P-20-10-30: Develop and Verify Hardware Design",
      slug: "i2p-20-10-30-develop-and-verify-hardware-design",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 46,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/244",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 183,
      name: "I2P-20-10-40-10: Develop and Verify Mechanical Design Concept",
      slug: "i2p-20-10-40-10-develop-and-verify-mechanical-design-concept",
      parent: 182,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 36,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/183",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/182",
          },
        ],
      },
    },
    {
      id: 184,
      name: "I2P-20-10-40-20: Detail and Verify Mechanical Design",
      slug: "i2p-20-10-40-20-detail-and-verify-mechanical-design",
      parent: 182,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 23,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/184",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/182",
          },
        ],
      },
    },
    {
      id: 185,
      name: "I2P-20-10-40-30_GE: Qualify Mechanical Components",
      slug: "i2p-20-10-40-30_ge-qualify-mechanical-components",
      parent: 182,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 12,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/185",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/182",
          },
        ],
      },
    },
    {
      id: 186,
      name: "I2P-20-10-40-40_GE: Sign off Mechanical Components",
      slug: "i2p-20-10-40-40_ge-sign-off-mechanical-components",
      parent: 182,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 10,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/186",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/182",
          },
        ],
      },
    },
    {
      id: 182,
      name: "I2P-20-10-40: Develop and Verify Mechanical Design",
      slug: "i2p-20-10-40-develop-and-verify-mechanical-design",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 41,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/182",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 285,
      name: "I2P-20-10-60-10: Develop System Test",
      slug: "i2p-20-10-60-10-develop-system-test",
      parent: 276,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 8,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/285",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/276",
          },
        ],
      },
    },
    {
      id: 277,
      name: "I2P-20-10-60-20: Integrate System",
      slug: "i2p-20-10-60-20-integrate-system",
      parent: 276,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 7,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/277",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/276",
          },
        ],
      },
    },
    {
      id: 286,
      name: "I2P-20-10-60-30: Test System",
      slug: "i2p-20-10-60-30-test-system",
      parent: 276,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 10,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/286",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/276",
          },
        ],
      },
    },
    {
      id: 276,
      name: "I2P-20-10-60: Integrate and Verify System Design",
      slug: "i2p-20-10-60-integrate-and-verify-system-design",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 11,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/276",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 164,
      name: "I2P-20-10-90-10: Work out Technical Quote",
      slug: "i2p-20-10-90-10-work-out-technical-quote",
      parent: 163,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 22,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/164",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/163",
          },
        ],
      },
    },
    {
      id: 490,
      name: "I2P-20-10-90-30_GE: Approve Development Maturity",
      slug: "i2p-20-10-90-30_ge-approve-development-maturity-2",
      parent: 0,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 1,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/490",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
      },
    },
    {
      id: 448,
      name: "I2P-20-10-90-30_GE: Approve Development Maturity",
      slug: "i2p-20-10-90-30_ge-approve-development-maturity",
      parent: 163,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 1,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/448",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/163",
          },
        ],
      },
    },
    {
      id: 446,
      name: "I2P-20-10-90-40: Problem Resolution and Change Management",
      slug: "i2p-20-10-90-40-problem-resolution-and-change-management",
      parent: 163,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 2,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/446",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/163",
          },
        ],
      },
    },
    {
      id: 489,
      name: "I2P-20-10-90-50_GE: Manage Customer Releases",
      slug: "i2p-20-10-90-50_ge-manage-customer-releases-2",
      parent: 0,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 1,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/489",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
      },
    },
    {
      id: 380,
      name: "I2P-20-10-90-50_GE: Manage Customer Releases",
      slug: "i2p-20-10-90-50_ge-manage-customer-releases",
      parent: 163,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 2,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/380",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/163",
          },
        ],
      },
    },
    {
      id: 325,
      name: "I2P-20-10-90-60: Configuration Management in Product Development",
      slug: "i2p-20-10-90-60-configuration-management-in-product-development",
      parent: 163,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 7,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/325",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/163",
          },
        ],
      },
    },
    {
      id: 443,
      name: "I2P-20-10-90-70: Manage Test Bench Life Cycle",
      slug: "i2p-20-10-90-70-manage-test-bench-life-cycle",
      parent: 163,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 1,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/443",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/163",
          },
        ],
      },
    },
    {
      id: 163,
      name: "I2P-20-10-90: Support Development Process",
      slug: "i2p-20-10-90-support-development-process",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 35,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/163",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 143,
      name: "Masonry",
      slug: "masonry",
      parent: 0,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 2,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/143",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
      },
    },
    {
      id: 146,
      name: "New In",
      slug: "new-in",
      parent: 139,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 4,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/146",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/139",
          },
        ],
      },
    },
    {
      id: 251,
      name: "PLM",
      slug: "plm",
      parent: 229,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 15,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/251",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/229",
          },
        ],
      },
    },
    {
      id: 193,
      name: "Process Basics",
      slug: "process-basics",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 7,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/193",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 417,
      name: "Product Safety",
      slug: "product-safety",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 9,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/417",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 204,
      name: "Project Management",
      slug: "project-management",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 20,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/204",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 230,
      name: "PTC",
      slug: "ptc",
      parent: 229,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 11,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/230",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/229",
          },
        ],
      },
    },
    {
      id: 423,
      name: "Quality",
      slug: "quality",
      parent: 162,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 5,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/423",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/162",
          },
        ],
      },
    },
    {
      id: 365,
      name: "SAP PPM / K2",
      slug: "sap-ppm-k2",
      parent: 229,
      description: "",
      display: "default",
      image: null,
      menu_order: 0,
      count: 9,
      _links: {
        self: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/365",
          },
        ],
        collection: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories",
          },
        ],
        up: [
          {
            href: "https://enzudu.de/wp-json/wc/v3/products/categories/229",
          },
        ],
      },
    },
  ];
}
