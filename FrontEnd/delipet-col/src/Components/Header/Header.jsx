"use client"
import React, { useContext } from 'react';
import "./header.styles.scss";
//Importacion de contexto global sobre el sitio
import GlobalContext from '../../GlobalContext';
//Importacion de componentes
import Navigation from '../Navigation/Navigation';
import UserNavigation from '../UserNav/UserNavigation';
import ShoppingCartHeader from '../ShoppingCartHeader/ShopingCartHeader'
import HeaderSearchComponent from '../SearchHeader/HeaderSearchComponent';


const Header = () => {
  const { isMobile, mobileWidth, logoDeliPet } = useContext(GlobalContext);

  return (
    <> 
      {isMobile ?
        <header className='headerSection'>
          <section className='infoSectionHeader'>
            Acta va contenido informativo llamativo
          </section>
          <section className='contactSectionHeader'>
            Informacion de contacto, numero, telefono, whatsapp, instagram y redes sociales
          </section>
          <section className="searchSectionHeader">
            <div id="containerLogo">
              <img src={logoDeliPet} alt="Delipet-logo" id="logoImg"/>
            </div>
            <div>
              <HeaderSearchComponent/>
            </div>
            <UserNavigation width="25%"/>
          </section>
          <section className='mainSectionHeader'>
            <div style={{width:"40%", maxWidth:"40%"}}>
              <Navigation/>
            </div>
            <div style={{width:"30%", maxWidth:"30%"}}>
              <ShoppingCartHeader/>
            </div>
          </section>
        </header>
        :
        <header className='headerSection'>
          <section className='infoSectionHeader'>
            Acta va contenido informativo llamativo
          </section>
          <section className='contactSectionHeader'>
            Informacion de contacto, numero, telefono, whatsapp, instagram y redes sociales
          </section>
          <section className="searchSectionHeader">
            <div id="containerLogo">
              <img src={logoDeliPet} alt="Delipet-logo" id="logoImg"/>
            </div>
            <div>
              <HeaderSearchComponent/>
            </div>
            <div style={{maxWidth:"30%"}}>
              <ShoppingCartHeader/>
            </div>
            <UserNavigation/>
          </section>
          <section className='mainSectionHeader'>
            <Navigation width="50%"/>
          </section>
        </header>
      }
    </>
  )
}


export default Header