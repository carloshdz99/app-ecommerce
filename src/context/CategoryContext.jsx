import { createContext, useState } from "react";

// creamos el contexto de la aplicacion
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    // para informacion del carrito
    const [cart, setCart] = useState([]);

    // tomara las categorias
    const [categorys, setCategorys] = useState([]);

    // para mostrar una categoria en especifico y sus productos
    const [categorySelect, setCategorySelect] = useState({
        products: [],
        subcategoria: '',
        subcategorias: [],
    });

    // para tomar los productos seleccionados
    const [productsSelected, setProductsSelected] = useState([]);

    // cantidad de productos seleccionados
    const [quantityProducts, setQuantityProducts] = useState(0);

    // para cargar la informacion de nuevo
    const [loading, setLoading] = useState(true);

    return (
        <AppContext.Provider value={{
            cart, setCart,
            categorys, setCategorys,
            categorySelect, setCategorySelect,
            loading, setLoading,
            productsSelected, setProductsSelected,
            quantityProducts, setQuantityProducts,
        }}>
            {children}
        </AppContext.Provider>
    );
} 
