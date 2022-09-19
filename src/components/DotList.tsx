import type {ReactNodeArray} from 'react'
import classNames from 'classnames/bind'
import styles from './DotList.module.scss'

const cx = classNames.bind(styles)

type DotListProps = {
    list: ReactNodeArray
    isMainList?: boolean
}

const DotList = ({list, isMainList = false}: DotListProps) => {
    return (
        <ul className={cx('article', {'type-main-list': isMainList})}>
            {list.map((item, key) => (
                <li key={key} className={cx('item')}>
                    {item}
                </li>
            ))}
        </ul>
    )
}
export default DotList
