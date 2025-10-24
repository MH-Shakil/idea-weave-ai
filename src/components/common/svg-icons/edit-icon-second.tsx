import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

interface IconProps {
    width?: number
    height?: number
    color?: string
    onClick?: () => void
}

const EditIconSecond: React.FC<IconProps> = ({ onClick }) => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const themeColor = currentTheme === 'light-theme' ? '#000000' : '#ffffff'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            className="cursor-pointer duration-300 active:scale-90"
            onClick={onClick}
        >
            <path
                d="M27.0999 8L15.1749 19.9249C13.9874 21.1124 10.4623 21.6624 9.67484 20.8749C8.88734 20.0874 9.42484 16.5624 10.6123 15.3749L22.5499 3.43746C22.8443 3.11629 23.2006 2.85811 23.5976 2.67849C23.9945 2.49886 24.4238 2.40149 24.8594 2.39231C25.2949 2.38315 25.7279 2.46233 26.132 2.62509C26.5361 2.78785 26.9031 3.03085 27.2108 3.33935C27.5184 3.64785 27.7604 4.01548 27.922 4.42005C28.0836 4.82464 28.1618 5.25776 28.1514 5.69333C28.141 6.12889 28.0424 6.55788 27.8618 6.95431C27.681 7.35075 27.4219 7.70649 27.0999 8Z"
                stroke={themeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.25 5H8C6.67391 5 5.40222 5.52677 4.46454 6.46446C3.52686 7.40215 3 8.67391 3 10V22.5C3 23.8261 3.52686 25.0979 4.46454 26.0355C5.40222 26.9732 6.67391 27.5 8 27.5H21.75C24.5125 27.5 25.5 25.25 25.5 22.5V16.25"
                stroke={themeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default EditIconSecond
