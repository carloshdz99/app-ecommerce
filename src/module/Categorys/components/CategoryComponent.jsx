import React, { useContext } from 'react';
// importando el contexto
import { AppContext } from '../../../context/CategoryContext';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

library.add(faEye);

export const CategoryComponent = ({
    nombre,
    descripcion,
    imagen,
    products,
    subcategoria,
    subcategorias,
}) => {
    const navigate = useNavigate();
    const { setCategorySelect } = useContext(AppContext);
    const handleSelectCategory = () => {
        setCategorySelect({
            products: products ? products : [],
            subcategoria,
            subcategorias: subcategorias ? subcategorias : [],
        });

        // redirigimos a la pagina del listado de productos
        navigate("/products");
    }

    return (
        <div className="col p-3">
            <div className='card' style={{ "width": "18rem" }}>
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <button className="btn btn-primary"
                        onClick={() => handleSelectCategory()}
                    ><FontAwesomeIcon icon={['fa', 'eye']} color='white' /></button>
                </div>
            </div>
        </div>
    )
}
