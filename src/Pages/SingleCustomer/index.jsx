import { useEffect, useState } from 'react'
import { BackArrow } from '../../Components/Svg'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { GetSinglUser } from '../../Services/action/action'
import { useParams } from 'react-router-dom'
import { Loading } from '../../Components/Loading'

export const SingleCustomer = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    console.log(id, 'iddd')
    useEffect(() => {
        dispatch(GetSinglUser({ user_id: id }))
    }, [])
    const { getSinglUSer } = useSelector((st) => st)
    const [orders, setOrders] = useState(
        [
            {
                image: 'orderImage.png',
                manufacturer: `L'Oreal Paris`,
                title: 'Perfect Skin 20+',
                description: 'كريم النهار لعمر 20+ لتقليل الخطوط الدقيقة وتفتيح لون البشرة',
                volume: '200',
                count: '1',
                discount: '200',
                originalPrice: '1500',
                price: '1300'
            },
            {
                image: 'orderImage.png',
                manufacturer: `L'Oreal Paris`,
                title: 'Perfect Skin 20+',
                description: 'كريم النهار لعمر 20+ لتقليل الخطوط الدقيقة وتفتيح لون البشرة',
                volume: '200',
                count: '1',
                discount: '200',
                originalPrice: '1500',
                price: '1300'
            },
            {
                image: 'orderImage.png',
                manufacturer: `L'Oreal Paris`,
                title: 'Perfect Skin 20+',
                description: 'كريم النهار لعمر 20+ لتقليل الخطوط الدقيقة وتفتيح لون البشرة',
                volume: '200',
                count: '1',
                discount: '200',
                originalPrice: '1500',
                price: '1300'
            },
            {
                image: 'orderImage.png',
                manufacturer: `L'Oreal Paris`,
                title: 'Perfect Skin 20+',
                description: 'كريم النهار لعمر 20+ لتقليل الخطوط الدقيقة وتفتيح لون البشرة',
                volume: '200',
                count: '1',
                discount: '200',
                originalPrice: '1500',
                price: '1300'
            },
        ],
        [
            {
                image: 'orderImage.png',
                manufacturer: `L'Oreal Paris`,
                title: 'Perfect Skin 20+',
                description: 'كريم النهار لعمر 20+ لتقليل الخطوط الدقيقة وتفتيح لون البشرة',
                volume: '200',
                count: '1',
                discount: '200',
                originalPrice: '1500',
                price: '1300'
            },
            {
                image: 'orderImage.png',
                manufacturer: `L'Oreal Paris`,
                title: 'Perfect Skin 20+',
                description: 'كريم النهار لعمر 20+ لتقليل الخطوط الدقيقة وتفتيح لون البشرة',
                volume: '200',
                count: '1',
                discount: '200',
                originalPrice: '1500',
                price: '1300'
            },
        ]
    )




    useEffect(() => {
        if (getSinglUSer.data) {
            setOrders(getSinglUSer.data?.orders?.data)
        }

    }, [getSinglUSer.data])
    if (getSinglUSer.loading) {
        return <Loading />
    }
    return (
        <div className='singleOrder'>
            <section className='singleOrderTop'>
                <div />
                <h1>{getSinglUSer.data?.data?.name} {getSinglUSer.data?.data?.phone}  {getSinglUSer.data?.data?.email}</h1>
                <div className='goBack' onClick={() => window.history.back()}>
                    خلف
                    <BackArrow />
                </div>
            </section>

            {orders?.map((elm, i) => {
                console.log(elm?.product)
                let date = new Date(elm.created_at)
                return <div style={{ width: '100%' }}>
                    <table style={{ width: '100%' }} className='ordersTable'>
                        <tbody>
                            <tr className='eachTR'>
                                <td></td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>طريقة الدفع او السداد</span>
                                        <p className='eachDataValue'>{elm?.payment_type?.name}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>طريقة التوصيل</span>
                                        <p className='eachDataValue'>يلتقط</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>حالة</span>
                                        <p className='eachDataValue'>{elm.status}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>تاريخ الطلب</span>
                                        <p className='eachDataValue'>{date.getDate()}.{date.getMonth()}.{date.getFullYear()}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>سعر الطلب</span>
                                        <p className='eachDataValue'>{elm.order_sum}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>رقم الأمر</span>
                                        <p className='eachDataValue'>{elm.id}</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {elm?.products?.length > 0
                        ? <div className='ordersBorder'>
                            {elm?.products?.map((e, i) => {
                                console.log(e)
                                return <div className='eachOrderProduct' key={i}>
                                    <div className='orderPrice'>
                                        <p>{e?.product_price} د.ع</p>
                                        <div className='orderDiscount'>
                                            <span>خصم {e?.product_discount} د.ع</span>
                                            <p>{e?.product_price_in_order_moment} د.ع</p>
                                        </div>
                                    </div>
                                    <p>{e?.count} قطعة</p>
                                    <div className='orderDetails'>
                                        <div className='orderDetailsText'>
                                            <span>{e?.product.brand.name}</span>
                                            <p>{e?.title}</p>
                                            <span>{e?.product?.description}</span>
                                            <span>الحجم: {e?.product?.skin_type} مل</span>
                                        </div>
                                        <img alt=''
                                            src={`https://basrabackend.justcode.am/uploads/${e?.product?.photos[0]?.photo}`}
                                        />
                                    </div>
                                </div>
                            })}
                        </div>
                        : <span>No product</span>
                    }
                </div>
            })}


        </div>
    )
}