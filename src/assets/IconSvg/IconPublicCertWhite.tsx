const IconPublicCertWhite = ({width = '100%', height = '100%', viewBox = '0 0 30 30', style = {}}) => (
    <svg width={width} height={height} viewBox={viewBox} style={style} fill="none">
        <circle opacity="0.95" cx="15" cy="15" r="15" fill="white" />
        <g opacity="0.763672">
            <rect x="9.5" y="6" width="11" height="17.9156" rx="2" fill="url(#paint0_linear_358_6327)" />
            <rect
                x="9.75"
                y="6.25"
                width="10.5"
                height="17.4156"
                rx="1.75"
                stroke="black"
                strokeOpacity="0.05"
                strokeWidth="0.5"
            />
        </g>
        <rect opacity="0.65" x="13" y="8.5" width="4" height="1" rx="0.5" fill="white" />
        <defs>
            <linearGradient
                id="paint0_linear_358_6327"
                x1="-28.7883"
                y1="24.2827"
                x2="24.2422"
                y2="37.6841"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#09AA5D" />
                <stop offset="1" stopColor="#02AAAD" />
            </linearGradient>
        </defs>
    </svg>
)

export default IconPublicCertWhite
