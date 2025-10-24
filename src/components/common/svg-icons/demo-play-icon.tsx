import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const DemoPlayIcon: React.FC<IconProps> = ({ width = 27, height = 28 }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 27 28"
            fill="none"
        >
            <path
                d="M16.875 2.1875V12.3125L25.3125 7.25L16.875 2.1875Z"
                fill={themeColor}
            />
            <path
                d="M23.625 12.3125V19.0625H3.375V5.5625H11.8125V3.875H3.375C2.92745 3.875 2.49822 4.05279 2.18176 4.36926C1.86529
        4.68572 1.6875 5.11495 1.6875 5.5625V19.0625C1.6875 19.5101 1.86529 19.9393 2.18176 20.2557C2.49822 20.5722 2.92745
        20.75 3.375 20.75H10.125V24.125H6.75V25.8125H20.25V24.125H16.875V20.75H23.625C24.0726 20.75 24.5018 20.5722 24.8182
        20.2557C25.1347 19.9393 25.3125 19.5101 25.3125 19.0625V12.3125H23.625ZM15.1875 24.125H11.8125V20.75H15.1875V24.125Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default DemoPlayIcon
