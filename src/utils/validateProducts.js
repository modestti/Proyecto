export const validateProduct = (product,fileRequired=true) => {
    const errors = [];

    if(!product.name.trim()){
        errors.name = "El nombre es obligatorio";
    }

    if(!product.price || product.price <= 0){
        errors.price = "El precio debe ser un número positivo";
    }

    if(!product.category.trim()){
        errors.category = "La categoría es obligatoria";
    }

    if(!product.description.trim()){
        errors.description = "La descripción es obligatoria";
    }

    if(fileRequired && !product.imageFile){
        errors.imageFile = "La imagen es obligatoria";
    }

    return errors;
}