export async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("La solicitud no fue exitosa");
  }
  return response.json();
}
