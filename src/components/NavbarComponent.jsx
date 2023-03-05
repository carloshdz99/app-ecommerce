import React, { useContext } from 'react';
// importando el contexto
import { AppContext } from '../context/CategoryContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faShoppingCart);

const NavbarComponent = () => {
    const { quantityProducts } = useContext(AppContext);

    return (
        <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>ECOMMERCE</Link>
                <div>
                    <Link to='/cart'><FontAwesomeIcon icon={['fas', 'shopping-cart']} color='white' /></Link>
                    {
                        quantityProducts >= 1 && (
                            <span className="badge text-bg-secondary">{quantityProducts}</span>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;
