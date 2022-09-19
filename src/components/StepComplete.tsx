import BottomButton from './BottomButton'
import Container from './layout/Container'
import { useNavigate } from "react-router-dom";

const StepComplete = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <h1>이미지가 필요합니다</h1>
                <BottomButton
                    fixed
                    buttonInfo={{
                        text: '처음으로 돌아가기',
                        disabled: false,
                        onClick: () => {
                            navigate("/")
                        }
                    }}
                />
            </Container>
        </>
    )
}

export default StepComplete
