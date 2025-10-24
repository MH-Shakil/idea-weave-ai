import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const SearchIcon: React.FC<IconProps> = () => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#8F8F8F' : '#8F8F8F'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
        >
            <path
                d="M9.87219 9.88194L13.125 13.125M11.25 6.5625C11.25 9.15131 9.15131 11.25 6.5625 11.25C3.97366 11.25 1.875 9.15131 1.875 6.5625C1.875 3.97366 3.97366 1.875 6.5625 1.875C9.15131 1.875 11.25 3.97366 11.25 6.5625Z"
                stroke={themeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SearchIcon
