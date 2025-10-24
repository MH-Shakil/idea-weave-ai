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

const MinusIconCircle: React.FC<IconProps> = ({
    onClick,
    className = 'cursor-pointer duration-300 active:scale-90',
}) => {
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
            <rect
                x="0.5"
                y="0.5"
                width="29"
                height="29"
                rx="14.5"
                stroke={themeColor}
            />
            <path
                d="M12.798 17.738V16.576H16.564V17.738H12.798Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default MinusIconCircle
