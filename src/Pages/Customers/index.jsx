import { useState } from 'react'
import { PDF } from '../../Components/Svg'
import './style.css'

export const Customers = () => {
    const [tableData, setTableData] = useState([
        {
            id: 1,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 2,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 3,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 4,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 5,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 6,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 7,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 8,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 9,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
        {
            id: 10,
            date: '12.04.2023',
            bonuses: '1 500',
            requests: '3',
            email: 'hello@mail.ru',
            phone: '8 965 205 23 55',
            name: 'انطون'
        },
    ])
    const [pageCount, setPageCount] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)

    function handlePageChange(page) {
        setCurrentPage(page)
    }

    return (
        <div className='customers'>
            <div className='customersTop'>
                <button>تحميل الجدول</button>
                <h1>قائمة المستخدمين</h1>
            </div>

            <table className='ordersTable'>
                <tbody>
                    {tableData?.length > 0
                        ? tableData?.map((e, i) => (
                            <tr className='eachTR eachTRHover' key={i} onClick={() => window.location = `/customer/${e?.id}`}>
                                <td><PDF /></td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>تاريخ التسجيل</span>
                                        <p className='eachDataValue'>{e?.date}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>المكافآت</span>
                                        <p className='eachDataValue'>{e?.bonuses}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>طلبات</span>
                                        <p className='eachDataValue'>{e?.requests}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>بريد</span>
                                        <p className='eachDataValue'>{e?.email}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>هاتف</span>
                                        <p className='eachDataValue'>{e?.phone}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>اسم</span>
                                        <p className='eachDataValue'>{e?.name}</p>
                                    </div>
                                </td>
                            </tr>
                        ))
                        : <span>No table data</span>
                    }
                </tbody>
            </table>

            <section className='pagination'>
                {(() => {
                    const elements = []
                    for (let i = 0; i < pageCount; i++) {
                        elements.push(
                            <div className={currentPage === i + 1 ? 'eachPage eachSelectedPage' : 'eachPage'} onClick={() => handlePageChange(i + 1)} key={i}>
                                {i + 1}
                            </div>
                        )
                    }
                    return elements.reverse()
                })()}
            </section>

        </div>
    )
}