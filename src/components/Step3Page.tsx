import LoadingCubeLayer from './LoadingCubeLayer'
import InfoContent from './InfoContent'
import Container from './layout/Container'

const Loading = () => {
    const tipText = '사업 Tip!'
    const tipDesc = (
        <>
            파트너 금융지원 사이트에 방문해보세요.
            <br />
            사업에 필요한 금융정보를
            <br />한 곳에서 확인할 수 있어요.
        </>
    )
    
    return (
        <>
            <Container>
                <div style={{height: "50px"}}/>
                <InfoContent>
                    <LoadingCubeLayer
                        tipText={tipText}
                        tipDesc={tipDesc}
                    />
                </InfoContent>
            </Container>
        </>
    )
}

export default Loading
