
import BlogIcon from "../icons/BlogIcon"
import FilmIcon from "../icons/FilmIcon"
import HomeIcon from "../icons/HomeIcon"
import UsersIcon from "../icons/UsersIcon"
import "./style.scss"
import React from 'react'
import { useSelector } from 'react-redux';
import { sidebarSelectorMode } from "@/redux-toolkit/selector";

function MenuSidebar() {
    const sidebarMode = useSelector(sidebarSelectorMode);
    return (
        <div>
            <ul className='menu--container'>
                <li className="list-item active">
                    <div className="item--container">
                        <HomeIcon className = "icon-item"/>
                        {sidebarMode && <p className="text-item">Home</p>}
                    </div>
                </li>
                <li className="list-item">
                    <div className="item--container">
                        <FilmIcon className = "icon-item"/>
                        {sidebarMode && <p className="text-item">Movies</p>}
                    </div>
                </li>
                <li className="list-item">
                    <div className="item--container">
                        <BlogIcon className = "icon-item"/>
                        {sidebarMode && <p className="text-item">Blog</p>}
                    </div>
                </li>
                <li className="list-item">
                    <div className="item--container">
                        <UsersIcon className = "icon-item"/>
                        {sidebarMode && <p className="text-item">About us</p>}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MenuSidebar