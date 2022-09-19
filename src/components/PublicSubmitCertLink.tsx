import classNames from 'classnames/bind'
import IconArrowRightThin from '../assets/IconSvg/IconArrowRightThin'
import IconPublicCertWhite from '../assets/IconSvg/IconPublicCertWhite'
import styles from './PublicSubmitCertLink.module.scss'

const cx = classNames.bind(styles)

const SubmitCertLink = () => {
    return (
        <a
            className={cx('article', `type-public`)}
            onClick={e => e.preventDefault()}>
            <IconPublicCertWhite width={"30"} height={"30"} />
            <div className={cx('text')}>
                <span className={cx('name')}>공동인증서</span>
                <p className={cx('desc')}>2023.01.09. 만료</p>
                <IconArrowRightThin width={"7"} height={"12"} fill={'#fff'} />
            </div>
        </a>
    )
}

export default SubmitCertLink
