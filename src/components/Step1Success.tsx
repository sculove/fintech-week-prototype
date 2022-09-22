import CommonHeader from './layout/CommonHeader'
import Steppers from './Steppers'
import Container from './layout/Container'
import InfoContent from './InfoContent'
import BottomButton from './BottomButton'
import ResultSucceess from './ResultSuccess'
import ResultTitle from './ResultTitle'
import { useNavigate } from "react-router-dom";

const Step1SuccessPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <CommonHeader title="한도와 금리조회" />
            <Container>
                <Steppers list={['심사대상조회', '자료제출', 'ACSS 심사', '한도확인']} step={1} />
                <InfoContent>
                    <ResultTitle />
                    <ResultSucceess
                        memberName={'김페이'}
                        isWooriWhitelist
                        smartstoreList={['김페이스토어']}
                    />
                </InfoContent>
                <BottomButton
                    fixed
                    buttonInfo={{
                        text: '다음',
                        onClick: () => {
                            navigate("/step2")
                        },
                    }}
                />
            </Container>
        </>
    )
}

export default Step1SuccessPage
