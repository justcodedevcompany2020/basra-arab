import './style.css'
import { Link } from 'react-router-dom'
import { AppStore, BasraFooter, Email, GooglePlay, Phone } from '../Svg'

export const Footer = () => {
    return (
        <div className='footerBg'>
            <div className='footer'>
                <section className='footerSection'>
                    <div className='cursor'><AppStore /></div>
                    <div className='cursor'><GooglePlay /></div>
                    <div /><div /><div /><div />
                    <Link to={''}>سياسة الخصوصية</Link>
                    <span>© 2023 Basra Amazon. كل الحقوق محفوظة</span>
                </section>

                <section className='footerSection text-align-right'>
                    <div className='footerPhone'>
                        <div><Phone /></div>
                        <span>اتصل من 10:00 إلى 22:00</span>
                    </div>
                    <div className='footerPhoneNumbers'>
                        <a href="tel:07807460690">07807460690</a>
                        <a href="tel:07703152690">07703152690</a>
                        <a href="tel:07715046655">07715046655</a>
                    </div>
                    <div />
                    <Link to={''}>الشحن والدفع</Link>
                    <Link to={''}>تطبيق جوال</Link>
                    <Link to={''}>جهات الاتصال</Link>
                </section>

                <section className='footerSection text-align-right'>
                    <div className='footerPhone text-align-right'>
                        <div><Email /></div>
                        <span>اكتب لنا:</span>
                    </div>
                    <div className='footerPhoneNumbers'>
                        <a href='mailto:basraamazon@gmail.com'>basraamazon@gmail.com</a>
                    </div>
                    <div /><div /><div /><div />
                    <Link to={''}>فهرس</Link>
                    <Link to={''}>مخزون</Link>
                    <Link to={''}>العلامات التجارية</Link>
                    <Link to={''}>جديد</Link>
                </section>

                <section className='footerSection text-align-right'>
                    <BasraFooter />
                    <div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
                    <Link to={''}>عنوان المتجر</Link>
                    <p>بصرة امزون</p>
                </section>
            </div>
        </div>
    )
}