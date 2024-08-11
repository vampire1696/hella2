"use server";

import wc from "@/lib/woocommerce";
import { revalidatePath } from "next/cache";

export async function createProductFromForm(formdata) {
  const name = formdata.get("productName");
  const description = formdata.get("desc");
  const sourcelink = formdata.get("sourcelink");
  try {
    const formUpload = await wc.createProduct(name, description, sourcelink);
    if (!!formUpload) {
      revalidatePath("/new-proposals");
    }
    return { success: "Product created successfully!" };
  } catch (error) {
    return { error: error.message };
  }
}
