import { useState } from 'react'
import { BackArrow } from '../../Components/Svg'
import './style.css'

export const SingleCustomer = () => {
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

    return (
        <div className='singleOrder'>
            <section className='singleOrderTop'>
                <div />
                <h1>Anton, 8 965 205 23 55, hello@mail.ru</h1>
                <div className='goBack' onClick={() => window.history.back()}>
                    خلف
                    <BackArrow />
                </div>
            </section>

            <table className='ordersTable'>
                <tbody>
                    <tr className='eachTR'>
                        <td></td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>طريقة الدفع او السداد</span>
                                <p className='eachDataValue'>نقدي</p>
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
                                <p className='eachDataValue'>مدفوع</p>
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
                                <p className='eachDataValue'>999</p>
                            </div>
                        </td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>رقم الأمر</span>
                                <p className='eachDataValue'>SITE-523964</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {orders?.length > 0
                ? <div className='ordersBorder'>
                    {orders?.map((e, i) => (
                        <div className='eachOrderProduct' key={i}>
                            <div className='orderPrice'>
                                <p>{e?.price} د.ع</p>
                                <div className='orderDiscount'>
                                    <span>خصم {e?.discount} د.ع</span>
                                    <p>{e?.originalPrice} د.ع</p>
                                </div>
                            </div>
                            <p>{e?.count} قطعة</p>
                            <div className='orderDetails'>
                                <div className='orderDetailsText'>
                                    <span>{e?.manufacturer}</span>
                                    <p>{e?.title}</p>
                                    <span>{e?.description}</span>
                                    <span>الحجم: {e?.volume} مل</span>
                                </div>
                                <img alt='' src={require(`../../assets/images/${e?.image}`)} />
                            </div>
                        </div>
                    ))}
                </div>
                : <span>No product</span>
            }

            <table className='ordersTable'>
                <tbody>
                    <tr className='eachTR'>
                        <td></td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>طريقة الدفع او السداد</span>
                                <p className='eachDataValue'>نقدي</p>
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
                                <p className='eachDataValue'>مدفوع</p>
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
                                <p className='eachDataValue'>999</p>
                            </div>
                        </td>
                        <td className='ordersTD'>
                            <div className='eachData'>
                                <span className='eachDataTitle'>رقم الأمر</span>
                                <p className='eachDataValue'>SITE-523964</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {orders?.length > 0
                ? <div className='ordersBorder'>
                    {orders?.map((e, i) => (
                        <div className='eachOrderProduct' key={i}>
                            <div className='orderPrice'>
                                <p>{e?.price} د.ع</p>
                                <div className='orderDiscount'>
                                    <span>خصم {e?.discount} د.ع</span>
                                    <p>{e?.originalPrice} د.ع</p>
                                </div>
                            </div>
                            <p>{e?.count} قطعة</p>
                            <div className='orderDetails'>
                                <div className='orderDetailsText'>
                                    <span>{e?.manufacturer}</span>
                                    <p>{e?.title}</p>
                                    <span>{e?.description}</span>
                                    <span>الحجم: {e?.volume} مل</span>
                                </div>
                                <img alt='' src={require(`../../assets/images/${e?.image}`)} />
                            </div>
                        </div>
                    ))}
                </div>
                : <span>No product</span>
            }

        </div>
    )
}