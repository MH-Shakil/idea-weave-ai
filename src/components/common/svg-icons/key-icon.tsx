import React from 'react'
// import { useSelector } from "react-redux";
// import { RootState } from "../../../store";

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const KeyIcon: React.FC<IconProps> = () => {
    // const { currentTheme } = useSelector((state: RootState) => state.theme);
    // const themeColor = currentTheme === "light-theme" ? "#2E2D2D" : "#D2D1D1";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
        >
            <path
                d="M16.6667 11.3333H16.6756M16.6667 16.6667C19.6122 16.6667 22 14.2788 22 11.3333C22 8.38781 19.6122 6 16.6667 6C13.7212 6 11.3333 8.38781 11.3333 11.3333C11.3333 11.5766 11.3496 11.8161 11.3812 12.0507C11.433 12.4366 11.459 12.6296 11.4415 12.7516C11.4233 12.8788 11.4002 12.9473 11.3375 13.0595C11.2773 13.1671 11.1713 13.2732 10.9592 13.4852L6.41656 18.0279C6.26283 18.1816 6.18596 18.2585 6.13099 18.3482C6.08225 18.4277 6.04634 18.5144 6.02456 18.6052C6 18.7075 6 18.8162 6 19.0335V20.5778C6 21.0756 6 21.3245 6.09688 21.5147C6.18211 21.682 6.31809 21.8179 6.48534 21.9031C6.67548 22 6.9244 22 7.42222 22H8.96645C9.18387 22 9.29257 22 9.39487 21.9755C9.48557 21.9537 9.57228 21.9178 9.6518 21.869C9.74151 21.814 9.81838 21.7372 9.97212 21.5835L14.5148 17.0408C14.7268 16.8287 14.8329 16.7227 14.9405 16.6625C15.0527 16.5998 15.1212 16.5766 15.2484 16.5585C15.3704 16.541 15.5634 16.5669 15.9493 16.6188C16.1839 16.6504 16.4234 16.6667 16.6667 16.6667Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default KeyIcon
