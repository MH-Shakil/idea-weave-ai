import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const PlayIcon: React.FC<IconProps> = () => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
        >
            <path
                d="M10.2043 5.17629C11.2652 5.75325 11.2652 7.24675 10.2043 7.8237L3.79831 11.3073C2.76718 11.868 1.5 11.1382 1.5 9.98355V3.01645C1.5 1.86184 2.76718 1.13201 3.79831 1.69274L10.2043 5.17629Z"
                stroke={themeColor}
            />
        </svg>
    )
}

export default PlayIcon
