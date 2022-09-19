import classnames from 'classnames/bind'
import styles from './InfoExamineList.module.scss'

const cx = classnames.bind(styles)

const InfoExamineList = () => {
    return (
        <div className={cx('article')}>
            <strong className={cx('title')}>확인해주세요</strong>
            <ul className={cx('list')}>
                <li className={cx('item', 'highlight')}>
                    <em>스마트스토어 기준 3개월 연속 순거래액 50만원 이상이 되지 않으면 심사 대상에서 제외됩니다.</em>
                </li>
                <li className={cx('item')}>
                    한 사업자 등록번호에 여러 스마트스토어가 등록된 경우, 모든 스마트스토어 정보를 합산하여
                    심사대상여부를 판단합니다.
                </li>
                <li className={cx('item')}>개인사업자 대표자만 신청이 가능합니다.</li>
                <li className={cx('item')}>
                    법인사업자, 공동대표 개인사업자, 휴폐업 중인 사업자는 대상에서 제외됩니다.
                </li>
                <li className={cx('item', 'highlight')}>
                    <em>
                        우리은행 상품의 경우, 스마트스토어에 개인사업자로 등록한지 6개월 이상인 사업자만 가능합니다.
                        (개인판매자에서 사업자로 변경한 경우, 변경한 일로부터 6개월 이상)
                    </em>
                </li>
            </ul>
        </div>
    )
}

export default InfoExamineList
