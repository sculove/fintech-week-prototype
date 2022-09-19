import {ReactNode} from 'react'
import classNames from 'classnames/bind'
import styles from './Title.module.scss'

const cx = classNames.bind(styles)

type TitleProps = {
    title: ReactNode
}

const Title = ({title}: TitleProps) => {
    return <h3 className={cx('article')}>{title}</h3>
}

export default Title
