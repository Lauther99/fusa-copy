import '../styles/Home.css'
import homeImage from '../assets/entraqda.png';
import homeLogo from '../assets/LOGO-blanco.png';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <section className='home'>
            <article className='home-image'>
                <img src={homeImage} alt="Logo fusa" />
            </article>
            <article className='home-options'>
                <div className='options-container'>
                    <img src={homeLogo} alt="" />
                    <div className='entrada'>
                        <ul>
                            <li>
                                <button className="btn-01">
                                    <Link to="/menu">VER MENU</Link>
                                    <div className="overlay"></div>
                                </button>
                            </li>
                            <li>
                                <button className="btn-01">
                                    <Link to="/menu/promociones">PROMOCIONES</Link>
                                    <div className="overlay"></div>
                                </button>
                            </li>
                            <li>
                                <button className="btn-01">
                                    <Link to="https://wa.link/onl2f1" target="_blank">HACER PEDIDOS</Link>
                                    <div className="overlay"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
    );
};
