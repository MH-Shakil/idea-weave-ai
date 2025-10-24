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

const CarouselRightArrow: React.FC<IconProps> = ({ className, onClick }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#ffffff' : '#ffffff'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            className={className}
            onClick={onClick}
        >
            <path
                d="M9.61935 34.7984L26.3989 18.0189C26.6834 17.7344 26.6834 17.2748 26.3989 16.9903L9.61935 0.203443C9.32751 -0.0737613 8.8679 -0.0665114 8.59069 0.218011C8.32074 0.502533 8.32074 0.947578 8.59069 1.2321L24.8522 17.501L8.59069 33.7625C8.31349 34.0543 8.32074 34.514 8.60526 34.7912C8.88985 35.0683 9.33483 35.0683 9.61935 34.7984Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default CarouselRightArrow
