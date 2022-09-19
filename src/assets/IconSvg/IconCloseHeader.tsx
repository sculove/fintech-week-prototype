const IconCloseHeader = ({
    fill = '#000',
    width = '100%',
    height = '100%',
    viewBox = '0 0 30 30',
    style = {},
}) => (
    <svg width={width} height={height} viewBox={viewBox} style={style}>
        <g fill={fill} fillRule="evenodd">
            <path d="M8.46 7.149 22.6 21.29l-1.06 1.06L7.399 8.21z" />
            <path d="M21.54 7.149 7.4 21.29l1.06 1.06L22.601 8.21z" />
        </g>
    </svg>
)

export default IconCloseHeader
