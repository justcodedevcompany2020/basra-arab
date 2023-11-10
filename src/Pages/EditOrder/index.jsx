import { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useDispatch, useSelector, } from 'react-redux'
import { ClearEditOrder, EditStoryOrder, } from '../../Services/action/action'
import { Loading } from '../../Components/Loading'

export const EditOrder = ({ open, setOpen, id }) => {
    const dispatch = useDispatch()
    const { editStoryOrder } = useSelector(st => st)
    const orderItem = Array.from({ length: 50 }, (_, index) => index + 1);

    const [order, setOrder] = useState('')

    function handleNewCategory() {
        dispatch(EditStoryOrder({ story_id: id, order: order }))
    }

    function close() {
        setOpen(false)
        setOrder(0)
    }

    useEffect(() => {
        if (editStoryOrder.status) {
            // close(false)
            dispatch(ClearEditOrder())
        }
    }, [editStoryOrder])
    return (
        <div className={open ? 'activePopup activeSecondaryPopup' : 'inactive'}>
            <div className='TeamPop secondaryPop'>
                <div className='popTitle'>
                    <h1>تحرير الطلب</h1>
                </div>
                {!editStoryOrder?.loading ? <div className='popupContent'>
                    <div className='eachPopupDetailTeam'>
                        <FormControl variant="filled" >
                            <InputLabel>طلب</InputLabel>
                            <Select label="ماركة" value={order} onChange={(e) => setOrder(e.target.value)}  >
                                {orderItem.map((elm, i) => {
                                    return <MenuItem key={i} value={elm}>{elm}</MenuItem>
                                })
                                }
                            </Select>
                        </FormControl>
                        {order && <Button component="label" variant="contained" className='createButon' onClick={handleNewCategory}>يضيف</Button>}
                    </div>
                </div> :
                    <Loading />
                }
                <div className='closePop'>
                    <Button component="label" variant="contained" color='grey' onClick={close}>يغلق</Button>
                </div>
            </div>
        </div >
    )
}