import React from 'react'

interface IconProps {
    width?: number
    height?: number
    color?: string
}

const LicenseIcon: React.FC<IconProps> = () => {
    return <span className="material-symbols-outlined">store</span>
}

export default LicenseIcon
