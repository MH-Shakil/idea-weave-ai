import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    selectColor?: boolean
    onClick?: () => void
}

const BookmarkSecondIcon: React.FC<IconProps> = ({ selectColor, onClick }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    //   const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    const themeColor =
        currentTheme === 'light-theme'
            ? selectColor
                ? '#FFFFFF'
                : '#2E2D2D'
            : selectColor
              ? '#2E2D2D'
              : '#D2D1D1'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="cursor-pointer"
            onClick={onClick}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.0625 4.5L5.625 3.9375H12.375L12.9375 4.5V14.4872L9 12.1538L5.0625 14.4872V4.5ZM6.1875 5.0625V12.5128L9 10.8461L11.8125 12.5128V5.0625H6.1875Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default BookmarkSecondIcon
