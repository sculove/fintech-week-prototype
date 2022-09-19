import CommonHeader from './layout/CommonHeader'
import Steppers from './Steppers'
import Container from './layout/Container'
import InfoContent from './InfoContent'
import BottomButton from './BottomButton'
import ResultSucceess from './ResultSuccess'
import ResultTitle from './ResultTitle'

const Step1SuccessPage = () => {
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
                        smartstoreList={['디와이스터어']}
                    />
                </InfoContent>
                <BottomButton
                    fixed
                    buttonInfo={{
                        text: '다음',
                        onClick: () => {
                            // TODO: 다음으로 
                        },
                    }}
                />
            </Container>
        </>
    )
}

export default Step1SuccessPage
