import type {PropsWithChildren, ReactNode} from 'react'
import classNames from 'classnames/bind'
import styles from './ResultBox.module.scss'

const cx = classNames.bind(styles)

type ResultBoxProps = PropsWithChildren<{
    title: ReactNode
}>

const ResultBox = ({title, children}: ResultBoxProps) => {
    return (
        <div className={cx('article')}>
            <strong className={cx('title')}>{title}</strong>
            {children}
        </div>
    )
}

export default ResultBox
