import './style.css'
import { useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

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
    const [newCategory, setNewCategory] = useState({
        id: 3,
        name: '',
        image: '',
    })

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

    function handleCategoryChange(category, event) {
        const newCategories = [...categories]
        const change = newCategories.find(e => e.id === category.id)
        change.name = event
        setCategories(newCategories)
    }

    function handleNewImage(event) {
        let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
        setNewCategory({ ...newCategory, image: ImagesArray[0] })
    }

    function handleNewCategory() {
        if (newCategory?.image?.length && newCategory?.name?.length) {
            setCategories(prev => [...prev, { id: newCategory?.id, name: newCategory?.name, image: newCategory?.image }])
            setNewCategory({
                id: newCategory?.id + 1,
                name: '',
                image: '',
            })
        }
    }

    function close() {
        setOpen(false)
        setNewCategory({
            id: newCategory?.id + 1,
            name: '',
            image: '',
        })
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
                            <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                <b>Изображение</b>Нажмите, чтобы загрузить
                                <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                            </Button>
                            <div className='eachCategoryCard'>

                                <div className='eachCategoryPhoto'>
                                    <img alt='' src={e.image.startsWith('blob:') ? e.image : require(`../../assets/images/${e?.image}`)} />
                                </div>
                            </div>
                            <div className='eachPopupDetailButtons'>
                                <Button variant="contained" color='grey'>Сохранить</Button>
                                <Button variant="contained" color='error'>Удалить</Button>
                            </div>
                            <div className='borderBtm' />
                        </div>
                    ))}

                    <div className='eachPopupDetail'>
                        <TextField label="Название" variant="filled" value={newCategory?.name} onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />
                        {newCategory?.image
                            ? <>
                                <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                    <b>Изображение</b>Нажмите, чтобы загрузить
                                    <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                                </Button>
                                <div className='eachCategoryPhoto'>
                                    <img alt='' src={newCategory.image} />
                                </div>
                            </>
                            : <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                <b>Изображение</b>Нажмите, чтобы загрузить
                                <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                            </Button>
                        }
                        {newCategory?.image?.length > 0 && newCategory?.name?.length > 0 && <Button component="label" variant="contained" className='createButon' onClick={handleNewCategory}>Добавить</Button>}
                    </div>
                </div>
                <div className='closePop'>
                    <Button component="label" variant="contained" color='grey' onClick={close}>Закрыть</Button>
                </div>
            </div>
        </div>
    )
}