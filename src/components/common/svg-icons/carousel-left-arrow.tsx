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

const CarouselLeftArrow: React.FC<IconProps> = ({ className, onClick }) => {
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
                d="M25.3807 0.201588L8.60109 16.9811C8.31656 17.2656 8.31656 17.7252 8.60109 18.0097L25.3807 34.7966C25.6725 35.0738 26.1321 35.0665 26.4093 34.782C26.6793 34.4975 26.6793 34.0524 26.4093 33.7679L10.1478 17.499L26.4093 1.2375C26.6865 0.945656 26.6793 0.486042 26.3947 0.208836C26.1101 -0.0682983 25.6652 -0.0682983 25.3807 0.201588Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default CarouselLeftArrow
