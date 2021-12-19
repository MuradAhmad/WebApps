import React, {useState, FC } from 'react'
import { NavbarItem } from '../Modals/NavbarItem'

import {NavbarLink, NavbarLabel} from './NavbarElements'

type NavbarLinkProps = {
    item: NavbarItem
}

const Submenu: FC<NavbarLinkProps> = ({ item }) => {
    
    const [subnav, setSubnav] = useState(false);
    const showSubnav =  () => setSubnav(!subnav); 


    return (
        <>
          <NavbarLink to= {item.path} onClick={showSubnav}>
              <div>
                  <NavbarLabel>{item.title}</NavbarLabel>
              </div>
            </NavbarLink> 
        </>
    )
}

export default Submenu
