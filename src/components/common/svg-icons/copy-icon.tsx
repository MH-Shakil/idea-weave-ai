import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    className?: string
    onlyDark?: boolean
    onClick?: () => void
}

const CopyIcon: React.FC<IconProps> = ({
    className,
    onClick,
    onlyDark = false,
}) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            className={className}
            onClick={onClick}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5 19.5V7.5L21.75 6.75H12L11.25 7.5V10.5H8.25L7.5 11.25V23.25L8.25 24H18L18.75 23.25V20.25H21.75L22.5 19.5ZM18.75 18.75V11.25L18 10.5H12.75V8.25H21V18.75H18.75ZM9 12H17.25V22.5H9V12Z"
                fill={onlyDark ? '#D2D1D1' : themeColor}
            />
        </svg>
    )
}

export default CopyIcon
