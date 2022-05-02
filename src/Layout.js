import NavBar from './NavBar'
import { Outlet } from "react-router-dom";
import './Layout.scss'

export default function Layout () {
    return (
        <>
            <div className='outlet'>
        <Outlet/>
            </div >
            <div className='navBar'>
        <NavBar />
            </div>
        </>
    )
}