import classNames from 'classnames/bind'
import styles from './MainHeader.module.scss'
import LogoN from '../assets/IconSvg/LogoN'

const cx = classNames.bind(styles)

const LOAN_PATH = '/loan/sme'

const MainHeader = () => {
    return (
        <div className={cx('article')}>
            <h1 className={cx('title')}>
                <a href="#" onClick={(e) => e.preventDefault()} className={cx('link')}>
                    <span className={cx('icon-pay')}>
                        <LogoN width={20} height={20} fill="#212930" />
                        <span className="blind">네이버페이</span>
                    </span>
                    사업자 대출 중개
                </a>
            </h1>
        </div>
    )
}

export default MainHeader
