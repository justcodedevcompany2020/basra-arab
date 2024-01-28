import './style.css'
import { useEffect, useState } from 'react'
import { PDF } from '../../Components/Svg'
import { useDispatch, useSelector } from 'react-redux'
import { GetOrderAction } from '../../Services/action/action'
import { Loading } from '../../Components/Loading'

export const Orders = () => {
    const [url, setUrl] = useState('')
    function handleNewCategory() {
        let token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch("https://basrabackend.justcode.am/api/get_all_orders_pdf", requestOptions)
            .then(response => response.json())
            .then(r => {
                window.open(r.url, '_blank')
                setUrl(r.url)
            })
            .catch(error => {
                console.log(error)
            });
    }


    const getOrderPdf = (id) => {
        let token = localStorage.getItem('token')
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://basrabackend.justcode.am/api/get_order_pdf?order_id=${id}`, requestOptions)
            .then(response => response.json())
            .then(r => {
                window.open(r.url, '_blank')
            })
            .catch(error => {
                console.log(error)
            });
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    useEffect(() => {
        dispatch(GetOrderAction({ search: search }, currentPage))
    }, [currentPage, search])

    const { getMyOrder } = useSelector((st) => st)

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
        // {
        //     id: 3,
        //     title: 'البحث عن طريق الرقم',
        //     selected: false,
        // }
    ])
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        if (getMyOrder.data?.data?.length) {
            setTableData(getMyOrder.data.data)
            setPageCount(Math.ceil(getMyOrder.data.total / 10))
        }
    }, [getMyOrder.data])


    function handleSecondaryTabClick(tab, i) {
        const tabsCopy = [...tabs]
        tabsCopy.forEach(element => {
            if (element?.id === tab?.id) {
                element.selected = true
            } else {
                element.selected = false
            }
        })
        setTabs(tabsCopy)


        if (i == 0) {
            handleNewCategory()
        }

    }

    function handlePageChange(page) {
        setCurrentPage(page)
    }

    if (getMyOrder.loading) {
        // return <Loading />
    }

    return (
        <div className='orders'>
            <section className='secondaryTabs'>
                <div className='secondaryTabButtons'>
                    {tabs?.map((e, i) => (
                        <div

                            className={e?.selected ? 'eachSelectedSecondaryTab' : 'eachSecondaryTab'} key={i} onClick={() => handleSecondaryTabClick(e, i)}>
                            <span>{e?.title}</span>
                        </div>
                    ))}
                    <input className='searchORder' placeholder={'البحث عن طريق الرقم'} value={search} onChange={(e) => { setSearch(e.target.value) }}></input>
                </div>
                <h1>لائحة الطلبات</h1>
            </section>
            {
                getMyOrder.loading ?
                    <Loading /> :

                    <table className='ordersTable'>
                        <tbody>
                            {tableData?.length > 0
                                ? tableData?.map((e, i) => {
                                    let data = new Date(e?.created_at)
                                    return <tr className='eachTR eachTRHover' key={i} onClick={() => window.location = `/order/${e?.id}`}>
                                        <td
                                            onClick={(el) => {
                                                console.log(e)
                                                el.preventDefault()
                                                el.stopPropagation()
                                                getOrderPdf(e.id)
                                            }}
                                        ><PDF /></td>
                                        <td className='ordersTD'>
                                            <div className='eachData'>
                                                <span className='eachDataTitle'>طريقة الدفع او السداد</span>
                                                <p className='eachDataValue'>{e?.payment_type?.name}</p>
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
                                                <p className='eachDataValue'>{e?.status}</p>
                                            </div>
                                        </td>
                                        <td className='ordersTD'>
                                            <div className='eachData'>
                                                <span className='eachDataTitle'>تاريخ الطلب</span>
                                                {

                                                }
                                                <p className='eachDataValue'>{data.getFullYear()} - {data.getMonth()} - {data.getDate()}  </p>
                                            </div>
                                        </td>
                                        <td className='ordersTD'>
                                            <div className='eachData'>
                                                <span className='eachDataTitle'>سعر الطلب</span>
                                                <p className='eachDataValue'>{e?.order_sum}</p>
                                            </div>
                                        </td>
                                        <td className='ordersTD'>
                                            <div className='eachData'>
                                                <span className='eachDataTitle'>رقم الأمر</span>
                                                <p className='eachDataValue'>{e?.id}</p>
                                            </div>
                                        </td>
                                    </tr>
                                })
                                : <span>No table data</span>
                            }
                        </tbody>
                    </table>
            }

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