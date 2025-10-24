import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const ContactIcon: React.FC<IconProps> = () => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#2E2D2D' : '#D2D1D1'
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
        >
            <path
                d="M3.5 17.1798V14.25V13.75H3H0.5V0.5H16.75V13.75H10.275H10.1537L10.0459 13.8056L3.5 17.1798ZM1 12.75V13.25H1.5H4V15.525V16.339L4.72605 15.971L10.0945 13.25H15.75H16.25V12.75V1.5V1H15.75H1.5H1V1.5V12.75Z"
                fill="#A1A1A1"
                stroke={themeColor}
            />
            <path
                d="M4.25 7.75V6.5H5.5V7.75H4.25Z"
                fill="#A1A1A1"
                stroke={themeColor}
            />
            <path
                d="M8 7.75V6.5H9.25V7.75H8Z"
                fill="#A1A1A1"
                stroke={themeColor}
            />
            <path
                d="M11.75 7.75V6.5H13V7.75H11.75Z"
                fill="#A1A1A1"
                stroke={themeColor}
            />
        </svg>
    )
}

export default ContactIcon
