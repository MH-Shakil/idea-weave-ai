import React from 'react'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const LightModeIcon: React.FC<IconProps> = () => {
    return <span className="material-symbols-outlined">light_mode</span>
}

export default LightModeIcon
