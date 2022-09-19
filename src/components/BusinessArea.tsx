import classNames from 'classnames/bind'
import styles from './BusinessArea.module.scss'
import BusinessInput, {BusinessInputProps} from './BusinessInput'

const cx = classNames.bind(styles)

type BusinessAreaProps = {
    businessInputProps: BusinessInputProps
}

const BusinessArea = ({businessInputProps}: BusinessAreaProps) => {
    return (
        <div className={cx('article')}>
            <strong className={cx('title')}>사업자 등록번호</strong>
            <BusinessInput {...businessInputProps} />
        </div>
    )
}

export default BusinessArea
