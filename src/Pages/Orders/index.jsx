import './style.css'
import { useState } from 'react'

export const Orders = () => {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: 'محادثة',
            selected: false,
        },
        {
            id: 2,
            title: 'الموقع والتطبيق',
            selected: false,
        },
        {
            id: 3,
            title: 'بضائع',
            selected: false,
        },
        {
            id: 4,
            title: 'العملاء',
            selected: false,
        },
        {
            id: 5,
            title: 'طلبات',
            selected: true,
        },
    ])

    return (
        <div className='orders'>
            <div className='ordersTitle'><h1>لوحة تحكم الموقع والتطبيق</h1></div>

            <section className='ordersTabs'>
                {tabs?.map((e, i) => (
                    <div className={e?.selected ? 'eachSelectedTab' : 'eachTab'} key={i}>
                        <span>{e?.title}</span>
                    </div>
                ))}
            </section>
        </div>
    )
}