import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    selectColor?: boolean
}

const ArchiveIcon: React.FC<IconProps> = ({ selectColor = false }) => {
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
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
        >
            <path
                d="M1 2.5C1 1.79289 1 1.43934 1.2636 1.21967C1.52721 1 1.95147 1 2.8 1H17.2C18.0485 1 18.4728 1 18.7364 1.21967C19 1.43934 19 1.79289 19 2.5C19 3.20711 19 3.56066 18.7364 3.78033C18.4728 4 18.0485 4 17.2 4H2.8C1.95147 4 1.52721 4 1.2636 3.78033C1 3.56066 1 3.20711 1 2.5Z"
                stroke={themeColor}
                strokeWidth="1.5"
            />
            <path
                d="M18 4V9.14286C18 12.3753 18 13.9916 16.8973 14.9958C15.7947 16 14.02 16 10.4706 16H9.52941C5.98001 16 4.20532 16 3.10265 14.9958C2 13.9916 2 12.3753 2 9.14286V4"
                stroke={themeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M8.00049 8.75C8.00049 8.2841 8.00049 8.0511 8.05969 7.8673C8.13863 7.6223 8.29005 7.4276 8.48063 7.3261C8.62356 7.25 8.80479 7.25 9.16716 7.25H11.5005C11.8629 7.25 12.0441 7.25 12.187 7.3261C12.3776 7.4276 12.529 7.6223 12.608 7.8673C12.6672 8.0511 12.6672 8.2841 12.6672 8.75C12.6672 9.2159 12.6672 9.4489 12.608 9.6327C12.529 9.8777 12.3776 10.0724 12.187 10.1739C12.0441 10.25 11.8629 10.25 11.5005 10.25H9.16716C8.80479 10.25 8.62356 10.25 8.48063 10.1739C8.29005 10.0724 8.13863 9.8777 8.05969 9.6327C8.00049 9.4489 8.00049 9.2159 8.00049 8.75Z"
                stroke={themeColor}
                strokeWidth="1.5"
            />
        </svg>
    )
}

export default ArchiveIcon
