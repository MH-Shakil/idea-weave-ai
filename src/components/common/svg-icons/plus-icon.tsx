import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const PlusIcon: React.FC<IconProps> = () => {
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
                d="M2.3335 7.00001H11.6668M7.00016 2.33334V11.6667"
                stroke={themeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default PlusIcon
