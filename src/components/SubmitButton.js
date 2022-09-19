import classNames from 'classnames/bind'
import styles from './SubmitButton.module.scss'
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles)

const SubmitButton = () => {
    const navigate = useNavigate();
    return (
        <div className={cx('article')}>
            <button
                type="button"
                className={cx('button')}
                onClick={(e) => {
                    navigate("/step1")
                }}>
                약관 동의하고 한도 확인하기
            </button>
            <div className={cx('tooltip')}>
                단 <strong className={cx('point')}>1분 만에</strong> OK!
            </div>
        </div>
    )
}

export default SubmitButton
