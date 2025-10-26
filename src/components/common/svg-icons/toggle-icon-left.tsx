import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    className?: string
    toggleSidebarOpen?: () => void
}

const ToggleIconLeft: React.FC<IconProps> = ({
    toggleSidebarOpen,
    className = 'flex-shrink-0 cursor-pointer',
}) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    const arrowColor = themeColor
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            onClick={toggleSidebarOpen}
            className={className}
        >
            {/* Simple rounded square + chevron */}
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
            <line
                x1="12"
                y1="10"
                x2="12"
                y2="22"
                stroke={themeColor}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M19 12L15 16L19 20"
                stroke={arrowColor}
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ToggleIconLeft
