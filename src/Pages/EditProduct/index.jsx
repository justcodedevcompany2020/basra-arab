import './style.css'
import Select from '@mui/material/Select'
import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import { CloseIcon } from '../../Components/Svg'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { Button, Checkbox, ListItemText, OutlinedInput, TextField } from '@mui/material'
import { AddCategory } from '../AddCategory'
import { AddBrends } from '../AddBrends'
import { useDispatch, useSelector } from 'react-redux'
import { GetBrandAction, GetCategory, GetCollectionAction, GetForAge, GetGendersAction, GetPlatforms, GetSinglProductAction, UpdateProduct } from '../../Services/action/action'
import { AddCollections } from '../AddCollections'
import { AddSubCategory } from '../AddSubCategory'
import Swal from 'sweetalert2'
import { Loading } from '../../Components/Loading'

export const EditProduct = ({ open, setOpen, id }) => {
    const [details, setDetails] = useState({
        name: '',
        price: '',
        discount: '',
        count: '',
        volume: '',
        code: '',
        // skinType: '',
        gender: '',
        forWho: '',
        platform: '',
        description: '',
        characteristics: '',
        composition: '',
        category: '',
        subcategory: '',
        brand: '',
    })
    const [error, setError] = useState({
        name: '',
        price: '',
        discount: '',
        count: '',
        volume: '',
        code: '',
        // skinType: '',
        gender: '',
        forWho: '',
        platform: '',
        description: '',
        characteristics: '',
        composition: '',
        category: '',
        subcategory: '',
        brand: '',
        photos: ''
    })
    const [selectedSelection, setSelectedSelection] = useState([])
    const [files, setFiles] = useState([])
    const [photos, setPhotos] = useState([])
    const [openCreateCategory, setOpenCategory] = useState(false)
    const [openCreateBrend, setOpenBrend] = useState(false)
    const dispatch = useDispatch()
    const [brendsPage, setBrendsPage] = useState(1)
    const [collectionsPage, setCollectionsPage] = useState(1)
    const [openCollection, setOpenCollection] = useState(false)
    const [openSubCategory, setOpenSubCategory] = useState(false)
    const [categoryPage, setCategpryPage] = useState(1)
    const [photo, setPhoto] = useState([])
    const { getCategory } = useSelector((st) => st)
    const { getBrand } = useSelector((st) => st)
    const { getCollections } = useSelector((st) => st)
    const { getGender } = useSelector((st) => st)
    const { getForAge } = useSelector((st) => st)
    const { getPlatfors } = useSelector((st) => st)
    const { getSinglProduct } = useSelector((st) => st)
    const [deletedPhotos, setDeletedPhotos] = useState([])
    const { updateProduct } = useSelector((st) => st)
    const [subcategory, setSubCategory] = useState({})
    console.warn = function () { };
    console.error = function () { };

    useEffect(() => {
        let index = getCategory?.data?.data?.findIndex((el) => el.id == details.category)
        if (index > -1) {
            setSubCategory(getCategory?.data?.data[index])
        }
    }, [getCategory])
    console.log(selectedSelection, 'selectedSelection')

    const CreateProduct = () => {
        let item = []
        selectedSelection.map((elm, i) => {
            getCollections?.data?.data.map((e, i) => {
                console.log(e.name, elm)
                if (e.name == elm) {
                    item.push(e.id)
                }
            })
        })
        let send = true
        let temp = { ...error }
        let deletetP = []
        getSinglProduct.data?.podborki.map((elm, i) => {
            deletetP.push(elm.id)
        })


        if (details.name == '') {
            temp.name = 'anuny partadir e '
            send = false
        }
        else {
            temp.name = ''
            send = true
        }
        if (details.price == '') {
            temp.price = 'giny partadir e '
            send = false

        }
        else {
            temp.price = ''
            send = true
        }
        if (details.details === '') {
            temp.details = 'giny partadir e '
            send = false

        }
        else {
            temp.details = ''
            send = true
        }
        if (details.count === '') {
            temp.count = 'giny partadir e '
            send = false

        }
        else {
            temp.count = ''
            send = true
        }
        if (details.volume === '') {
            temp.volume = 'giny partadir e '
            send = false

        }
        else {
            temp.volume = ''
            send = true
        }
        if (details.code === '') {
            temp.code = 'giny partadir e '
            send = false
        }
        else {
            temp.code = ''
            send = true
        }
        // if (details.skinType === '') {
        //     temp.skinType = 'giny partadir e '
        //     send = false
        // }
        // else {
        //     temp.skinType = ''
        //     send = true
        // }
        if (details.subcategory === '') {
            temp.subcategory = 'giny partadir e '
            send = false

        }
        else {
            temp.subcategory = ''
            send = true
        }
        if (details.gender === '') {
            temp.gender = 'giny partadir e '
            send = false
        }
        else {
            temp.gender = ''
            send = true
        }
        if (details.forWho === '') {
            temp.forWho = 'giny partadir e '
            send = false
        }
        else {
            temp.forWho = ''
            send = true
        }
        if (details.platform === '') {
            temp.platform = 'giny partadir e '
            send = false
        }
        else {
            temp.platform = ''
            send = true
        }
        if (details.description === '') {
            temp.description = 'giny partadir e '
            send = false

        }
        else {
            temp.description = ''
            send = true
        }
        if (details.characteristics === '') {
            temp.characteristics = 'giny partadir e '
            send = false
        }
        else {
            temp.characteristics = ''
            send = true
        }
        if (details.composition === '') {
            temp.composition = 'giny partadir e '
            send = false
        }
        else {
            temp.composition = ''
            send = true
        }
        if (details.discount === '') {
            temp.discount = 'giny partadir e '
            send = false
        }
        else {
            temp.discount = ''
            send = true
        }
        if (!details.item?.length) {
            temp.podborki = 'giny partadir e '
            send = false
        }
        else {
            temp.podborki = ''
            send = true
        }
        if (!photo.length && !details.photos.length) {
            temp.photos = 'giny partadir e '
            send = false
        }
        else {
            temp.photos = ''
            send = true
        }

        setError(temp)
        if (send) {
            dispatch(UpdateProduct({
                name: details.name,
                price: details.price,
                discount: details.discount,
                product_count: details.count,
                volume: details.volume,
                vendor_code: details.code,
                // skin_type: details.skinType,
                parent_category_id: details.category,
                category_id: details.subcategory,
                brands_id: details.brand,
                gender_id: details.gender,
                for_age_id: details.forWho,
                platform_id: details.platform,
                description: details.description,
                characteristics: details.characteristics,
                compound: details.composition,
                podborki: item,
                photos: photo,
                deleted_podborki: deletetP,
                deleted_photo: deletedPhotos,
                product_id: id
            }))
        }
    }

    const SelectCategoy = (e) => {
        let index = getCategory?.data?.data.findIndex((el) => el.id == e.target.value)
        setSubCategory(getCategory?.data?.data[index])
        setDetails({ ...details, category: e.target.value })
    }
    useEffect(() => {
        if (details.platform) {
            dispatch(GetCategory(details.platform))
        }
    }, [categoryPage, details.platform])


    useEffect(() => {
        dispatch(GetBrandAction(brendsPage, details.platform))
    }, [brendsPage])

    useEffect(() => {
        dispatch(GetCollectionAction(collectionsPage))
    }, [collectionsPage])


    useEffect(() => {
        dispatch(GetGendersAction())
        dispatch(GetForAge())
        dispatch(GetPlatforms())
        document.querySelector('.outlet').style.position = 'fixed'
        dispatch(GetSinglProductAction({ product_id: id }))
    }, [])

    const handleSelectionChange = (event) => {
        const { target: { value } } = event


        setSelectedSelection(
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    function handleFileChange(event) {
        const uniqueFile = files?.find(e => e.name === event.target.files[0]?.name)
        let item = [...photo]
        item.push(event.target.files[0])
        setPhoto(item)
        if (!uniqueFile) {
            let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
            setPhotos([...photos, ...ImagesArray])
            const filesArray = Object.values(event.target.files)
            setFiles([...files, ...filesArray])
        }
    }

    function deleteFile(event) {
        setPhotos(photos.filter((item, index) => index !== event))
        setFiles(files.filter((item, index) => index !== event))
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })

    function close() {
        document.querySelector('.outlet').style.position = 'relative'
        setOpen(false)
    }
    useEffect(() => {
        if (error.photos != '') {
            Swal.fire(
                'фотография обязательна!',
                '',
                'error'
            )
        }
    }, [error])
    useEffect(() => {
        if (updateProduct.status) {
            window.location = '/products'
        }
        else if (updateProduct.error != '') {
            Swal.fire(
                'Код поставщика уже занят',
                '',
                'error'
            )
        }
    }, [updateProduct])


    const DeletPhoto = (e, i) => {
        let temp = { ...details }
        let item = [...deletedPhotos]
        item.push(e.id)
        temp.photos.splice(i, 1)
        setDetails(temp)
        setDeletedPhotos(item)
    }


    useEffect(() => {
        if (getSinglProduct.data) {
            let data = getSinglProduct.data
            let item = []
            setDetails({
                name: data.name,
                price: data.price,
                discount: data.discount,
                count: data.product_count,
                volume: data.volume,
                code: data.vendor_code,
                // skinType: data.skin_type,
                gender: data.gender_id,
                forWho: data.for_age_id,
                platform: data.platform_id,
                description: data.description,
                characteristics: data.characteristics,
                composition: data.compound,
                category: data.parent_category_id,
                subcategory: data.category_id,
                brand: data.brands_id,
                sub: getCategory?.data?.data?.find((elm) => elm.id == data.parent_category_id),
                photos: data.photos
            })
            data?.podborki?.map((e, i) => {
                item.push(e.name)
            })
            setSelectedSelection(item)
        }
    }, [getSinglProduct])



    return (
        <div className={open ? 'activePopup' : 'inactive'}>

            {openCreateCategory &&
                <AddCategory
                    open={openCreateCategory}
                    setOpen={setOpenCategory}
                    setBrendsPage={(e) => setCategpryPage(e)}
                    platformId={details.platform}
                />
            }
            {openCreateBrend &&
                <AddBrends
                    open={openCreateBrend}
                    setOpen={setOpenBrend}
                    setBrendsPage={(e) => setBrendsPage(e)}
                    platformId={details.platform}
                />
            }
            {openCollection &&
                <AddCollections
                    open={openCollection}
                    setOpen={setOpenCollection}
                    setBrendsPage={(e) => setCollectionsPage(e)}
                />
            }
            {openSubCategory &&
                <AddSubCategory
                    open={openSubCategory}
                    setOpen={setOpenSubCategory}
                    selected={subcategory}
                    setBrendsPage={(e) => setCollectionsPage(e)}
                    platformId={details.platform}
                />
            }
            <div className='pop'>
                <div className='popupHeader'>
                    <div className='closeIcon' onClick={close}>
                        <CloseIcon />
                    </div>
                    <h1>يضيف / تحرير المنتج</h1>
                </div>
                {updateProduct.loading || getSinglProduct.loading ?
                    <Loading /> :
                    <div className='popupBody'>
                        <TextField error={error.name != ''} label="الاسم" variant="filled" sx={{ width: '31%' }} value={details?.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />
                        <TextField error={error.price != ''} label="Цена" type='number' variant="filled" sx={{ width: '31%' }} value={details?.price} onChange={(e) => setDetails({ ...details, price: e.target.value })} />
                        <TextField error={error.discount != ''} label="Скидка в процентах" type='number' variant="filled" sx={{ width: '31%' }} value={details?.discount} onChange={(e) => setDetails({ ...details, discount: e.target.value })} />
                        <TextField error={error.count != ''} type='number' label="في المخزون (الكمية)" variant="filled" sx={{ width: '31%' }} value={details?.count} onChange={(e) => setDetails({ ...details, count: e.target.value })} />
                        <TextField error={error.volume != ''} label="مقدار" variant="filled" sx={{ width: '31%' }} value={details?.volume} onChange={(e) => setDetails({ ...details, volume: e.target.value })} />
                        <TextField error={error.code != ''} label="رمز البائع" variant="filled" sx={{ width: '31%' }} value={details?.code} onChange={(e) => setDetails({ ...details, code: e.target.value })} />
                        {/* <TextField error={error.skinType != ''} label="نوع الجلد" variant="filled" sx={{ width: '31%' }} value={details?.skinType} onChange={(e) => setDetails({ ...details, skinType: e.target.value })} /> */}
                        <FormControl error={error.gender != ''} variant="filled" sx={{ width: '31%' }}>
                            <InputLabel>أرضية</InputLabel>
                            <Select label="أرضية" value={details?.gender} onChange={(e) => setDetails({ ...details, gender: e.target.value })}  >
                                {getGender?.data?.data?.map((elm, i) => {
                                    return <MenuItem key={i} value={elm.id}>{elm.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl error={error.forWho != ''} variant="filled" sx={{ width: '31%' }}>
                            <InputLabel>لمن</InputLabel>
                            <Select label="لمن" value={details?.forWho} onChange={(e) => setDetails({ ...details, forWho: e.target.value })}   >
                                {getForAge?.data?.data?.map((elm, i) => {
                                    return <MenuItem value={elm.id}>{elm.name}</MenuItem>
                                })

                                }
                            </Select>
                        </FormControl>

                        <FormControl error={error.platform != ''} variant="filled" sx={{ width: '31%' }}>
                            <InputLabel>منصة</InputLabel>
                            <Select label="منصة" value={details?.platform} onChange={(e) => setDetails({ ...details, platform: e.target.value })}>
                                {getPlatfors?.data?.data?.map((elm, i) => {
                                    return <MenuItem value={elm.id}>{elm.name}</MenuItem>

                                })}
                            </Select>
                        </FormControl>
                        <div style={{ width: '62%' }} />

                        <TextField error={error.description != ''} label="وصف" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.description} onChange={(e) => setDetails({ ...details, description: e.target.value })} />
                        <TextField error={error.characteristics != ''} label="صفات" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.characteristics} onChange={(e) => setDetails({ ...details, characteristics: e.target.value })} />
                        <TextField error={error.composition != ''} label="مُجَمَّع" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.composition} onChange={(e) => setDetails({ ...details, composition: e.target.value })} />

                        {details.platform && <div className='catsAndSubcats'>
                            <FormControl error={error.category != ''} variant="filled" sx={{ width: '71%' }}>
                                <InputLabel>فئة</InputLabel>
                                <Select label="فئة" value={details.category} onChange={(e) => SelectCategoy(e)}  >
                                    {getCategory?.data?.data?.map((elm, i) => {
                                        return <MenuItem key={i} value={elm.id}>{elm.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <Button variant="contained" color='grey' onClick={() => setOpenCategory(true)}>فئات</Button>
                        </div>}
                        {details.category && <div className='catsAndSubcats'>
                            <FormControl variant="filled" sx={{ width: '71%' }}  >
                                <InputLabel>تصنيف فرعي</InputLabel>
                                <Select error={error.subcategory != ''} label="تصنيف فرعي" value={details?.subcategory} onChange={(e) => setDetails({ ...details, subcategory: e.target.value })}   >
                                    {subcategory?.category?.map((elm, i) => {
                                        return <MenuItem key={i} value={elm.id}>{elm.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <Button onClick={() => setOpenSubCategory(true)} variant="contained" color='grey'>الفئات الفرعية</Button>
                        </div>}
                        {details.platform && <div className='catsAndSubcats'>
                            <FormControl error={error.brand != ''} variant="filled" sx={{ width: '81%' }} >
                                <InputLabel>ماركة</InputLabel>

                                <Select label="ماركة" defaultValue={details?.brand} value={details?.brand} onChange={(e) => setDetails({ ...details, brand: e.target.value })}  >
                                    {getBrand?.data?.data?.data.map((elm, i) => {
                                        return <MenuItem key={i} value={elm.id}>{elm?.name}</MenuItem>
                                    })
                                    }
                                </Select>
                            </FormControl>
                            <Button onClick={() => setOpenBrend(true)} variant="contained" color='grey'>ماركة</Button>
                        </div>}

                        <div className='catsAndSubcats'>
                            <FormControl variant="filled" sx={{ width: '81%' }}>
                                <InputLabel>المجموعات</InputLabel>
                                <Select
                                    multiple
                                    value={selectedSelection}
                                    onChange={handleSelectionChange}
                                    input={<OutlinedInput label="المجموعات" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 48 * 4.5 + 8,
                                                width: 250,
                                            },
                                        }
                                    }
                                    }
                                >
                                    {getCollections.data.data?.map((name) => {
                                        return <MenuItem key={name} value={name.name}>
                                            <Checkbox checked={selectedSelection.indexOf(name?.name) > -1} />
                                            <ListItemText primary={name.name} />
                                        </MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                            <Button onClick={() => setOpenCollection(true)} variant="contained" color='grey'>المجموعات</Button>
                        </div>
                        <div style={{ width: '62%' }} />
                        {details?.photos?.map((e, i) => {
                            return <div className='eachProductPhoto' key={i}>
                                <img alt='' src={`https://basrabackend.justcode.am/uploads/${e.photo}`} />
                                <div className='deletePhoto' onClick={() => DeletPhoto(e, i)}>
                                    <CloseIcon />
                                </div>
                            </div>
                        })
                        }
                        {photos.length > 0 && photos.map((e, i) => (
                            <div className='eachProductPhoto' key={i}>
                                <img alt='' src={e} />
                                <div className='deletePhoto' onClick={() => deleteFile(i)}>
                                    <CloseIcon />
                                </div>
                            </div>
                        ))}

                        <Button component="label" variant="contained" className='createButon'>
                            صورة
                            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                        </Button>
                        <Button onClick={() => CreateProduct()} variant='contained' className='createButon'>يحرر</Button>
                    </div>
                }
            </div>
        </div>
    )
}