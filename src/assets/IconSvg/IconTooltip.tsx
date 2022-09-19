import {SVGStyleProps} from '@financial/common-icons'

const IconTooltip = ({
    fill = '#b3b3b3',
    width = '100%',
    height = '100%',
    viewBox = '0 0 15 15',
    style = {},
}: SVGStyleProps) => (
    <svg width={width} height={height} viewBox={viewBox} style={style}>
        <g fill={fill} fillRule="nonzero">
            <path d="M7.5 14.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-1a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            <path d="M5.179 5.88c.059-1.166.836-2.094 2.353-2.094 1.36 0 2.29.842 2.29 1.954 0 .848-.438 1.447-1.129 1.863-.686.404-.88.707-.88 1.274v.35h-.945v-.496c-.005-.713.34-1.199 1.08-1.641.626-.384.87-.724.87-1.301 0-.67-.519-1.161-1.323-1.161-.816 0-1.334.48-1.393 1.252h-.923zm2.235 5.853a.723.723 0 0 1-.75-.75c0-.444.312-.757.75-.757.437 0 .745.313.745.756 0 .437-.308.75-.745.75v.001z" />
        </g>
    </svg>
)

export default IconTooltip
