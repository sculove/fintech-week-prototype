const IconDeleteCircle = ({
    fill = '#000',
    width = '100%',
    height = '100%',
    viewBox = '0 0 16 16',
    style = {}
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} style={style}>
        <g fill="none" fillRule="evenodd">
            <circle cx="8" cy="8" r="8" fill={fill} />
            <path fill="#FFF" d="M5.235 4.606l2.828 2.83 2.829-2.83.628.629-2.83 2.828 2.83 2.829-.628.628-2.83-2.828-2.827 2.828-.629-.628 2.828-2.828-2.828-2.83.629-.628z"/>
        </g>
    </svg>
)

export default IconDeleteCircle
