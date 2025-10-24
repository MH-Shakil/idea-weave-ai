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

const InfoIcon: React.FC<IconProps> = ({
    onClick,
    className = 'cursor-pointer duration-300 active:scale-90',
}) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2F2F2F' : '#D0D0D0'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            // className="cursor-pointer duration-300 active:scale-90"
            className={className}
            onClick={onClick}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C4.02945 0 0 4.0294 0 9C0 13.9705 4.02945 18 9 18C13.9706 18 18 13.9705 18 9C18 4.0294 13.9706 0 9 0ZM9 16.2C5.02993 16.2 1.8 12.9701 1.8 9C1.8 5.02993 5.02993 1.8 9 1.8C12.9701 1.8 16.2 5.02993 16.2 9C16.2 12.9701 12.9701 16.2 9 16.2ZM10.127 5.4C10.127 6.05254 9.65187 6.525 9.00914 6.525C8.34042 6.525 7.87697 6.05254 7.87697 5.38752C7.87697 4.74836 8.35296 4.275 9.00914 4.275C9.65187 4.275 10.127 4.74835 10.127 5.4ZM8.10197 8.1H9.90197V13.5H8.10197V8.1Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default InfoIcon
