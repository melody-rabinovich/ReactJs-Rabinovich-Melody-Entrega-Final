export const validateProduct = (product) => {
    const errors = {};

    if (!product.name.trim()){
        errors.name = "El nombre es obligatorio";
    }

    if (!product.price || product.price <= 0){
        errors.price = "Precio inválido"
    }

    if (!product.description.trim()) {
        errors.description = "La descripción es obligatoria"
    }

    if(!product.category.trim()){
        errors.category = "La categoría es obligatoria"
    }

    if(!product.file){
        errors.file = "Falta seleccionar una imágen"
    }

    return errors

}