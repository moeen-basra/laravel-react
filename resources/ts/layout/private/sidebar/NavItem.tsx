/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-key */
import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const NavItem = ({sidebarStatus, menuTitle, subMenu, subMenuArray, hrefLink, children}) => {
    const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);
    const subMenuToggle = ()=>{
        setSubMenuToggleStatus(!subMenuToggleStatus)
      }
      
    useEffect(()=>{
        if(!sidebarStatus){
            setSubMenuToggleStatus(false)
        }
    },[sidebarStatus])  
    //console.log('submenu', sidebarStatus)
    return (
        <>  
            <Link to={hrefLink}>
               <span  className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group" onClick={subMenuToggle}>
                    {children}
                     <span className={`${sidebarStatus ? 'text-base ml-2' : 'sr-only'}`}>{menuTitle}</span> 
                     <span className={`${sidebarStatus ? 'hidden' : 'hidden group-hover:block'} absolute left-0 -bottom-5 bg-yellow-500 text-white p-1 text-xs`}>{menuTitle}</span>
                </span>
            </Link>

            {/* Chile Menu */}
            {subMenu && (
                <ul className={`${subMenuToggleStatus ? '' : 'hidden'} text-white space-y-2 ml-7`}>
                    {subMenuArray.map((subMenu, index)=> (
                        <Link to={subMenu.linkHref} key={index}>
                        <li className='cursor-pointer active:text-orange-400 hover:text-purple-500' key={index}>{subMenu.subMenuTitle}</li>
                        </Link>
                        ))
                    }
                </ul>      
            )}
          
          
        </>
    );
};

export default NavItem;