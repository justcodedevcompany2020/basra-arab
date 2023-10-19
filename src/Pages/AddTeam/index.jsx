import './style.css'
import { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useDispatch, useSelector, } from 'react-redux'
import { CreateStoryTeamAction } from '../../Services/action/action'
import { Loading } from '../../Components/Loading'

export const AddTeam = ({ open, setOpen }) => {
    const dispatch = useDispatch()
    const { createStoryTeam } = useSelector(st => st)
    const orderItem = Array.from({ length: 51 }, (_, index) => index);
    const [team, setTeam] = useState({ name: '', image: '' })

    const [img, setImg] = useState()
    const [order, setOrder] = useState('')

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


    function handleNewImage(event) {
        setImg(event.target.files[0])
        let ImagesArray = Object.entries(event.target.files).map(e => URL.createObjectURL(e[1]))
        setTeam({ ...team, image: ImagesArray[0] })
    }

    function handleNewCategory() {
        dispatch(CreateStoryTeamAction({ name: team.name, img, order }))
    }

    function close() {
        setOpen(false)
        setTeam({
            id: 1,
            name: '',
            image: '',
        })
    }

    useEffect(() => {
        if (createStoryTeam.status) {
            close(false)
        }
    }, [createStoryTeam])
    return (
        <div className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='TeamPop secondaryPop'>
                <div className='popTitle'>
                    <h1>Team</h1>
                </div>
                {!createStoryTeam?.loading ? <div className='popupContent'>
                    <div className='eachPopupDetailTeam'>
                        <TextField label="Название" variant="filled" value={team?.name} onChange={(e) => setTeam({ ...team, name: e.target.value })} />
                        <FormControl variant="filled" >
                            <InputLabel>Бренд</InputLabel>
                            <Select label="Бренд" value={order} onChange={(e) => setOrder(e.target.value)}  >
                                {orderItem.map((elm, i) => {
                                    return <MenuItem key={i} value={elm}>{elm}</MenuItem>
                                })
                                }
                            </Select>
                        </FormControl>
                        {team?.image
                            ? <>
                                <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                    <b>Изображение</b>Нажмите, чтобы загрузить
                                    <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                                    <div className='eachCategoryPhoto'>
                                        <img alt='' src={team.image} />
                                    </div>
                                </Button>
                            </>
                            : <Button component="label" variant="contained" color='grey' fullWidth sx={{ textAlign: 'center', flexDirection: 'column' }}>
                                <b>Изображение</b>Нажмите, чтобы загрузить
                                <VisuallyHiddenInput type="file" onChange={handleNewImage} />
                            </Button>
                        }
                        {team?.image?.length > 0 && team?.name?.length > 0 && order && <Button component="label" variant="contained" className='createButon' onClick={handleNewCategory}>Добавить</Button>}
                    </div>
                </div> :
                    <Loading />
                }
                <div className='closePop'>
                    <Button component="label" variant="contained" color='grey' onClick={close}>Закрыть</Button>
                </div>
            </div>
        </div >
    )
}