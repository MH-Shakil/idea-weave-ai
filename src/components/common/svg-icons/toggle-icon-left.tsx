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
            <g clipPath="url(#clip0_121_239)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.992 28H6.9975C5.343 28 4 26.657 4 25.0025V6.99701C4 5.34301 5.343 3.99951 6.9975 3.99951H24.992C26.6465 3.99951 27.9895 5.34301 27.9895 6.99701V25.0025C27.9895 26.657 26.6465 28 24.992 28ZM12 25.9995V6.00001H7.494C6.669 6.00001 5.9995 6.66951 5.9995 7.49451V24.505C5.9995 25.33 6.669 25.9995 7.494 25.9995H12ZM24.4955 6.00001H14V25.9995H24.4955C25.3205 25.9995 25.99 25.33 25.99 24.505V7.49451C25.99 6.66951 25.3205 6.00001 24.4955 6.00001Z"
                    fill={themeColor}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.99945 19.387L6.58545 15.973L9.99945 12.5585L11.4139 13.973L9.41395 15.973L11.4139 17.973L9.99945 19.387Z"
                    fill={themeColor}
                />
            </g>
            <defs>
                <clipPath id="clip0_121_239">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ToggleIconLeft
