import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const ForkIcon: React.FC<IconProps> = () => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
        >
            <path
                d="M2 4.21436L3.71429 2.50007L5.42857 4.21436"
                stroke={themeColor}
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.71387 2.50021L3.71387 5.35735L6.62015 7.64307"
                stroke={themeColor}
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.14258 4.21436L8.85686 2.50007L10.5711 4.21436"
                stroke={themeColor}
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.857 2.50011V5.35725L6.57129 7.64296V11.0715"
                stroke={themeColor}
                strokeWidth="0.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ForkIcon
