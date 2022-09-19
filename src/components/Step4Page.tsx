import Steppers from './Steppers'
import Container from './layout/Container'
import CommonHeader from './layout/CommonHeader'
import InfoLimitContent from './InfoLimitContent'
import InfoLimitCustomer from './InfoLimitCustomer'
import InfoLimitLoanMirae from './InfoLimitLoanMirae'

const Step4Page = () => {
    return (
        <>
            <CommonHeader title="한도와 금리조회"/>
            <Container>
                <Steppers list={['심사대상조회', '자료제출', 'ACSS 심사', '한도확인']} step={4} />
                <InfoLimitContent>
                    <InfoLimitLoanMirae />
                </InfoLimitContent>
                <InfoLimitCustomer />
            </Container>
        </>
    )
}

export default Step4Page
