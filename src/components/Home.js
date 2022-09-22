import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import MainHeader from "./MainHeader"
import TabMenu from "./TabMenu"
import Description from "./Description"
// import SmeLoanHomeProductWoori from '$smeLoan/components/newHome/layerPages/SmeLoanHomeProductWoori'
// import SmeLoanHomeProductMac from '$smeLoan/components/newHome/layerPages/SmeLoanHomeProductMac'
// import MainHeader from '$smeLoan/components/newHome/MainHeader'
// import TabMenu from '$smeLoan/components/newHome/TabMenu'
// import Description from '$smeLoan/components/newHome/Description'
// import LoanInfo from '$smeLoan/components/newHome/LoanInfo'
// import NoticeList from '$smeLoan/components/newHome/NoticeList'
// import ROUTES from '$constants/routes'
// import CustomLink from '$smeLoan/components/common/CustomLink'
// import {NF_PROVISION_TYPE} from '$smeLoan/stores/agreement'

const cx = classNames.bind(styles)

const Home = () => {
    return (
        <div className={cx('article')}>
            <MainHeader />
            <TabMenu />
            <Description/>
            <p className={cx('description')} style={{
                margin: "10px 20px",
                color: "gray",
                fontStretch: "bold"
            }}>본 체험은 서비스의 이해를 돕기 위해 제작된 것으로, 실제 스마트스토어 사업자대출의 절차를 축소하여 재구성하였습니다.</p>
            {/* {fromHome && (
                // [D] 한도 확인하기 버튼 하단 고정 시 is-fixed 클래스 추가 부탁드립니다.
                <div className={cx('area-info', {'is-fixed': areaInfoFixed})}>
                    <LoanInfo
                        color="woori"
                        data={{
                            bankName: '우리은행',
                            productName: '네이버 스마트스토어 대출',
                            guideLink: `${ROUTES.SME_LOAN.HOME.GUIDE}/woori`,
                            maxLimit: '4,000',
                            maxLimitUnit: '만원',
                            minIntr: woori.lwstAppIntr || null,
                            maxIntr: woori.maxAppIntr || null,
                            intrUnit: '%',
                        }}
                    />
                    <LoanInfo
                        color="mirae"
                        data={{
                            bankName: '미래에셋캐피탈',
                            productName: '스마트스토어 사업자 대출',
                            guideLink: `${ROUTES.SME_LOAN.HOME.GUIDE}/mac`,
                            maxLimit: mac.maxLimit,
                            maxLimitUnit: '만원',
                            minIntr: mac.minIntr || null,
                            maxIntr: mac.maxIntr || null,
                            intrUnit: '%',
                        }}
                    />
                    <NoticeList />
                    <div className={cx('area-link')}>
                        <CustomLink
                            from={location.pathname}
                            to={`${ROUTES.SME_LOAN.HOME.PROVISION}/${NF_PROVISION_TYPE.INSURANCE_PERSONAL_SERVICE_MAC}`}
                            className={cx('link')}>
                            미래에셋캐피탈 이용약관
                        </CustomLink>
                        <CustomLink
                            from={location.pathname}
                            to={`${ROUTES.SME_LOAN.HOME.PROVISION}/${NF_PROVISION_TYPE.INSURANCE_PERSONAL_SERVICE_WOORI}`}
                            className={cx('link')}>
                            우리은행 이용약관
                        </CustomLink>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default Home
