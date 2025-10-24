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
            <g clip-path="url(#clip0_208_1829)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.0042 28.0005H7.00971C5.35521 28.0005 4.01221 26.6575 4.01221 25.003V6.9975C4.01221 5.3435 5.35521 4 7.00971 4H25.0042C26.6587 4 28.0017 5.3435 28.0017 6.9975V25.003C28.0017 26.6575 26.6587 28.0005 25.0042 28.0005ZM12.0122 26V6.0005H7.50621C6.68121 6.0005 6.01171 6.67 6.01171 7.495V24.5055C6.01171 25.3305 6.68121 26 7.50621 26H12.0122ZM24.5077 6.0005H14.0122V26H24.5077C25.3327 26 26.0022 25.3305 26.0022 24.5055V7.495C26.0022 6.67 25.3327 6.0005 24.5077 6.0005Z"
                    fill={themeColor}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.01216 19.3871L11.4262 15.9731L8.01216 12.5586L6.59766 13.9731L8.59766 15.9731L6.59766 17.9731L8.01216 19.3871Z"
                    fill={themeColor}
                />
            </g>
            <defs>
                <clipPath id="clip0_208_1829">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ToggleIconRight
