const LogoN = ({
    fill = '#FFF',
    width = '100%',
    height = '100%',
    viewBox = '0 0 28 28',
    style = {}
}) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={width} height={height} viewBox={viewBox}>
        <defs>
            <path id="logon_a" d="M0 0L28 0 28 28 0 28z"/>
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="logon_b" fill="#fff">
                <use xlinkHref="#logon_a"/>
            </mask>
            <path fill={fill} d="M21 21h-4.302l-5.19-7.493V21H7V7h4.303l5.19 7.493V7H21v14zM0 28h28V0H0v28z" mask="url(#logon_b)"/>
        </g>
    </svg>
    )

export default LogoN
