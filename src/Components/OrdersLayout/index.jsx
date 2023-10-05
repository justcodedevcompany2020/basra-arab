import './style.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const OrdersLayout = () => {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: 'محادثة',
            selected: false,
            path: '/chat',
        },
        {
            id: 2,
            title: 'الموقع والتطبيق',
            selected: false,
            path: '/profile',
        },
        {
            id: 3,
            title: 'بضائع',
            selected: false,
            path: '/products',
        },
        {
            id: 4,
            title: 'العملاء',
            selected: false,
            path: '/customers',
        },
        {
            id: 5,
            title: 'طلبات',
            selected: false,
            path: '/orders',
        },
    ])

    useEffect(() => {
        let newTabs = [...tabs]
        if (window.location.pathname.includes('/customer/')) {
            newTabs.forEach(element => {
                if (element.id === 4) {
                    element.selected = true
                } else {
                    element.selected = false
                }
            })
        } else if (window.location.pathname.includes('/order/')) {
            newTabs.forEach(element => {
                if (element.id === 5) {
                    element.selected = true
                } else {
                    element.selected = false
                }
            })
        }
        setTabs(newTabs)
    }, [])

    return (
        <div>
            <Header />
            <div className='outlet'>
                <div className='ordersTitle'><h1>لوحة تحكم الموقع والتطبيق</h1></div>
                <section className='ordersTabs'>
                    {tabs?.map((e, i) => (
                        <div
                            key={i}
                            className={(window.location.pathname.includes(e?.path) || e?.selected) ? 'eachSelectedTab' : 'eachTab'}
                            onClick={() => window.location = e.path}
                        >
                            <span>{e?.title}</span>
                        </div>
                    ))}
                </section>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}