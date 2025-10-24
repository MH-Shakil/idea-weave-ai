import React from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    className?: string
    onClick?: () => void
}

const CloseIconSmall: React.FC<IconProps> = ({ className, onClick }) => {
    // const { currentTheme } = useSelector((state: RootState) => state.theme)
    // const themeColor = currentTheme === 'light-theme' ? '#000000' : '#FFFFFF'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={className}
            onClick={onClick}
        >
            <rect
                x="0.25"
                y="0.25"
                width="17.5"
                height="17.5"
                rx="8.75"
                fill="white"
            />
            <rect
                x="0.25"
                y="0.25"
                width="17.5"
                height="17.5"
                rx="8.75"
                stroke="#000000"
                strokeWidth="0.5"
            />
            <path
                d="M4.126 14L8.256 8.316V9.688L4.322 4.2H6.38L9.306 8.26L8.466 8.274L11.364 4.2H13.338L9.432 9.59V8.274L13.59 14H11.49L8.41 9.688H9.236L6.198 14H4.126Z"
                fill="#000000"
            />
        </svg>
    )
}

export default CloseIconSmall
