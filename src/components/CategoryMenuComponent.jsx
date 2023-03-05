import React, { useContext } from 'react';
// importando el contexto
import { AppContext } from '../context/CategoryContext';
import { useNavigate } from "react-router-dom";

export const CategoryMenuComponent = () => {
    const navigate = useNavigate();
    const { categorys, setCategorySelect } = useContext(AppContext);

    const handleSelectCategory = (i) => {
        setCategorySelect({
            products: i.menus ? i.menus : [],
            subcategoria: i.subcategoria,
            subcategorias: i.subcategorias ? i.subcategorias : [],
        });

        // redirigimos a la pagina del listado de productos
        navigate("/products");
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {
                    categorys?.categorias?.map((i) => (
                        <label key={i.id}
                            onClick={() => handleSelectCategory(i)}
                        >
                            {i.nombre}
                        </label>
                    ))
                }
            </div>
        </nav>
    )
}
