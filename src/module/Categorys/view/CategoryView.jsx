import React, { useEffect, useContext } from 'react';
// importando el contexto
import { AppContext } from '../../../context/CategoryContext';
import { categoryService } from '../Services/category.service';
import { CategoryComponent } from '../components/CategoryComponent';
import Food from '../../../assets/food.jpg';

export const CategoryView = () => {

  const { categorys, setCategorys, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    if (loading) {
      categoryService().then((res) => {
        if (res.status) {
          setCategorys(res.data);
        }
      })
    }
    setLoading(false);
  }, [loading]);

  return (
    <>
      <div className="p-5 text-center bg-image" style={{
        "height": 500 + "px",
        "backgroundImage": `url(${Food})`,
        "objectFit": "none"
      }}>
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Gusto que no dan sustos</h1>
              <h4 className="mb-3">La felicidad al alcance de un bocado</h4>
              <a className="btn btn-outline-light btn-lg" href="#menu" role="button">Menu</a>
            </div>
          </div>
        </div>
      </div>
      <div className='container text-center py-3' id='menu'>
        <div className="row row-cols-3">
          {
            categorys?.categorias?.map((i) => (
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
      </div>
    </>
  )
}
