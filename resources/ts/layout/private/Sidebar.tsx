import React, { useRef } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import Logo from './sidebar/Logo';
import Nav from './sidebar/Nav';
import SettingButton from './sidebar/SettingButton';

const Sidebar = ({mobileNavsidebar}) => {
    const sidebarRef = useRef(null);
    const sidebarOutsideClick = useOutsideClick(sidebarRef);

    //console.log("sidebar Ref", sidebarRef)
    //console.log("sidebar Ref sidebarOutsideClick", sidebarOutsideClick)
    return (
        <aside className={`${mobileNavsidebar ? 'block' : 'hidden'} sm:flex sm:flex-col z-50`} ref={sidebarRef}>
            <Logo />
            
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                <Nav sidebarOutsideClick={sidebarOutsideClick} />
                <SettingButton />
            </div>
        </aside>
    );
};

export default Sidebar;