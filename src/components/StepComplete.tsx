import BottomButton from './BottomButton'
import Container from './layout/Container'
import { useNavigate } from "react-router-dom";

const StepComplete = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <img src="result.jpg"/>
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
