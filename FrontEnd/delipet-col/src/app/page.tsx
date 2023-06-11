"use client"
import React, { useState, useEffect } from 'react';
import "./page.styles.css"
// Contexto global de variables
import GlobalContext from '../GlobalContext';
// Importacion de Componentes
import HomePage from "../Pages/Home/HomePage"


export default function Pages() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileWidth, setMobileWidth] = useState(600);
  const arrayNavItems = ["Productos", "Servicios", "Promociones", "Contáctanos"];
  const logoDeliPet = "https://lh3.googleusercontent.com/4IleDGR0FD7dxvelRQhVXKoB2bk825CRv6X1GRXkjI8ER_XpJRewVPn-Uqfgher6Fn-z7kchjpNHmx5WI2dzML2uMBOCLpllgIjP6vad";
  const whatsappInfo = {whatsappNumber: '573134945918', defaultMessage: "Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n."}

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <GlobalContext.Provider value={{ isMobile, mobileWidth, arrayNavItems, logoDeliPet }}>
      <HomePage/>
      <div id="containerImgWhatsapp" onClick={() => {window.open(`https://api.whatsapp.com/send?phone=${whatsappInfo.whatsappNumber}&text=${whatsappInfo.defaultMessage}`, '_blank')}}>
        <img id="logoWhatsapp" src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png.png" alt="logoWhatsapp" />
      </div>
    </GlobalContext.Provider>
  )
}
