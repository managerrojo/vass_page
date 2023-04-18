import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <p>Copyright © 2021 Todos los derechos reservados</p> 
      <p>Memoria ambiental Política de cookies</p>
      <p> Politica de privacidad y medio ambiente</p><br /> <br />
      <div className="social-icons"> 
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
        <a href="https://www.youtube.com"><FaYoutube /></a>

      </div>
    </footer>
  );
}

export default Footer;


