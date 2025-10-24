import React from 'react'
// import { useSelector } from "react-redux";
// import { RootState } from "../../../store";

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const LightModeIcon: React.FC<IconProps> = () => {
    // const { currentTheme } = useSelector((state: RootState) => state.theme);
    // const themeColor = currentTheme === "light-theme" ? "#2E2D2D" : "#D2D1D1";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
        >
            <rect width="26" height="26" rx="13" fill="white" />
            <g clipPath="url(#clip0_292_34)">
                <path
                    d="M12.9997 17.1667C15.3009 17.1667 17.1663 15.3012 17.1663 13C17.1663 10.6988 15.3009 8.83331 12.9997 8.83331C10.6985 8.83331 8.83301 10.6988 8.83301 13C8.83301 15.3012 10.6985 17.1667 12.9997 17.1667Z"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                />
                <path
                    d="M13 4.66669V6.33335"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
                <path
                    d="M13 19.6667V21.3334"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
                <path
                    d="M6.33366 13H4.66699"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
                <path
                    d="M21.3337 13H19.667"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
                <path
                    d="M19.4816 6.51886L17.6299 8.21184"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
                <path
                    d="M6.51855 6.51886L8.37023 8.21184"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
                <path
                    d="M8.37041 17.6298L6.51855 19.4816"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
                <path
                    d="M19.4816 19.4811L17.6299 17.6293"
                    stroke="#2E2D2D"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_292_34">
                    <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(3 3)"
                    />
                </clipPath>
            </defs>
        </svg>
    )
}

export default LightModeIcon
