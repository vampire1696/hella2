import wc from "@/lib/woocommerce";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const deliFormat = searchParams.get("deliFormat");
  const numberDeliFormat = parseInt(deliFormat);
  const searchText = searchParams.get("searchText");
  if (!deliFormat || !searchText) {
    return new Response("Missing deliFormat or searchText", { status: 400 });
  }
  const searchArray = await wc.getProductsByCategory(
    162,
    12,
    1,
    numberDeliFormat,
    searchText
  );
  const searchResult = searchArray.productByCategory;
  return Response.json({ searchArray });
}
