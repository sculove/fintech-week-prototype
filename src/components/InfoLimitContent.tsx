import type {PropsWithChildren} from 'react'
import classNames from 'classnames/bind'
import styles from './InfoLimitContent.module.scss'

const cx = classNames.bind(styles)

type InfoLimitContentProps = PropsWithChildren<{}>

const InfoLimitContent = ({children}: InfoLimitContentProps) => {
    return <div className={cx('article')}>{children}</div>
}

export default InfoLimitContent
