import { useEffect, useState } from 'react'
import { PDF } from '../../Components/Svg'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllUser } from '../../Services/action/action'
import { Loading } from '../../Components/Loading'

export const Customers = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const { getAllUser } = useSelector((st) => st)
    useEffect(() => {
        dispatch(GetAllUser(currentPage))
    }, [currentPage])

    useEffect(() => {
        setTableData(getAllUser.data.data)
        setPageCount(Math.ceil(getAllUser.data.total / 10))
    }, [getAllUser.data])

    const [tableData, setTableData] = useState([])
    const [pageCount, setPageCount] = useState(4)

    function handlePageChange(page) {
        setCurrentPage(page)
    }
    if (getAllUser.loading) {
        return <Loading />
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
                                        <p className='eachDataValue'>{e?.date_of_birth}</p>
                                    </div>
                                </td>
                                {/* <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>المكافآت</span>
                                        <p className='eachDataValue'>{e?.bonuses}</p>
                                    </div>
                                </td> */}
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