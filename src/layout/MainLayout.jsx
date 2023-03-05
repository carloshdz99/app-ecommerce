import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import { useLocation } from 'react-router-dom';
import { CategoryMenuComponent } from '../components/CategoryMenuComponent';

export const MainLayout = ({ children }) => {

    const location = useLocation();

    return (
        <>
            <NavbarComponent />
            {
                location.pathname === '/products' && (
                    <CategoryMenuComponent />
                )
            }
            {children}
        </>
    )
}
