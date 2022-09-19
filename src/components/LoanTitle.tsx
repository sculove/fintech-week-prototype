import {ReactNode} from 'react'
import classnames from 'classnames/bind'
import IconArrowRightThin from '../assets/IconSvg/IconArrowRightThin'
import styles from './LoanTitle.module.scss'

const cx = classnames.bind(styles)

type LoanTitleProps = {
    title: ReactNode
    link: string
}

const LoanTitle = ({title}: LoanTitleProps) => {
    return (
        <div className={cx('article')}>
            <strong className={cx('title')}>{title}</strong>
            <a href="#" className={cx('link')}>
                상품 안내
                <IconArrowRightThin width={"6"} height={"10"} fill="#919191" />
            </a>
        </div>
    )
}

export default LoanTitle
