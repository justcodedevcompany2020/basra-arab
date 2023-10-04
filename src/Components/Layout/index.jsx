import './style.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div>
            <Header />
            <div className='outlet'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}