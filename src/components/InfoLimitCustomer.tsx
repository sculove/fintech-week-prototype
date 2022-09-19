import classNames from 'classnames/bind'
import styles from './InfoLimitCustomer.module.scss'

import CustomerLink from './CustomerLink'

const cx = classNames.bind(styles)

const InfoLimitCustomer = () => {
    const contactList = [
        {
            text: '미래에셋캐피탈',
        },
        {
            text: '우리은행',
        },
    ]

    return (
        <div className={cx('article')}>
            <p className={cx('notice')}>
                위 상품 조건은 조회한 당일에만 유효합니다.
                <br />
                심사결과에 대한 문의는 금융사로 연락 바랍니다.
            </p>
            <CustomerLink telList={contactList} />
        </div>
    )
}

export default InfoLimitCustomer
