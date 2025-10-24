import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    selectColor?: boolean
}

const ArrowRightIcon: React.FC<IconProps> = ({ selectColor = false }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor =
        currentTheme === 'light-theme'
            ? selectColor
                ? '#FFFFFF'
                : '#2E2D2D'
            : selectColor
              ? '#2E2D2D'
              : '#D2D1D1'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
        >
            <g opacity="0.9" clipPath="url(#clip0_121_184)">
                <path
                    d="M4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20C8.09 20 4.5 16.41 4.5 12ZM2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2C6.98 2 2.5 6.48 2.5 12ZM12.5 11H8.5V13H12.5V16L16.5 12L12.5 8V11Z"
                    fill={themeColor}
                />
            </g>
            <defs>
                <clipPath id="clip0_121_184">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default ArrowRightIcon
