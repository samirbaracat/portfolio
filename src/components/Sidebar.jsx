import React from 'react'
import SocialNetworks from './SocialNetworks'
import Avatar from '../img/sam.jpeg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="Samir Baracat" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">Download curriculo</a>
  </aside>
}

export default Sidebar