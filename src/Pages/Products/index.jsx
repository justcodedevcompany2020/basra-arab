import './style.css'
import { useState } from 'react'
import { AddProduct } from '../AddProduct'
import { DropdownDown } from '../../Components/Svg'
import { Button } from '@mui/material'
import { AddCategory } from '../AddCategory'
import { EditProduct } from '../EditProduct'

export const Products = () => {
    const [tableData, setTableData] = useState([
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
        {
            amount: '12',
            discount: '999',
            originalPrice: '1200',
            brand: 'LOREAL',
            name: 'Pressed Night Moisturizer with Retinol + Niacinamide',
            image: 'image_white.png',
        },
    ])
    const [pageCount, setPageCount] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const [addProduct, setAddProduct] = useState(false)
    const [editProduct, setEditProduct] = useState(false)

    function handlePageChange(page) {
        setCurrentPage(page)
    }

    return (
        <div className='products'>
            {addProduct &&
                <AddProduct
                    open={addProduct}
                    setOpen={setAddProduct}
                />
            }
            {editProduct &&
                <EditProduct
                    open={editProduct}
                    setOpen={setEditProduct}
                />
            }
            <section className='productsTop'>
                <div className='productsTopLeft'>
                    <button onClick={() => setAddProduct(true)}>اضافة عنصر</button>
                    <input placeholder='بحث منتوج' />
                </div>
                <div className='productsTopRight'>
                    <div className='filterproduct'>
                        <DropdownDown />
                        ماركة
                    </div>
                    <div className='filterproduct'>
                        <DropdownDown />
                        فئة
                    </div>
                    <h1>المنتجات: 56</h1>
                </div>
            </section>

            <table className='ordersTable'>
                <tbody>
                    {tableData?.length > 0
                        ? tableData?.map((e, i) => (
                            <tr className='eachTR' key={i}>
                                {(!addProduct && !editProduct) && <div style={{ display: 'flex', height: 30, gap: 10 }}>
                                    <Button onClick={() => setEditProduct(true)} variant='contained' className='createButon'>يحرر</Button>
                                    <Button variant="contained" color='error'>يمسح</Button>
                                </div>}
                                <td className='ordersTD' style={{ width: '5%' }}>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>كمية</span>
                                        <p className='eachDataValue'>{e?.amount}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>سعر الخصم</span>
                                        <p className='eachDataValue'>{e?.discount}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>السعر بدون خصم</span>
                                        <p className='eachDataValue'>{e?.originalPrice}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>ماركة</span>
                                        <p className='eachDataValue'>{e?.brand}</p>
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
                                <td className='ordersTD'><img alt='' src={require(`../../assets/images/${e?.image}`)} /></td>
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