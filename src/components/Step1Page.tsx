import Container from './layout/Container'
import CommonHeader from './layout/CommonHeader'
import Steppers from './Steppers'
import InfoContent from './InfoContent'
import MainTitle from './MainTitle'
import BottomButton from './BottomButton'
// import BusinessArea from './info/1/BusinessArea'
import InfoExamineList from './InfoExamineList'
import BusinessArea from './BusinessArea'
import { InputTextFlexibleBoxProps } from './InputTextFlexibleBox'
// import {InputTextFlexibleBoxProps} from './new/commons/input/InputTextFlexibleBox'

const Step1Page = () => {
    return (
        <>
            <CommonHeader title="한도와 금리조회" />
            <Container>
                <Steppers list={['심사대상조회', '자료제출', 'ACSS 심사', '한도확인']} step={1} />
                <InfoContent>
                    <MainTitle
                        title={
                            <>
                                심사대상 여부 확인을 위해
                                <br />
                                사업자 번호를 입력해주세요.
                            </>
                        }
                    />
                    <BusinessArea
                        businessInputProps={{
                            focus: true,
                            inputTextFlexibleBoxProps: {
                                showDeleteButton: true,
                            } as InputTextFlexibleBoxProps,
                            firstInputProps: {},
                            middleInputProps: {},
                            lastInputProps: {},
                        }}
                    />
                    <InfoExamineList />
                </InfoContent>
                <BottomButton
                    fixed
                    buttonInfo={{
                        text: '다음',
                        onClick: () => {
                            // TODO: 다음 페이지로 이동
                        },
                    }}
                />
            </Container>
        </>
    )
}

export default Step1Page
