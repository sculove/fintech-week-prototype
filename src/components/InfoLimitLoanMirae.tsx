import classNames from 'classnames/bind'
import styles from './InfoLimitLoan.module.scss'
import Button from './Button'
// import LoanBenefit from '$components/info/4/infoLimitLoan/LoanBenefit'
import LoanTitle from './LoanTitle'
import LoanBenefit from './LoanBenefit'

const cx = classNames.bind(styles)

const InfoLimitLoanMirae = () => {
    return (
        <div className={cx('article', 'type-mirae')}>
            <LoanTitle title={<>미래에셋캐피탈 스마트스토어 사업자대출</>} link={'#'} />
            <LoanBenefit limit="5,000" intr="4.90" typeBank="type-mirae" />
            <p className={cx('description')}>국세청 자료확인후, 한도가 올라갈 수 있습니다.</p>
            <div className={cx('area-button')}>
                <div className={cx('button')}>
                    <Button text="다음" color="mirae" size="small" radius onClick={() => {}} />
                </div>
            </div>
            <p className={cx('notice')}>미래에셋캐피탈 앱 설치 필요 없이 대출 가능</p>
        </div>
    )
}

export default InfoLimitLoanMirae
