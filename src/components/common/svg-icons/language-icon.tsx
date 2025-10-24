import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const LanguageIcon: React.FC<IconProps> = () => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M4.46387 10.1508L7.05197 3.88"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.53283 10.1703L7.05176 3.88"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.70578 8.06372H5.32471"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.1982 10.6714H17.4674"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15.6822 10.6714C15.6822 12.7827 13.1086 16.2708 10.5303 16.806"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.9121 14.2762C12.9483 15.4438 14.6413 16.5822 16.2029 16.806"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.2308 1H2.77081C1.79282 1 1 1.79282 1 2.77081V11.2308C1 12.2088 1.79282 13.0016 2.77081 13.0016H11.2308C12.2088 13.0016 13.0016 12.2088 13.0016 11.2308V2.77081C13.0016 1.79282 12.2088 1 11.2308 1Z"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.99854 13.0016V17.2292C6.99854 18.2022 7.79637 19 8.76934 19H17.2245C18.1974 19 18.9953 18.2022 18.9953 17.2292V8.76922C18.9953 7.79625 18.1974 6.99841 17.2245 6.99841H12.9969"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default LanguageIcon
