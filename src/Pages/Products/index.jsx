import './style.css'
import { useState } from 'react'
import { AddProduct } from '../AddProduct'
import { DropdownDown } from '../../Components/Svg'
import { Button, MenuItem, Pagination, Select } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditProduct } from '../EditProduct'
import { useEffect } from 'react'
import { DelectPorducetsAction, GetAllProducts, GetBrandAction, GetCategory } from '../../Services/action/action'
import { Loading } from '../../Components/Loading'


export const Products = () => {
    const { getCategory } = useSelector((st) => st)
    const { getBrand } = useSelector((st) => st)
    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [addProduct, setAddProduct] = useState(false)
    const [editProduct, setEditProduct] = useState(false)
    const { getProducts } = useSelector(st => st)
    const [editId, setEditId] = useState(null)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [openCategory, setOpenCAtegory] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedSubCategory, setSelecetdSubCategory] = useState()
    const [openSubCategory, setOpenSubCategory] = useState(false)
    // console.log(getBrand?.data.data.data, '333')

    useEffect(() => {
        if (!addProduct) {
            console.log(selectedSubCategory, selectedSubCategory)
            dispatch(GetAllProducts({ page: currentPage, isfiltre: false, search: search, parent_category_id: selectedCategory?.id, brand_id: selectedSubCategory?.id }))
        }
    }, [currentPage, addProduct, search, selectedCategory, selectedSubCategory])

    useEffect(() => {
        setTableData(getProducts?.data?.data)
    }, [getProducts])

    useEffect(() => {
        dispatch(GetCategory())
        dispatch(GetBrandAction())
    }, [])

    const DeletProducts = (id) => {
        let page = currentPage
        if (getProducts?.data?.data?.length === 1) {
            setCurrentPage(currentPage - 1)
            page = page - 1
        }
        dispatch(DelectPorducetsAction({ product_id: id }, page))
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
                    <input onChange={(e) => setSearch(e.target.value)} placeholder='بحث منتوج' />
                </div>
                <div className='productsTopRight'>
                    <div className='filterproduct'>
                        <div onClick={() => setOpenCAtegory(!openCategory)}>
                            <DropdownDown />
                            {selectedCategory?.name ? selectedCategory?.name :
                                'ماركة'
                            }
                        </div>
                        {openCategory && <div className='filtrCategory'>
                            {getCategory?.data?.data?.map((elm, i) => {
                                return <MenuItem onClick={() => {
                                    setOpenCAtegory(false)
                                    setSelectedCategory(elm)
                                }} key={i} value={elm?.id}>{elm?.name}</MenuItem>
                            })}
                        </div>}

                    </div>
                    <div className='filterproduct'>
                        <div onClick={() => {
                            setOpenSubCategory(!openSubCategory)
                        }}>
                            <DropdownDown />
                            {selectedSubCategory?.name ? selectedSubCategory?.name :
                                'فئة'
                            }
                        </div>
                        {openSubCategory && <div className='filtrCategory'>
                            {
                                getBrand?.data?.data?.data?.map((elm, i) => {
                                    return <MenuItem onClick={() => {
                                        setSelecetdSubCategory(elm)
                                        setOpenSubCategory(false)

                                    }} key={i} value={elm?.id}>{elm?.name}</MenuItem>
                                })
                            }
                        </div>}
                    </div>
                    <h1 >{getProducts.data.total} المنتجات:
                    </h1>
                </div>
            </section>
            {getProducts?.loading ?
                <div style={{ width: '100%', height: '100%' }}>
                    <Loading />
                </div> :
                <div className='tableDiv'>
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
                                        {e?.photos?.length > 0 && <td className='ordersTD'><img alt='' src={`https://basrabackend.justcode.am/uploads/${e?.photos[0]?.photo}`} /></td>}
                                    </tr>
                                ))
                                : <span>No table data</span>
                            }
                        </tbody>
                    </table>





                    {!addProduct && !editProduct && <section className='pagination'>
                        <Pagination
                            color="secondary"
                            defaultPage={currentPage}
                            onChange={(e, value) => setCurrentPage(value)}
                            count={Math.ceil(getProducts.data.total / 10)}
                        />
                    </section>}
                </div>
            }
        </div>
    )

}