import React from 'react';
import './Header.css'

const Header = () => {

    return (
        <nav>
            <div class="nav-logo">
                <h1>Portal de Mantenimiento // Regional Neuquén</h1>
            </div>
            <div class="nav-options">
                <a href="/nuevo-caso" class="nav-option">Nuevo Caso</a>
                <a href="/informes" class="nav-option">Informes</a>
                <a href="/informacion" class="nav-option">Información</a>
                <a href="/editar" class="nav-option">Editar</a>
                <a href="/" class="nav-option">Menú principal</a>
                <a href="/registro" class="nav-option">Registro</a>
                <a href="/ingreso" class="nav-option">Ingreso</a>
            </div>
        </nav>
    )
}

export default Header;
