import type {PropsWithChildren} from 'react'
import classNames from 'classnames/bind'
import styles from './Container.module.scss'

const cx = classNames.bind(styles)

type ContainerProps = PropsWithChildren<{}>

const Container = ({children}: ContainerProps) => {
    return <div className={cx('article')}>{children}</div>
}
export default Container
