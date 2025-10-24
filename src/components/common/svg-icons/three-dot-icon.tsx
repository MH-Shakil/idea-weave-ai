import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const ThreeDotIcon: React.FC<IconProps> = () => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            className="cursor-pointer"
        >
            <path
                d="M4.375 7.00001C4.375 7.64436 3.81536 8.16668 3.125 8.16668C2.43464 8.16668 1.875 7.64436 1.875 7.00001C1.875 6.35566 2.43464 5.83334 3.125 5.83334C3.81536 5.83334 4.375 6.35566 4.375 7.00001Z"
                fill={themeColor}
            />
            <path
                d="M8.875 6.99992C8.875 7.64427 8.31538 8.16659 7.625 8.16659C6.93463 8.16659 6.375 7.64427 6.375 6.99992C6.375 6.35557 6.93463 5.83325 7.625 5.83325C8.31538 5.83325 8.875 6.35557 8.875 6.99992Z"
                fill={themeColor}
            />
            <path
                d="M13.375 6.99992C13.375 7.64427 12.8154 8.16659 12.125 8.16659C11.4346 8.16659 10.875 7.64427 10.875 6.99992C10.875 6.35557 11.4346 5.83325 12.125 5.83325C12.8154 5.83325 13.375 6.35557 13.375 6.99992Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default ThreeDotIcon
