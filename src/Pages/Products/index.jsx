import './style.css'
import { useState } from 'react'
import { AddProduct } from '../AddProduct'
import { DropdownDown } from '../../Components/Svg'
import { Button, Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditProduct } from '../EditProduct'
import { useEffect } from 'react'
import { DelectPorducetsAction, GetAllProducts } from '../../Services/action/action'
import { Loading } from '../../Components/Loading'


export const Products = () => {

    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [addProduct, setAddProduct] = useState(false)
    const [editProduct, setEditProduct] = useState(false)
    const { getProducts } = useSelector(st => st)
    const [editId, setEditId] = useState(null)


    const dispatch = useDispatch()

    useEffect(() => {
        if (!addProduct) {
            dispatch(GetAllProducts({ page: currentPage }))
        }
    }, [currentPage, addProduct])

    useEffect(() => {
        setTableData(getProducts?.data?.data)
    }, [getProducts])


    const DeletProducts = (id) => {
        let page = currentPage
        if (getProducts?.data?.data?.length === 1) {
            setCurrentPage(currentPage - 1)
            page = page - 1
        }
        dispatch(DelectPorducetsAction({ product_id: id }, page))
    }


    if (getProducts?.loading) {
        return <div style={{ width: '100%', height: '100%' }}>
            <Loading />
        </div>
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
                    id={editId}
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
                    <h1 >{getProducts.data.total} المنتجات:
                    </h1>
                </div>
            </section>

            <table className='ordersTable'>
                <tbody>
                    {tableData?.length > 0
                        ? tableData?.map((e, i) => (
                            <tr className='eachTR' key={i}>
                                {(!addProduct && !editProduct) && <div style={{ display: 'flex', height: 30, gap: 10 }}>
                                    <Button onClick={() => {
                                        setEditProduct(true)
                                        setEditId(e.id)
                                    }} variant='contained' className='createButon'>يحرر</Button>
                                    <Button onClick={() => DeletProducts(e.id)} variant="contained" color='error'>يمسح</Button>
                                </div>}
                                <td className='ordersTD' style={{ width: '5%' }}>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>كمية</span>
                                        <p className='eachDataValue'>{e?.product_count}</p>
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
                                        <p className='eachDataValue'>{e?.price}</p>
                                    </div>
                                </td>
                                <td className='ordersTD'>
                                    <div className='eachData'>
                                        <span className='eachDataTitle'>ماركة</span>
                                        <p className='eachDataValue'>{e?.brand.name}</p>
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
                                {e?.photos?.length && <td className='ordersTD'><img alt='' src={`https://basrabackend.justcode.am/uploads/${e?.photos[0]?.photo}`} /></td>}
                            </tr>
                        ))
                        : <span>No table data</span>
                    }
                </tbody>
            </table>

            <section className='pagination'>
                <Pagination
                    color="secondary"
                    defaultPage={currentPage}
                    onChange={(e, value) => setCurrentPage(value)}
                    count={Math.ceil(getProducts.data.total / 10)}
                />
            </section>
        </div>
    )

}