import type {PropsWithChildren} from 'react'
import classNames from 'classnames/bind'
import styles from './LayoutContent.module.scss'

const cx = classNames.bind(styles)

type LayoutContentProps = PropsWithChildren<{}>

const LayoutContent = ({children}: LayoutContentProps) => {
    return <div className={cx('article')}>{children}</div>
}

export default LayoutContent
