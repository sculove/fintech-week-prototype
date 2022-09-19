const IconCloseLayer = ({
    fill = '#000',
    width = '100%',
    height = '100%',
    viewBox = '0 0 30 30',
    style = {},
}) => (
    <svg width={width} height={height} viewBox={viewBox} style={style}>
        <g fill={fill} fillRule="evenodd">
            <path d="M23.3 6 6 23.301l.7.699L24 6.699z" />
            <path d="m6.7 6-.7.699L23.3 24l.7-.699z" />
        </g>
    </svg>
)

export default IconCloseLayer
