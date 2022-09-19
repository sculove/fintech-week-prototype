import type {PropsWithChildren} from 'react'
import classNames from 'classnames/bind'
import styles from './Wrap.module.scss'

const cx = classNames.bind(styles)

type WrapProps = PropsWithChildren<{isMobile: boolean; id: string}>

const Wrap = ({children, isMobile, id}: WrapProps) => {
    return (
        <div
            id={id}
            className={cx('article', {
                'type-pc': !isMobile,
            })}>
            {children}
        </div>
    )
}

export default Wrap
