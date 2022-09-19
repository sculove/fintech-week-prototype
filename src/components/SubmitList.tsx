import DotList from './DotList'
import classNames from 'classnames/bind'
import styles from './SubmitList.module.scss'

const cx = classNames.bind(styles)

const SubmitList = () => {
    return (
        <div className={cx('article')}>
            <DotList
                list={[
                    <>대표자 개인명의 인증서가 필요해요.</>,
                    <>홈택스에 등록된 사업자 정보 통하여 정확한 대출한도를 확인할 수 있어요.</>,
                    <>대출 신청 시, 서류 발급 및 지점 방문 없이 자료가 금융사로 전달되니 참고해주세요.</>,
                    <>
                        <em className={cx('point')}>자료제출 가능시간 : 오전 08:00~ 오후 10:00</em>
                    </>,
                ]}
            />
        </div>
    )
}

export default SubmitList
