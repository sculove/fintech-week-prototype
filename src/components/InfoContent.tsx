import {ForwardedRef, PropsWithChildren} from 'react'
import classNames from 'classnames/bind'
import styles from './InfoContent.module.scss'

const cx = classNames.bind(styles)

type InfoContentProps = PropsWithChildren<{
    innerRef?: ForwardedRef<HTMLDivElement>
}>

const InfoContent = ({children, innerRef}: InfoContentProps) => {
    return (
        <div className={cx('article')} ref={innerRef}>
            {children}
        </div>
    )
}

export default InfoContent
