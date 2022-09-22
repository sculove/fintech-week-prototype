import BottomButton from "./BottomButton"
import Complete from "./Complete"
import CommonHeader from "./layout/CommonHeader"
import Container from './layout/Container'
import { useNavigate } from "react-router-dom";
export default function Step2Success() {
    const navigate = useNavigate();
    return (
        <>
            <CommonHeader
                title="네이버 인증서"
            />
            <Container>
                <Complete step={1} />
                <BottomButton
                    fixed
                    buttonInfo={{
                        text: '완료하고 한도 확인하기',
                        disabled: false,
                        onClick: () => {
                            navigate("/step3")
                        }
                    }}
                />
            </Container>
        </>
    )
}
