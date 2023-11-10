import './style.css'
import { BasraHeader, LogOut } from '../Svg'
import { useDispatch } from 'react-redux'
import { LogOutAction } from '../../Services/action/action'

export const Header = () => {
    let token = localStorage.getItem('token')
    const dispatch = useDispatch()
    return (
        <div className='header'>
            {token && <div className='logout' onClick={() => {
                dispatch(LogOutAction())
                localStorage.removeItem('token')
                window.location = '/login'
            }}>
                <LogOut />
            </div>}
            <div className='headerLogo' onClick={() => {
                if (token) {
                    window.location = '/'
                }
            }}>
                <BasraHeader />
            </div>
        </div>
    )
}