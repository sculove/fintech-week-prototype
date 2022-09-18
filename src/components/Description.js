import classNames from 'classnames/bind'
import styles from './Description.module.scss'
import IconArrowRight from '../assets/IconSvg/IconArrowRight'
import IconSmartStore from '../assets/IconSvg/IconSmartStore'
import SubmitButton from './SubmitButton'

const cx = classNames.bind(styles)
const LOAN_CARE_PAGE = 'https://campaign.naver.com/loan_care'

const Description = () => {
    return (
        <div className={cx('article')}>
            <IconSmartStore width={196} height={142} />
            <strong className={cx('description')}>
                네이버 쇼핑몰을 운영 중인 사장님
                <span className={cx('name')}>
                    스마트스토어
                    <br />
                    사업자 대출
                </span>
            </strong>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    3개월 연속 매출
                    <br />
                    <em className={cx('highlight')}>50만원 이상이면 가능</em>
                </li>
                <li className={cx('item')}>
                    휴&middot;폐업시
                    <br />
                    <a href="#" onClick={(e) => {
                        e.preventDefault()
                    }} className={cx('link-loan')}>
                        <em className={cx('highlight')}>최대 300만원 지원</em>
                        <IconArrowRight fill="#1e1e23" width={8} height={16} />
                    </a>
                </li>
            </ul>
            <div className={cx('area-link', {'is-fixed': false})}>
                <div className={cx('inner')}>
                    <SubmitButton />
                </div>
            </div>
        </div>
    )
}

export default Description
