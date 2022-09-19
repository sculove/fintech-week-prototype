import type {CSSProperties, ReactNode} from 'react'
import classNames from 'classnames/bind'
import styles from './CustomerLink.module.scss'

const cx = classNames.bind(styles)

type ContactItem = {
    text: ReactNode
}
type Props = {
    style?: CSSProperties
    telList: ContactItem[]
}

const TelLink = ({text}: ContactItem) => {
    return (
        <div className={cx('link-box')}>
            <a href="#" className={cx('link')} onClick={e=>e.preventDefault()}>
                {text}
            </a>
        </div>
    )
}

const CustomerLink = ({style, telList}: Props) => {
    return (
        <div className={cx('article')} style={style}>
            {telList.map(({text}, idx) => (
                <TelLink key={idx} text={text}/>
            ))}
        </div>
    )
}

export default CustomerLink
