import React from 'react'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const DarkModeIcon: React.FC<IconProps> = () => {
    return <span className="material-symbols-outlined">dark_mode</span>
}

export default DarkModeIcon
