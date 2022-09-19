import MainTitle from './MainTitle'
import Steppers from './Steppers'
import InfoContent from './InfoContent'
import SubmitContent from './SubmitContent'
import SubmitList from './SubmitList'
import CommonHeader from './layout/CommonHeader'
import Container from './layout/Container'
import useTimeoutNavigation from "../hooks/useTimeoutNavigation"

const SelfAuth = () => {
    useTimeoutNavigation("/step2success", 3000)

    return (
        <>
            <CommonHeader title="한도와 금리조회" />
            <Container>
                <Steppers list={['심사대상조회', '자료제출', 'ACSS 심사', '한도확인']} step={2} />
                <InfoContent>
                    <MainTitle title={<>인증서를 선택해 주세요</>} />
                    <SubmitContent />
                    <SubmitList />
                </InfoContent>
            </Container>
        </>
    )
}
export default SelfAuth
