export const ProductFormUI = ({ product, errors, loading, onChange, onFileChange, onSubmit }) => {

    return (
        <section>
            <form onSubmit={onSubmit} className="product-form">
                <h2 className="product-form__title"> Agregar Producto </h2>
                <div className="form-grid">
                    <div className="form-group">
                        <label>Nombre:</label>
                        <input type="text" name="name" value={product.name} onChange={onChange} required />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label> Precio: </label>
                        <input type="number" name="price" value={product.price} onChange={onChange} required />
                        {errors.price && <p className="error">{errors.price}</p>}
                    </div>
                    <div className="form-group">
                        <label> Categoria: </label>
                        <input type="text" name="category" value={product.category} onChange={onChange} required />
                        {errors.category && <p className="error">{errors.category}</p>}
                    </div>
                    <div className="form-group">
                        <label> Descripcion: </label>
                        <textarea name="description" value={product.description} onChange={onChange} required />
                        {errors.description && <p className="error">{errors.description}</p>}
                    </div>
                </div>
                <div>
                    <div className="form-group">
                        <label> Imagen: </label>
                        <div className="file-input-wrapper">
                            <label className="file-label">
                                Subir imagen
                                <input type="file" name="image" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} accept="image/*" required />
                            </label>
                        </div>
                        {errors.imageFile && <p className="error">{errors.imageFile}</p>}
                    </div>
                </div>
                {errors.general && <div className="alert alert--danger">{errors.general}</div>}
                <div className="form-actions">
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                        {loading ? "Guardando..." : "Guardar"}
                    </button>
                </div>
            </form>
        </section>
    );
};
