import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    className?: string
    onClick?: () => void
}

const DownloadIcon: React.FC<IconProps> = ({ className, onClick }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className={className}
            onClick={onClick}
        >
            <path
                d="M3.125 15.625C3.125 18.5712 3.125 20.0444 4.04029 20.9597C4.95558 21.875 6.42872 21.875 9.375 21.875H15.625C18.5712 21.875 20.0444 21.875 20.9597 20.9597C21.875 20.0444 21.875 18.5712 21.875 15.625"
                stroke={themeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.4997 3.125V16.6667M12.4997 16.6667L16.6663 12.1094M12.4997 16.6667L8.33301 12.1094"
                stroke={themeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default DownloadIcon
