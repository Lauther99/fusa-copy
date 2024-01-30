import '../styles/Menu.css'
import homeLogo from '../assets/LOGO-blanco.png';
import promo1 from '../assets/promo1.jpg';
import promo2 from '../assets/promo2.jpg';
import promo3 from '../assets/promo3.jpg';
import * as menuData from '../assets/carta.json';
import * as type from '../types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC<{ selectedCategory?: string }> = ({ selectedCategory = "Criollo" }) => {
    const [currentCategory, setCurrentCategory] = useState<string>(selectedCategory);
    const menu: type.MenuType = menuData;
    const categorias = menu.tiposMenu;

    const criollos = menu.menu.find(menu => menu.tipo === "Criollo") as type.CriolloType ?? [];
    const piqueos = menu.menu.find(menu => menu.tipo === "Piqueos") as type.PiqueosType ?? [];
    const makis = menu.menu.find(menu => menu.tipo === "Makis") as type.MakisType ?? [];
    const bebidas = menu.menu.find(menu => menu.tipo === "Bebidas") as type.BebidasType ?? [];

    const ActivateButton = (text: string) => {
        setCurrentCategory(text)
    }

    const NavigateToMenu = (text: string): string => {
        switch (text) {
            case "Criollo":
                return "menu/criollo"
            case "Piqueos":
                return "menu/piqueos"
            case "Makis":
                return "menu/makis"
            case "Bebidas":
                return "menu/bebidas"
            case "Promociones":
                return "menu/promociones"
        }
        return "menu/criollo"
    }

    const renderizarCategoria = (categoria: string) => {
        switch (categoria) {
            case "Criollo":
                return (
                    <ul className='criollos-container'>
                        {criollos.categorias?.map(categoria => (
                            <li className='criollos-card' key={categoria.nombre}>
                                <h2 className='nombre-categoria'>
                                    {categoria.nombre.toUpperCase()}
                                </h2>
                                <article>
                                    {
                                        categoria.platos.map(plato => (
                                            <div key={plato.nombre}>
                                                <p>{plato.nombre}</p>
                                                <p>{plato.precio}</p>
                                            </div>
                                        ))
                                    }
                                </article>
                            </li>
                        ))}
                    </ul>
                );
            case "Piqueos":
                return (
                    <ul className='piqueos-container'>
                        {piqueos.categorias?.map(categoria => (
                            <li className='piqueos-card' key={categoria.nombre}>
                                <h2 className='nombre-categoria'>
                                    {categoria.nombre.toUpperCase()}
                                </h2>
                                <p className='descripcion-categoria'>
                                    {categoria.descripcion}
                                </p>
                                <article>
                                    {
                                        categoria.platos.map(plato => (
                                            <div key={plato.nombre}>
                                                <p>{plato.nombre}</p>
                                                <p>{plato.precio}</p>
                                            </div>
                                        ))
                                    }
                                </article>
                            </li>
                        ))}
                    </ul>
                );
            case "Makis":
                return (
                    <ul className='makis-container'>
                        {makis.categorias?.map(categoria => (
                            <li className='makis-card' key={categoria.nombre}>
                                <h2 className='nombre-categoria'>
                                    {categoria.nombre.toUpperCase()}
                                </h2>
                                <p className='precio-categoria'>
                                    {categoria.precio.toUpperCase()}
                                </p>
                                <ul className='makis-tipos'>
                                    {
                                        categoria.platos.map(maki => (
                                            <li key={maki.nombre}>
                                                <h3>{maki.nombre}</h3>
                                                <p>{maki.descripcion}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))}
                    </ul>
                );
            case "Bebidas":
                return (
                    <ul className='bebidas-container'>
                        <h2 className='nombre-categoria'>{bebidas.tipo.toUpperCase()}</h2>
                        <ul>
                            {
                                bebidas.items.map(bebida => (
                                    <li key={bebida.nombre}>
                                        <p>{bebida.nombre}</p>
                                        <p>{bebida.precio}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </ul>
                );
            case "Promociones":
                return (
                    <ul className='promociones-container'>
                        <img src={promo1} alt="Promocion 1" />
                        <img src={promo2} alt="Promocion 2" />
                        <img src={promo3} alt="Promocion 3" />
                    </ul>
                );

            default:
                return <div>Hola</div>;
        }
    };

    return (
        <section className='menu'>
            <article className='logo-fusa'>
                <a href="/">
                    <img src={homeLogo} alt="Logo fusa" />
                </a>
            </article>
            <article className='barra-opciones'>
                <ul>
                    {
                        categorias.map(categoria => (
                            <li key={categoria}>
                                <button className={`btn-menu ${currentCategory === categoria ? "activo" : ""}`} onClick={() => ActivateButton(categoria)}>
                                    <Link to={`/${NavigateToMenu(categoria)}`}>{categoria.toUpperCase()}</Link>
                                    <div className="overlay"></div>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </article>
            <article className='cartas'>
                {renderizarCategoria(currentCategory)}
            </article>

            <button className='btn-menu realizar-pedido-btn'>
                <Link to="https://wa.link/onl2f1" target="_blank">REALIZAR PEDIDOS</Link>
                <div className="realizar-pedido-overlay"></div>
            </button>

        </section>
    );
};
