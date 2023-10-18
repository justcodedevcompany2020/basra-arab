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
import { GetBrandAction, GetCategory, GetCollectionAction, GetForAge, GetGendersAction, GetPlatforms } from '../../Services/action/action'
import { AddCollections } from '../AddCollections'
import { AddSubCategory } from '../AddSubCategory'

export const AddProduct = ({ open, setOpen }) => {
    const [details, setDetails] = useState({
        name: '',
        price: '',
        discount: 0,
        count: '',
        volume: '',
        code: 0,
        skinType: '',
        gender: '',
        forWho: 'adults',
        platform: 'website',
        description: '',
        characteristics: '',
        composition: '',
        category: '',
        subcategory: '',
        brand: '',
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
    const { getCategory } = useSelector((st) => st)
    const { getBrand } = useSelector((st) => st)
    const { getCollections } = useSelector((st) => st)
    const { getGender } = useSelector((st) => st)
    const { getForAge } = useSelector((st) => st)
    const { getPlatfors } = useSelector((st) => st)
    console.log(getPlatfors, 'getPlatfors')
    const SelectCategoy = (e) => {
        setDetails({ ...details, category: e.target.value })
    }

    useEffect(() => {
        dispatch(GetCategory(categoryPage))
    }, [categoryPage])



    useEffect(() => {
        dispatch(GetBrandAction(brendsPage))
    }, [brendsPage])

    useEffect(() => {
        dispatch(GetCollectionAction(collectionsPage))
    }, [collectionsPage])


    useEffect(() => {
        dispatch(GetGendersAction())
        dispatch(GetForAge())
        dispatch(GetPlatforms())
        document.querySelector('.outlet').style.position = 'fixed'
    }, [])

    const handleSelectionChange = (event) => {
        const {
            target: { value },
        } = event
        setSelectedSelection(
            typeof value === 'string' ? value.split(',') : value,
        )
    }

    function handleFileChange(event) {
        const uniqueFile = files?.find(e => e.name === event.target.files[0]?.name)
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

    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            {openCreateCategory &&
                <AddCategory
                    open={openCreateCategory}
                    setOpen={setOpenCategory}
                    setBrendsPage={(e) => setCategpryPage(e)}

                />
            }
            {openCreateBrend &&
                <AddBrends
                    open={openCreateBrend}
                    setOpen={setOpenBrend}
                    setBrendsPage={(e) => setBrendsPage(e)}
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
                    selected={details?.category}
                    setBrendsPage={(e) => setCollectionsPage(e)}
                />
            }
            <div className='pop'>
                <div className='popupHeader'>
                    <div className='closeIcon' onClick={close}>
                        <CloseIcon />
                    </div>
                    <h1>Добавить / редактировать товар</h1>
                </div>
                <div className='popupBody'>
                    <TextField label="Название" variant="filled" sx={{ width: '31%' }} value={details?.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />
                    <TextField label="Цена" variant="filled" sx={{ width: '31%' }} value={details?.price} onChange={(e) => setDetails({ ...details, price: e.target.value })} />
                    <TextField label="Скидка в процентах" variant="filled" sx={{ width: '31%' }} value={details?.discount} onChange={(e) => setDetails({ ...details, discount: e.target.value })} />

                    <TextField label="В наличии (количество)" variant="filled" sx={{ width: '31%' }} value={details?.count} onChange={(e) => setDetails({ ...details, count: e.target.value })} />
                    <TextField label="Объем" variant="filled" sx={{ width: '31%' }} value={details?.volume} onChange={(e) => setDetails({ ...details, volume: e.target.value })} />
                    <TextField label="Артикул" variant="filled" sx={{ width: '31%' }} value={details?.code} onChange={(e) => setDetails({ ...details, code: e.target.value })} />

                    <TextField label="Тип кожи" variant="filled" sx={{ width: '31%' }} value={details?.skinType} onChange={(e) => setDetails({ ...details, skinType: e.target.value })} />
                    <FormControl variant="filled" sx={{ width: '31%' }}>
                        <InputLabel>Пол</InputLabel>
                        <Select label="Пол" value={details?.gender} onChange={(e) => setDetails({ ...details, gender: e.target.value })}  >
                            {getGender?.data?.data?.map((elm, i) => {
                                return <MenuItem key={i} value={elm.id}>{elm.name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" sx={{ width: '31%' }}>
                        <InputLabel>Для кого</InputLabel>
                        <Select label="Для кого" value={details?.forWho} onChange={(e) => setDetails({ ...details, forWho: e.target.value })}   >
                            {getForAge?.data?.data?.map((elm, i) => {
                                return <MenuItem value={elm.id}>{elm.name}</MenuItem>
                            })

                            }
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" sx={{ width: '31%' }}>
                        <InputLabel>Платформа</InputLabel>
                        <Select label="Платформа" value={details?.platform} onChange={(e) => setDetails({ ...details, platform: e.target.value })}>
                            {getPlatfors?.data?.data?.map((elm, i) => {
                                return <MenuItem value={elm.id}>{elm.name}</MenuItem>

                            })}
                        </Select>
                    </FormControl>
                    <div style={{ width: '62%' }} />

                    <TextField label="Описание" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.description} onChange={(e) => setDetails({ ...details, description: e.target.value })} />
                    <TextField label="Характеристики" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.characteristics} onChange={(e) => setDetails({ ...details, characteristics: e.target.value })} />
                    <TextField label="Состав" multiline rows={5} variant="filled" sx={{ width: '31%' }} value={details?.composition} onChange={(e) => setDetails({ ...details, composition: e.target.value })} />

                    <div className='catsAndSubcats'>
                        <FormControl variant="filled" sx={{ width: '71%' }}>
                            <InputLabel>Категория</InputLabel>
                            <Select label="Категория" value={details.category} onChange={(e) => SelectCategoy(e)}  >
                                {getCategory?.data?.data?.map((elm, i) => {
                                    return <MenuItem key={i} value={elm}>{elm.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <Button variant="contained" color='grey' onClick={() => setOpenCategory(true)}>Категории</Button>
                    </div>
                    {details.category && <div className='catsAndSubcats'>
                        <FormControl variant="filled" sx={{ width: '71%' }}  >
                            <InputLabel>Подкатегория</InputLabel>
                            <Select label="Подкатегория" value={details?.subcategory} onChange={(e) => setDetails({ ...details, subcategory: e.target.value })}   >
                                {details?.category?.category?.map((elm, i) => {
                                    return <MenuItem key={i} value={elm.id}>{elm.name}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <Button onClick={() => setOpenSubCategory(true)} variant="contained" color='grey'>Подкатегории</Button>
                    </div>}
                    <div className='catsAndSubcats'>
                        <FormControl variant="filled" sx={{ width: '81%' }} >
                            <InputLabel>Бренд</InputLabel>
                            <Select label="Бренд" value={details?.brand} onChange={(e) => setDetails({ ...details, brand: e.target.value })}  >
                                {getBrand?.data?.data?.data.map((elm, i) => {
                                    return <MenuItem key={i} value={elm}>{elm?.name}</MenuItem>
                                })
                                }
                            </Select>
                        </FormControl>
                        <Button onClick={() => setOpenBrend(true)} variant="contained" color='grey'>Бренд</Button>
                    </div>

                    <div className='catsAndSubcats'>
                        <FormControl variant="filled" sx={{ width: '81%' }}>
                            <InputLabel>Подборки</InputLabel>
                            <Select
                                multiple
                                value={selectedSelection}
                                onChange={handleSelectionChange}
                                input={<OutlinedInput label="Подборки" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            // ITEM_HEIGHT = 48
                                            // ITEM_PADDING_TOP = 8
                                            maxHeight: 48 * 4.5 + 8,
                                            width: 250,
                                        },
                                    }
                                }
                                }
                            >
                                {getCollections.data.data?.map((name) => (
                                    <MenuItem key={name} value={name.name}>
                                        <Checkbox checked={selectedSelection.indexOf(name.name) > -1} />
                                        <ListItemText primary={name.name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button onClick={() => setOpenCollection(true)} variant="contained" color='grey'>Подборки</Button>
                    </div>
                    <div style={{ width: '62%' }} />

                    {photos.length > 0 && photos.map((e, i) => (
                        <div className='eachProductPhoto' key={i}>
                            <img alt='' src={e} />
                            <div className='deletePhoto' onClick={() => deleteFile(i)}>
                                <CloseIcon />
                            </div>
                        </div>
                    ))}
                    <Button component="label" variant="contained" className='createButon'>
                        Изображение
                        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                    </Button>
                    {/* <div style={{ width: '80%' }} /> */}

                    <Button variant='contained' className='createButon'>Создать</Button>
                </div>
            </div>
        </div>
    )
}