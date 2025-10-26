import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    toggleSidebarOpen?: () => void
}

const ToggleIconRight: React.FC<IconProps> = ({ toggleSidebarOpen }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            onClick={toggleSidebarOpen}
            className="flex-shrink-0 cursor-pointer"
        >
            {/* Rounded square */}
            <rect
                x="4"
                y="4"
                width="24"
                height="24"
                rx="8"
                fill="none"
                stroke={themeColor}
                strokeWidth="2"
            />
            {/* Center divider (short) */}
            <line
                x1="20"
                y1="10"
                x2="20"
                y2="22"
                stroke={themeColor}
                strokeWidth="2"
                strokeLinecap="round"
            />
            {/* Right chevron */}
            <path
                d="M13 12L17 16L13 20"
                stroke={themeColor}
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ToggleIconRight
