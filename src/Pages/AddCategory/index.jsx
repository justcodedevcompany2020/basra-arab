import './style.css'
import { useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { CloseIcon } from '../../Components/Svg'

export const AddCategory = ({ open, setOpen }) => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'category 1',
            image: 'img.png',
        },
        {
            id: 2,
            name: 'category 2',
            image: 'img.png',
        },
    ])

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


    function handleFileChange(event) {
        let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
        setCategories(prev => [...prev, { name: '', image: ImagesArray[0] }])
        // setPhotos([...photos, ...ImagesArray])
        // const filesArray = Object.values(event.target.files)
        // setFiles([...files, ...filesArray])
    }

    function deleteFile(event) {
        // setPhotos(photos.filter((item, index) => index !== event))
        // setFiles(files.filter((item, index) => index !== event))
    }

    function handleCategoryChange(category, event) {
        const newCategories = [...categories]
        const change = newCategories.find(e => e.id === category.id)
        change.name = event
        setCategories(newCategories)
    }

    return (
        <div className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='pop secondaryPop'>
                <div className='popTitle'>
                    <h1>Категории</h1>
                </div>
                <div className='popupContent'>
                    {categories?.length > 0 && categories?.map((e, i) => (
                        <div className='eachPopupDetail' key={i}>
                            <TextField label="Название" variant="filled" value={e?.name} onChange={(event) => handleCategoryChange(e, event.target.value)} />
                            <div className='eachCategoryPhoto'>
                                <img alt='' src={e.image.startsWith('blob:') ? e.image : require(`../../assets/images/${e?.image}`)} />
                                <div className='deletePhoto'>
                                    <CloseIcon />
                                </div>
                            </div>
                            <div className='eachPopupDetailButtons'>
                                <Button variant="contained" color='grey' sx={{ width: '48%' }}>Сохранить</Button>
                                <Button variant="contained" color='error' sx={{ width: '48%' }}>Удалить</Button>
                            </div>
                        </div>
                    ))}

                    <div className='eachPopupDetail'>
                        <TextField label="Название" variant="filled" value={''} />
                        <div className='eachCategoryPhoto'>
                            <Button component="label" variant="contained" className='createButon'>
                                Изображение
                                <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                            </Button>
                            <div className='deletePhoto'>
                                <CloseIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}