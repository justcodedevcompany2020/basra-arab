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
    const [error, setError] = useState('')
    const handelChange = (e, i) => {
        let item = [...data]
        item[i].value = e
        setData(item)
    }

    useEffect(() => {
        if (Auth_reducer.status) {
            localStorage.setItem('token', Auth_reducer.token)
            window.location = '/profile'

        }
        else if (Auth_reducer.error) {
            setError('login or password is invalid')
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
        <TextField error={data[0].error} value={data[0].value} onChange={(e) => handelChange(e.target.value, 0)} label="تسجيل الدخول" variant="filled" sx={{ width: '31%' }} />
        <TextField error={data[0].error} value={data[1].value} onChange={(e) => handelChange(e.target.value, 1)} label="كلمة المرور" variant="filled" sx={{ width: '31%' }} />
        <p className='errorLogin'>{error}</p>
        <Button onClick={() => handelClick()} sx={{ width: '31%' }} variant="contained" color='grey' >تسجيل الدخول</Button>
    </div>
}