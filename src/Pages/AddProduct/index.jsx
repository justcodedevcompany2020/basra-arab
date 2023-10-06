import './style.css'
import { useState } from 'react'
import { TextField } from '@mui/material'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { CloseIcon } from '../../Components/Svg'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

export const AddProduct = ({ open, setOpen }) => {
    const [sex, setSex] = useState('male')
    const [forWho, setForWho] = useState('adults')
    const [platform, setPlatform] = useState('website')

    function close() {
        setOpen(false)
    }

    return (
        <div className={open ? 'activePopup' : 'inactive'}>
            <div className='pop'>
                <div className='popupHeader'>
                    <div className='closeIcon' onClick={close}>
                        <CloseIcon />
                    </div>
                    <h1>Добавить / редактировать товар</h1>
                </div>
                <div className='popupBody'>
                    <TextField id="filled-basic" label="Название" variant="filled" sx={{ width: '31%' }} />
                    <TextField id="filled-basic" label="Цена" variant="filled" sx={{ width: '31%' }} />
                    <TextField id="filled-basic" label="Скидка в процентах" variant="filled" defaultValue={0} sx={{ width: '31%' }} />

                    <TextField id="filled-basic" label="В наличии (количество)" variant="filled" sx={{ width: '31%' }} />
                    <TextField id="filled-basic" label="Объем" variant="filled" sx={{ width: '31%' }} />
                    <TextField id="filled-basic" label="Артикул" variant="filled" defaultValue={0} sx={{ width: '31%' }} />

                    <TextField id="filled-basic" label="Тип кожи" variant="filled" sx={{ width: '31%' }} />
                    <FormControl variant="filled" sx={{ width: '31%' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Пол</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                            label="Пол"
                        >
                            <MenuItem value={'male'}>ذكر</MenuItem>
                            <MenuItem value={'female'}>أنثى</MenuItem>
                            <MenuItem value={'other'}>للجنسين</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" sx={{ width: '31%' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Для кого</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={forWho}
                            onChange={(e) => setForWho(e.target.value)}
                            label="Для кого"
                        >
                            <MenuItem value={'adults'}>الكبار</MenuItem>
                            <MenuItem value={'children'}>الأطفال</MenuItem>
                            <MenuItem value={'everyone'}>الكل</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" sx={{ width: '31%' }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Платформа</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={platform}
                            onChange={(e) => setPlatform(e.target.value)}
                            label="Платформа"
                        >
                            <MenuItem value={'website'}>الموقع الإلكتروني</MenuItem>
                            <MenuItem value={'app'}>التطبيق</MenuItem>
                            <MenuItem value={'everyone'}>الكل</MenuItem>
                        </Select>
                    </FormControl>

                </div>
            </div>
        </div>
    )
}