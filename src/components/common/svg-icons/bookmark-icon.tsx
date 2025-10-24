import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    selectColor?: boolean
}

const BookMarkIcon: React.FC<IconProps> = ({ selectColor = false }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
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
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.4375 1L1.375 0.0625H12.625L13.5625 1V17.6453L7 13.7564L0.4375 17.6453V1ZM2.3125 1.9375V14.3547L7 11.5769L11.6875 14.3547V1.9375H2.3125Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default BookMarkIcon
