import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const EditIcon: React.FC<IconProps> = () => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="cursor-pointer duration-300 active:scale-90"
        >
            <path
                d="M11.7542 4.63165L4.82999 11.5558C4.21166 12.18 2.36249 12.4658 1.91333 12.0516C1.46416 11.6374 1.79082 9.78833 2.40915 9.16416L9.33332 2.24C9.65305 1.9355 10.0792 1.76806 10.5206 1.77344C10.9621 1.77883 11.384 1.9566 11.6962 2.2688C12.0084 2.581 12.1862 3.00289 12.1915 3.44436C12.197 3.88585 12.0295 4.31193 11.725 4.63165H11.7542Z"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.25 12.25H7"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default EditIcon
