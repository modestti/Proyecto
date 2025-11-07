const BASE_URL = "https://690295b5b208b24affe68753.mockapi.io/products"

export const createProduct = async (product) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if(!response.ok) {
        throw new Error("No se pudo crear el producto");
    }
    const result = await response.json();
    return result;
}
  