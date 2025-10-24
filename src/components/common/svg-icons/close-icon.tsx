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

const CloseIcon: React.FC<IconProps> = ({ className, onClick }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#000000' : '#FFFFFF'
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
                d="M15.5 3C8.5875 3 3 8.5875 3 15.5C3 22.4125 8.5875 28 15.5 28C22.4125 28 28 22.4125 28 15.5C28 8.5875 22.4125 3 15.5 3ZM15.5 25.5C9.9875 25.5 5.5 21.0125 5.5 15.5C5.5 9.9875 9.9875 5.5 15.5 5.5C21.0125 5.5 25.5 9.9875 25.5 15.5C25.5 21.0125 21.0125 25.5 15.5 25.5ZM19.9875 9.25L15.5 13.7375L11.0125 9.25L9.25 11.0125L13.7375 15.5L9.25 19.9875L11.0125 21.75L15.5 17.2625L19.9875 21.75L21.75 19.9875L17.2625 15.5L21.75 11.0125L19.9875 9.25Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default CloseIcon
