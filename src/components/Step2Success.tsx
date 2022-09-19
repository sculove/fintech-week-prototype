import BottomButton from "./BottomButton"
import Complete from "./Complete"
import CommonHeader from "./layout/CommonHeader"
import Container from './layout/Container'

export default function Step2Success() {
    return (
        <>
            <CommonHeader
                title="네이버 인증서"
            />
            <Container>
                <Complete step={2} />
                <BottomButton
                    fixed
                    buttonInfo={{
                        text: '완료하고 한도 확인하기',
                        disabled: false,
                        onClick: () => {
                            // TODO:
                        }
                    }}
                />
            </Container>
        </>
    )
}
