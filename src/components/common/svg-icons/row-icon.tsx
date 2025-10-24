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

const RowIcon: React.FC<IconProps> = () => {
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
                d="M6.20376 1.5L5 11.1721L5.79624 11.5L7 1.82789L6.20376 1.5Z"
                fill={themeColor}
            />
            <path
                d="M8.3751 9.125L8 8.5L10 6.5L8 4.5L8.3751 3.875L11.0001 6.5L8.3751 9.125Z"
                fill={themeColor}
            />
            <path
                d="M2 6.5L4 8.5L3.625 9.125L1 6.5L3.625 3.875L4 4.5L2 6.5Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default RowIcon
