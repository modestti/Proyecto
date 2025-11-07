import { useState } from "react"
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/productsServices";
import "./ProductFormContainer.css";

export const ProductFormContainer=() => {

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState();
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const newErrors = validateProduct({ ...product, file });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try{
            const imageUrl = await uploadToImgbb(file);
            const productData = {
                ...product, price: Number(product.price), imageUrl
            }
            await createProduct(productData);
            alert ("Producto creado con exito");
            setProduct ({
                name: "",
                price: "",
                category: "",
                description: "",
            });
            setFile (null);
        }catch(error){
            setErrors({general: error.message})
        }finally{
            setLoading(false);
        }

    }

    return <ProductFormUI
        product={product}
        errors={errors}
        loading={loading}
        onChange={handleChange}
        onFileChange={setFile}
        onSubmit={handleSubmit} />

}