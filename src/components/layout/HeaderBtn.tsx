import classNames from 'classnames/bind'
import IconCloseHeader from '../../assets/IconSvg/IconCloseHeader'
import styles from './HeaderBtn.module.scss'

const cx = classNames.bind(styles)

// 닫기버튼
export const CloseButton = () => {
    return (
        <button className={cx('button-close')} type="button" onClick={(e => e.preventDefault())}>
            <IconCloseHeader width={"30"} height={"30"} />
            <span className="blind">닫기</span>
        </button>
    )
}

export default {CloseButton}
