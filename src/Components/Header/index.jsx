import './style.css'
import { BasraHeader } from '../Svg'

export const Header = () => {
    return (
        <div className='header'>
            <div className='headerLogo' onClick={() => window.location = '/'}>
                <BasraHeader />
            </div>
        </div>
    )
}