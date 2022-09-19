const IconArrowRight = ({
    fill = '#000',
    width = '100%',
    height = '100%',
    viewBox = '0 0 9 15',
    opacity = '1',
    style = {}
}) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} style={style}>
            <title>상세보기</title>
            <path fill={fill} opacity={opacity} fillRule="nonzero" d="M.088.756L.808 0l7.897 7.516L.714 15 0 14.238 7.183 7.51z" />
        </svg>
    )

export default IconArrowRight
