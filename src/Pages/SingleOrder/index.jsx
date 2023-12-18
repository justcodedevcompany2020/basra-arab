import './style.css'
import { BackArrow, PDF } from '../../Components/Svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetSinglOrder } from '../../Services/action/action'

export const SingleOrder = () => {
    const [orders, setOrders] = useState([
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
    ])

    const { orderNumber } = useParams()
    const dispatch = useDispatch()
    const { getSinglOrder } = useSelector((st) => st)

    useEffect(() => {
        dispatch(GetSinglOrder({ order_id: orderNumber }))
    }, [])

    useEffect(() => {
        if (getSinglOrder.data) {
            setOrders(getSinglOrder?.data?.products)
        }
    }, [getSinglOrder.data])


    return (
        <div className='singleOrder'>
            <section className='singleOrderTop'>
                <div />
                <h1>{getSinglOrder?.data?.user?.name} {getSinglOrder?.data?.user?.phone} {getSinglOrder?.data?.user?.email}</h1>
                <div className='goBack' onClick={() => window.history.back()}>
                    خلف
                    <BackArrow />
                </div>
            </section>

            <table className='ordersTable'>
                <tbody>
                    <tr className='eachTR'>
                        <td><PDF /></td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>طريقة الدفع او السداد</span>
                                <p className='eachDataValue'>{getSinglOrder.data?.payment_type?.name}</p>
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
                                <p className='eachDataValue'>{getSinglOrder.data?.status}</p>
                            </div>
                        </td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>تاريخ الطلب</span>
                                <p className='eachDataValue'>12.04.2023</p>
                            </div>
                        </td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>سعر الطلب</span>
                                <p className='eachDataValue'>{getSinglOrder.data?.order_sum}</p>
                            </div>
                        </td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>رقم الأمر</span>
                                <p className='eachDataValue'>{getSinglOrder.data.id}</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {orders?.length > 0
                ? <div className='ordersBorder'>
                    {orders?.map((e, i) => {
                        return <div className='eachOrderProduct' key={i}>
                            <div className='orderPrice'>
                                <p>{e?.product?.price} د.ع</p>
                                <div className='orderDiscount'>
                                    <span>خصم {e?.product?.discount} د.ع</span>
                                    <p>{e?.product?.product_price_in_order_moment} د.ع</p>
                                </div>
                            </div>
                            <p>{e?.count} قطعة</p>
                            <div className='orderDetails'>
                                <div className='orderDetailsText'>
                                    <span>{e?.manufacturer}</span>
                                    <p>{e?.product?.name}</p>
                                    <span>{e?.description}</span>
                                    <span>الحجم: {e?.volume} مل</span>
                                </div>
                                {/* <img alt='' src={require(`../../assets/images/${e?.image}`)} /> */}
                                <img alt='' src={`https://basrabackend.justcode.am/uploads/${e?.product?.photos[0]?.photo}`} />
                            </div>
                        </div>
                    })}
                </div>
                : <span>No product</span>
            }
        </div>
    )
}