import React, { useContext } from 'react';
// importando el contexto
import { AppContext } from '../../../context/CategoryContext';
import { CategoryComponent } from '../../Categorys/components/CategoryComponent';
import { ProductComponent } from '../components/ProductComponent';

export const ProductView = () => {
    const { categorySelect } = useContext(AppContext);

    return (
        <div className='container'>
            {
                categorySelect.subcategoria === 'Si' && (
                    <div className='py-3 text-center'>
                        <h3>Especialidades</h3>
                        <hr></hr>
                    </div>
                )
            }
            <div className="row row-cols-3">
                {
                    categorySelect.subcategoria === 'Si' && categorySelect?.subcategorias?.map((i) => (
                        <CategoryComponent
                            key={i.id}
                            nombre={i.nombre}
                            descripcion={i.descripcion}
                            imagen={i?.imagenes?.normal}
                            products={i?.menus}
                            subcategoria={i?.subcategoria}
                            subcategorias={i?.subcategorias}
                        />
                    ))
                }
            </div>


            {/** mostrando los productos */}
            {
                categorySelect.subcategoria === 'No' && (
                    <>
                        <div className='py-3 text-center'>
                            <h3>Platos</h3>
                            <hr></hr>
                        </div>

                        <div className="row row-cols-3">
                            {
                                categorySelect.subcategoria === 'No' && categorySelect?.products?.map((i) => (
                                    <ProductComponent
                                        key={i.id}
                                        id={i.id}
                                        nombre={i.nombre}
                                        descripcion={i.descripcion}
                                        precio={i?.precio}
                                        imagen={i?.imagenes}
                                    />
                                ))
                            }
                        </div>
                    </>
                )

            }
        </div>
    )
}
