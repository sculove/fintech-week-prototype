import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

type HeaderProps = {
    title: string
    leftComponent?: JSX.Element
    rightComponent?: JSX.Element
}

/**
 * NaverPay 공통 헤더
 */

export const Header = ({title, leftComponent, rightComponent}: HeaderProps) => {
    return (
        <div className={cx('article')}>
            <h1 className="blind">네이버 페이</h1>
            <h2 className={cx('title')}>{title}</h2>
            {leftComponent && <div className={cx('side-left')}>{leftComponent}</div>}
            {rightComponent && <div className={cx('side-right')}>{rightComponent}</div>}
        </div>
    )
}

export default Header
