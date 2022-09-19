import classNames from 'classnames/bind'
import styles from './ResultSuccess.module.scss'

import ResultBox from './ResultBox'

const cx = classNames.bind(styles)

const AddMessage = () => {
    return (
        <div className={cx('box-gray')}>
            <p className={cx('text')}>
                <em>단, 우리은행 대출은 심사 대상이 아닙니다.</em>
                <br />
                사유 : 스토어 개설 6개월 미만 사업자
            </p>
        </div>
    )
}

type ResultSucceessProps = {
    memberName: string
    smartstoreList: string[]
    isWooriWhitelist: boolean
}

const ResultSucceess = ({memberName, smartstoreList, isWooriWhitelist}: ResultSucceessProps) => {
    return (
        <ResultBox
            title={
                <>
                    {memberName}님은
                    <br />
                    <em>사업자대출 심사대상</em>입니다
                </>
            }>
            {/* [D] 6개월 미만인 경우 노출 */}
            {!isWooriWhitelist && <AddMessage />}
            <div className={cx('area-info')}>
                <p>조회한 사업자 등록번호에 등록된 모든 스마트스토어의 정보를 합산하여 심사합니다.</p>
                <div className={cx('store')}>
                    <em className={cx('store-title')}>한도와 금리 조회에 활용될 스마트스토어</em>
                    <ul>
                        {smartstoreList.map((store) => (
                            <li key={store} className={cx('item')}>
                                {store}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </ResultBox>
    )
}

export default ResultSucceess
