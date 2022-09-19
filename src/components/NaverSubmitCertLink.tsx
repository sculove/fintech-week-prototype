import classNames from 'classnames/bind'
import IconNaverCertWhite from '../assets/IconSvg/IconNaverCertWhite'
import IconArrowRightThin from '../assets/IconSvg/IconArrowRightThin'
import styles from './NaverSubmitCertLink.module.scss'

const cx = classNames.bind(styles)

const SubmitCertLink = () => {
    return (
        <a
            className={cx('article', `type-naver`)}
            onClick={(e) => {
                e.preventDefault()
            }}>
            <IconNaverCertWhite width={"30"} height={"30"} />
            <div className={cx('text')}>
                <span className={cx('name')}>네이버 인증서</span>
                <p className={cx('desc')}>2024.12.01. 만료</p>
                <IconArrowRightThin width={"7"} height={"12"} fill={'#fff'} />
            </div>
        </a>
    )
}

export default SubmitCertLink
