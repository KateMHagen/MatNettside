import React from "react";
import Menu from './Menu';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className='wrapper'>
            <Menu/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}