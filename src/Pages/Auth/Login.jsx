import { useEffect, useState } from 'react'
import './style.css'
import { Button, TextField } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../../Services/action/action'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
    const { Auth_reducer } = useSelector((st) => st)
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState([
        { value: '', error: '' },
        { value: '', error: '' }
    ])
    const handelChange = (e, i) => {
        let item = [...data]
        item[i].value = e
        setData(item)
    }

    useEffect(() => {
        if (Auth_reducer.status) {
            localStorage.setItem('token', Auth_reducer.token)
            navigation('/profile')
        }
    }, [Auth_reducer])

    const handelClick = () => {
        let item = [...data]
        let send = true
        if (!item[0].value) {
            item[0].error = 'false'
        }
        else {
            item[0].error = ''

        }
        if (!item[1].value) {
            item[1].error = 'false'
        }
        else {
            item[1].error = ''
        }
        item.map((elm, i) => {
            if (elm.error) {
                send = false
            }
        })
        if (send) {
            dispatch(LoginAction({ email: data[0].value, password: data[1].value }))
        }

        setData(item)
    }

    return <div className="loginWrapper">
        <TextField value={data[0].value} onChange={(e) => handelChange(e.target.value, 0)} label="Название" variant="filled" sx={{ width: '31%' }} />
        <TextField value={data[1].value} onChange={(e) => handelChange(e.target.value, 1)} label="Название" variant="filled" sx={{ width: '31%' }} />
        <Button onClick={() => handelClick()} sx={{ width: '31%' }} variant="contained" color='grey' >Категории</Button>
    </div>
}