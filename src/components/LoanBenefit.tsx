import classnames from 'classnames/bind'
import IconTooltip from '../assets/IconSvg/IconTooltip'
import styles from './LoanBenefit.module.scss'

const cx = classnames.bind(styles)

type LoanBenefitProps = {
    limit: string
    intr: string
    typeBank: 'type-mirae' | 'type-woori'
    onOpenModal?(): void
}

const LoanBenefit = ({limit, intr, typeBank, onOpenModal}: LoanBenefitProps) => {
    return (
        <dl className={cx('article', typeBank)}>
            <div className={cx('item')}>
                <dt className={cx('label')}>한도</dt>
                <dd className={cx('value')}>
                    {limit}
                    <span className={cx('unit')}>만원</span>
                </dd>
            </div>
            <div className={cx('item')}>
                <dt className={cx('label')}>
                    {typeBank === 'type-mirae' ? (
                        <>금리</>
                    ) : (
                        <>
                            예상금리
                            <button type="button" className={cx('button-tooltip')} onClick={onOpenModal}>
                                <span className="blind">툴팁</span>
                                <IconTooltip width={15} height={15} />
                            </button>
                        </>
                    )}
                </dt>
                <dd className={cx('value')}>
                    <span className={cx('unit')}>연</span>
                    {intr}
                    <b className={cx('percent')}>%</b>
                </dd>
            </div>
        </dl>
    )
}

export default LoanBenefit
