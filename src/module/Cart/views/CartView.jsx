import React, { useContext } from 'react';
// importando el contexto
import { AppContext } from '../../../context/CategoryContext';
import Delivery from '../../../assets/delivery.png';
import Ubicacion from '../../../assets/ubicacion.png';
import Dinero from '../../../assets/dinero.png';
import Tarjeta from '../../../assets/tarjeta.png';

export const CartView = () => {

    const { productsSelected, setProductsSelected, setQuantityProducts, quantityProducts, total, setTotal } = useContext(AppContext);

    // funcion para remover items de la lista
    const handleRemove = ({ id, cantidad, subtotal }) => {
        setProductsSelected(productsSelected.filter((x) => x.id !== id));
        setQuantityProducts(quantityProducts - cantidad);
        setTotal(total - subtotal);
    }

    return (
        <div className='container'>
            <div className='row py-3'>
                {/** Informacion de pago */}
                <div className='col'>
                    <div className='card'>
                        <h5 className="card-title text-center">Finalizar Orden</h5>
                        <hr></hr>

                        <h4>Tipo de entrega</h4>
                        <div className='row'>
                            <div className='col p-3'>
                                <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={Delivery} className="img-fluid rounded-start" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Domicilio</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col p-3'>
                                <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={Ubicacion} className="img-fluid rounded-start" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Recoger en tienda</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <hr></hr>
                        <h4>Informacion de contacto</h4>

                        <div className="mb-3 mx-3">
                            <label className="form-label">Nombre*</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" disabled />
                        </div>
                        <div className="mb-3 mx-3">
                            <label className="form-label">Correo Electronico*</label>
                            <input type="email" className="form-control" disabled />
                        </div>
                        <div className="mb-3 mx-3">
                            <label className="form-label">Número de Celular*</label>
                            <input type="email" className="form-control" disabled />
                        </div>

                        <hr></hr>
                        <h4>Indicaciones y formas de pago</h4>
                        <div className='row'>
                            <div className='col p-3'>
                                <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={Dinero} className="img-fluid rounded-start" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Efectivo</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col p-3'>
                                <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={Tarjeta} className="img-fluid rounded-start" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Tarjeta</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/** Productos seleccionados */}
                <div className='col'>
                    <div className='text-center'>
                        <h3>Orden</h3>
                    </div>

                    <div className='py-3 text-center'>
                        {
                            productsSelected.map((i) => (
                                <div key={i.id} className="card mb-3" style={{ "maxWidth": "540px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={i.imagen} className="img-fluid rounded-start" alt={i.nombre} style={{ "height": "100%" }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{i.nombre}</h5>
                                                <p>Cantidad: {i.cantidad}</p>
                                                <h4 className="card-text"><small className="text-muted">Subtotal: ${i.subtotal}</small></h4>
                                            </div>
                                            <p className="card-text" style={{ "textDecoration": "underline", "color": "red" }} onClick={() => handleRemove(i)} >
                                                <small className="text-muted">Remover de la lista</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <h4>Total: ${total}</h4>
                </div>
            </div>
        </div>
    )
}
