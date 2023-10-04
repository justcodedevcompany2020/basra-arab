import './style.css'
import { useState } from 'react'
import { PDF } from '../../Components/Svg'

export const Orders = () => {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: 'تحميل الجدول',
            selected: true,
        },
        {
            id: 2,
            title: 'تصفية حسب التاريخ',
            selected: false,
        },
        {
            id: 3,
            title: 'البحث عن طريق الرقم',
            selected: false,
        }
    ])
    const [tableData, setTableData] = useState([
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
        {
            paymentMethod: 'نقدي',
            deliveryMethod: 'يلتقط',
            condition: 'مدفوع',
            date: '12.04.2023',
            price: '999',
            orderNumber: 'SITE-523964',
        },
    ])
    const [pageCount, setPageCount] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)

    function handleSecondaryTabClick(tab) {
        const tabsCopy = [...tabs]
        tabsCopy.forEach(element => {
            if (element?.id === tab?.id) {
                element.selected = true
            } else {
                element.selected = false
            }
        })
        setTabs(tabsCopy)
    }

    function handlePageChange(page) {
        setCurrentPage(page)
    }

    return (
        <div className='orders'>
            <section className='secondaryTabs'>
                <div className='secondaryTabButtons'>
                    {tabs?.map((e, i) => (
                        <div className={e?.selected ? 'eachSelectedSecondaryTab' : 'eachSecondaryTab'} key={i} onClick={() => handleSecondaryTabClick(e)}>
                            <span>{e?.title}</span>
                        </div>
                    ))}
                </div>
                <h1>لائحة الطلبات</h1>
            </section>

            <table className='ordersTable'>
                <tbody>
                    {tableData?.length > 0
                        ? tableData?.map((e, i) => (
                            <tr className='eachTR eachTRHover' key={i} onClick={() => window.location = `/order/${e?.orderNumber}`}>
                                <td><PDF /></td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>طريقة الدفع او السداد</span>
                                        <p className='eachDataValue'>{e?.paymentMethod}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>طريقة التوصيل</span>
                                        <p className='eachDataValue'>{e?.deliveryMethod}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>حالة</span>
                                        <p className='eachDataValue'>{e?.condition}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>تاريخ الطلب</span>
                                        <p className='eachDataValue'>{e?.date}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>سعر الطلب</span>
                                        <p className='eachDataValue'>{e?.price}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>رقم الأمر</span>
                                        <p className='eachDataValue'>{e?.orderNumber}</p>
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