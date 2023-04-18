import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import logoVass from '../../public/images/logoVass.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Image src={logoVass} alt="Logo" width={100} height={50} />
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li><a href="#">Casos de éxito</a></li>
          <li className="menu-dropdown">
            <a href="#">Mercados <span className="arrow-icon"></span></a>
            <select>
            <option value="">select</option>
            <option value="mercado1">Mercado 1</option>
            <option value="mercado2">Mercado 2</option>
            <option value="mercado3">Mercado 3</option>
          </select>

          </li>
          <li className="menu-dropdown">
            <a href="#">Países <span className="arrow-icon"></span></a>
            <select>
            <option value="">Selec</option>
            <option value="mercado1">Países 1</option>
            <option value="mercado2">Países 2</option>
            <option value="mercado3">Países 3</option>
          </select>
          </li>
          <li><a href="#">Somos VASS</a></li>
          <li><a href="#">Cómo lo hacemos</a></li>
          <li><a href="#">Insight</a></li>
          <li><a href="#">Noticias</a></li>
          <li><a href="#">VASS Research</a></li>
        </ul>
        <div className="header__language">
          <a href="#">EN</a>
          <span>/</span>
          <a href="#">SP</a>
        </div>
        <div className="header__search">
          <AiOutlineSearch size={32} />
        </div>
        <div className="header__menu-toggle">
          <AiOutlineMenu size={32} />
        </div>
      </nav>
    </header>
  );
}
