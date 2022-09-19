const IconNaverCertWhite = ({width = '100%', height = '100%', viewBox = '0 0 30 30', style = {}}) => (
    <svg width={width} height={height} viewBox={viewBox} style={style} fill="none">
        <circle opacity=".95" cx="15" cy="15" r="15" fill="#fff" />
        <g opacity=".899">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 6.112 7.664 8.73A1 1 0 0 0 7 9.672l.003 5.775c0 4.308 3.39 7.922 7.993 8.991 4.61-1.069 8.002-4.683 8.002-8.991L23 9.672a1 1 0 0 0-.664-.942L15 6.112z"
                fill="url(#g81u1mzmaa)"
                fillOpacity=".85"
            />
            <path
                d="M7.253 15.447h0L7.25 9.672c0-.317.2-.6.498-.706L15 6.377l7.252 2.589a.75.75 0 0 1 .498.706l-.002 5.775v0c0 4.149-3.257 7.67-7.752 8.735-4.487-1.066-7.743-4.586-7.743-8.735z"
                stroke="#000"
                strokeOpacity=".05"
                strokeWidth=".5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
        <path d="M15.982 12.347v3.106l-1.935-3.106H12v6h2.018V15.24l1.936 3.106H18v-6h-2.018z" fill="#fff" />
        <defs>
            <linearGradient
                id="g81u1mzmaa"
                x1="47.066"
                y1="13.542"
                x2="13.672"
                y2="-39.042"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".001" stopColor="#4430FF" />
                <stop offset="1" stopColor="#02AAAD" />
            </linearGradient>
        </defs>
    </svg>
)

export default IconNaverCertWhite
