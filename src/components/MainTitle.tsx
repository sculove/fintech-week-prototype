import type {ReactChild} from 'react'
import classNames from 'classnames/bind'
import styles from './MainTitle.module.scss'

const cx = classNames.bind(styles)

type MainTitleProps = {
    title: ReactChild
    description?: ReactChild
}

const MainTitle = ({title, description}: MainTitleProps) => {
    return (
        <div className={cx('article')}>
            <h3 className={cx('title')}>{title}</h3>
            {description && <p className={cx('description')}>{description}</p>}
        </div>
    )
}
export default MainTitle
