import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

const FooterSection = styled.div`
  background: #000;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;   
  z-index: -2;
    
`;

const Footer = () => {
    
    return (
        <>
                <FooterSection>
            <div className="flex flex-col ">
            <div>
                <form className="px-0 sm:px-56 mx-auto">
                    <input className=" px-16 sm:px-36 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent mr-4 rounded-md " placeholder="Suscribete al Newsletter"></input>
                    <button className="bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 font-semibold rounded-sm ">Regístrate!</button>
                </form>
            </div>
            <div className="text-white">
                Copyright © 2021 Automobili Lamborghini S.p.A. una sociedad unipersonal de Audi Group.
                Todos los derechos reservados. Núm. IVA IT 00591801204
            </div>
            </div>
        </FooterSection>
        </>
    );
};

export default Footer;