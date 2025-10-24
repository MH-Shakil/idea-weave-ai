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

const ThreeDotVerticalIcon: React.FC<IconProps> = ({ className, onClick }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    const themeColorRect =
        currentTheme === 'light-theme' ? '#F1F1F1' : '#1B1B1B'

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
            <rect width="30" height="30" rx="4" fill={themeColorRect} />
            <path
                d="M14.9993 20.0833C16.0119 20.0833 16.8327 20.9041 16.8327 21.9167C16.8327 22.9292 16.0119 23.75 14.9993 23.75C13.9868 23.75 13.166 22.9292 13.166 21.9167C13.166 20.9041 13.9868 20.0833 14.9993 20.0833Z"
                fill={themeColor}
            />
            <path
                d="M14.9993 13.4168C16.0119 13.4168 16.8327 14.2376 16.8327 15.2502C16.8327 16.2627 16.0119 17.0835 14.9993 17.0835C13.9868 17.0835 13.166 16.2627 13.166 15.2502C13.166 14.2376 13.9868 13.4168 14.9993 13.4168Z"
                fill={themeColor}
            />
            <path
                d="M14.9993 6.75008C16.0119 6.75008 16.8327 7.57086 16.8327 8.58341C16.8327 9.59596 16.0119 10.4167 14.9993 10.4167C13.9868 10.4167 13.166 9.59596 13.166 8.58341C13.166 7.57086 13.9868 6.75008 14.9993 6.75008Z"
                fill={themeColor}
            />
        </svg>
    )
}

export default ThreeDotVerticalIcon
