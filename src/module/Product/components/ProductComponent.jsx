import React, { useState, useContext } from 'react';
// importando el contexto
import { AppContext } from '../../../context/CategoryContext';

export const ProductComponent = ({
    id,
    nombre,
    descripcion,
    precio,
    imagen,
}) => {

    const { productsSelected, setProductsSelected, setQuantityProducts, quantityProducts, total, setTotal } = useContext(AppContext);

    // tomara el valor de la cantiadd seleccionada
    const [quantity, setQuantity] = useState(1);

    // sumara y restara la cantidades seleccionadas
    const handleSumandRes = (operator) => {
        if (operator === '-') {
            if ((quantity - 1) <= 0) {
                setQuantity(1);
                return;
            }

            setQuantity(quantity - 1);
        }

        if (operator === '+') {
            setQuantity(quantity + 1);
        }
    }

    // guardando los productos seleccionados en el contexto
    const handleAddProcut = () => {
        //buscamos si ya fue agregado
        const product = productsSelected.find((x) => x.id === id);

        if (product) {
            productsSelected.map((i) => {
                if (i.id === id) {
                    i.cantidad = i.cantidad + quantity;
                    i.subtotal = i.subtotal + (quantity * precio);
                }
            })
        } else {
            setProductsSelected([
                ...productsSelected,
                {
                    id,
                    nombre,
                    descripcion,
                    subtotal: quantity * precio,
                    cantidad: quantity,
                    imagen: imagen.normal,
                },
            ])
        }

        setTotal(total + (quantity * precio));
        setQuantityProducts(quantityProducts + quantity);
    }

    return (
        <div className="col p-3">
            <div className="card" style={{ "width": "18rem" }}>
                <img src={imagen.normal} className="card-img-top" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${precio}</li>
                </ul>
                <div className="card-body">
                    <div className='text-center'>
                        <div className='row' >
                            <div className='col'>
                                <button className='btn btn-primary' onClick={() => handleSumandRes('-')}>-</button>
                            </div>
                            <div className='col'>
                                <p>{quantity}</p>
                            </div>
                            <div className='col'>
                                <button className='btn btn-primary' onClick={() => handleSumandRes('+')}>+</button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='text-center'>
                        <button className='btn btn-small btn-primary'
                        onClick={() => handleAddProcut()}>Agregar a la orden</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
