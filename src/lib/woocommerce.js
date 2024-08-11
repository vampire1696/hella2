import axios from "axios";

class Woocomerce {
  //     constructor(url,options){
  //         this.url = url;
  //         this.options = options;
  //    }
  #axiosInstant;

  constructor(baseurl, version) {
    this.#axiosInstant = axios.create({
      baseURL: `${baseurl}/${version}`,
      auth: {
        username: process.env.CONSUMER_KEY,
        password: process.env.CONSUMER_SERCRET,
      },
    });
  }

  async getReviewsOfProductByID(productID) {
    try {
      const res = await this.#axiosInstant.get("/products/reviews", {
        params: { product: productID },
      });
      const reviews = res.data;
      return reviews;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
  async createReview(
    product_id,
    rating,
    review,
    reviewer = undefined,
    reviewer_email = undefined
  ) {
    try {
      const res = await this.#axiosInstant.post("/products/reviews", {
        product_id,
        rating,
        review,
        reviewer,
        reviewer_email,
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  async createProduct(name, description, sourcelink) {
    try {
      const res = await this.#axiosInstant.post("/products", {
        name,
        type: "simple",
        description,
        short_description: "Recommend Product",
        attributes: [
          {
            id: 0,
            name: "source_link",
            slug: "source_link",
            position: 4,
            visible: true,
            variation: false,
            options: [sourcelink],
          },
        ],
      });
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  async getProductBySlug(slug) {
    try {
      const res = await this.#axiosInstant.get("/products", {
        params: { slug },
      });
      const product = res.data[0];
      return {
        ...product,
        attributes: !product.attributes
          ? null
          : product.attributes.reduce((prev, curr) => {
              prev[curr.name] = { ...curr, value: curr.options.at(0) };
              return prev;
            }, {}),
      };
    } catch (error) {
      console.log(error.message);
      return {};
    }
  }
  async getAllCategories(parent = 162, per_page = 20) {
    try {
      const res = await this.#axiosInstant.get("/products/categories", {
        params: { parent, per_page },
      });
      const categories = res.data;
      return categories;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
  async getAllCategoriesComplete(per_page = 20) {
    try {
      const res = await this.#axiosInstant.get("/products/categories", {
        params: { per_page },
      });
      const categories = res.data;
      return categories;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
  async getCategory(slug) {
    try {
      const res = await this.#axiosInstant.get("/products/categories", {
        params: { slug },
      });
      const category = res.data[0];
      return {
        name: category.name,
        imageSrc: category.image?.src,
        id: category.id,
      };
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  async getProductsByCategory(
    categoryId,
    per_page = 12,
    page = 1,
    attribute_term = undefined,
    searchText = undefined
  ) {
    try {
      const res = await this.#axiosInstant.get("/products", {
        params: {
          category: categoryId, //search Params in Woocommerce api documentation
          per_page,
          page,
          search: searchText,
          orderby: "title",
          order: "asc",
          attribute: !!attribute_term ? "pa_deli_format" : undefined,
          attribute_term,
        },
      });
      const allProductsByCategory = res.data;
      const headers = res.headers; // To get totalPages and totalProducts
      return {
        total: headers["x-wp-total"],
        totalPages: headers["x-wp-totalpages"],
        productByCategory: allProductsByCategory,
      };
    } catch (error) {
      console.log(error.message);
      return {};
    }
  }
  async getDeliFormatTerm() {
    try {
      const res = await this.#axiosInstant.get("/products/attributes/5/terms");
      const deliFormatTerm = res.data;
      return deliFormatTerm;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
  async getProductByDeliFormatTerm(categoryId, attribute_term, searchText) {
    try {
      const res = await this.#axiosInstant.get("/products", {
        params: {
          category: categoryId,
          attribute: "pa_deli_format",
          attribute_term,
          search: searchText,
        },
      });
      const productByDeliFormat = res.data;
      return productByDeliFormat;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }
}

const wc = new Woocomerce("https://enzudu.de/wp-json/wc", "v3");

export default wc;
