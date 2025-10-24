import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    colorRed?: boolean
    className?: string
}

const DeleteIcon: React.FC<IconProps> = ({
    className = 'cursor-pointer duration-300 active:scale-90',
    colorRed,
}) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor =
        currentTheme === 'light-theme'
            ? colorRed
                ? '#C10000'
                : '#2E2D2D'
            : colorRed
              ? '#DB0000'
              : '#D2D1D1'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={className}
        >
            <path
                d="M5.8335 7V9.91667"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.1665 7V9.91667"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.3335 4.08334H11.6668"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.5 5.83334V10.5C3.5 11.4665 4.2835 12.25 5.25 12.25H8.75C9.71652 12.25 10.5 11.4665 10.5 10.5V5.83334"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5.25 2.91667C5.25 2.27233 5.77233 1.75 6.41667 1.75H7.58333C8.22768 1.75 8.75 2.27233 8.75 2.91667V4.08333H5.25V2.91667Z"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default DeleteIcon
