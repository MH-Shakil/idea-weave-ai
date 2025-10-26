// import { useTranslation } from "react-i18next";

import { useSelector } from 'react-redux'
import BookmarkSecondIcon from './svg-icons/bookmark-second-icon'
import DeleteIcon from './svg-icons/delete-icon'
import EmoFaceIcon from './svg-icons/emo-face-icon'
import ThreeDotIcon from './svg-icons/three-dot-icon'
import { RootState } from '../../store'
import PinIcon from './svg-icons/pin-icon'
import RowIcon from './svg-icons/row-icon'
import PlayIcon from './svg-icons/play-icon'
import ForkIcon from './svg-icons/fork-icon'
import { useState } from 'react'
import { cn } from '../../lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface SinglePostRepositoryProps {
    title?: string
    mainClassName?: string
    onDelete?: () => void
}
const actionMenu = [
    {
        name: 'Pin',
        icon: <PinIcon />,
    },
    {
        name: 'Delete',
        icon: <DeleteIcon />,
    },
    {
        name: 'Show raw',
        icon: <RowIcon />,
    },
    {
        name: 'Play',
        icon: <PlayIcon />,
    },
    {
        name: 'Fork chat from here',
        icon: <ForkIcon />,
    },
]

const SinglePostRepository: React.FC<SinglePostRepositoryProps> = ({
    title = 'Prepare Blog post',
    mainClassName = 'flex justify-between items-center font-montserrat cursor-pointer hover:bg-[var(--bg-hover-color)] p-1 rounded',
    onDelete,
}) => {
    //   const { t } = useTranslation();
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const [bookmark, setBookmark] = useState(false)
    const toggleBookmark = () => {
        setBookmark(!bookmark)
    }

    return (
        <div className={mainClassName}>
            <div className="flex items-center gap-2">
                <EmoFaceIcon />
                <div className="transition-all duration-500">
                    <h5 className="rounde text-[12px] font-medium leading-[14px] text-[var(--text-color-base)] transition-all duration-500">
                        {title}
                    </h5>
                    <p className="text-[10px] font-normal leading-[12px] text-[var(--text-color-dark-second)] transition-all duration-500">
                        Please write article in
                    </p>
                </div>
            </div>
            <div className="group flex items-center gap-1">
                {/* Three-dot menu appears on hover */}
                <DropdownMenu>
                    <DropdownMenuTrigger className="opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]">
                            <ThreeDotIcon />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[var(--bg-primary-color)] text-[var(--text-color-base)]">
                        {actionMenu.map((item, menuIndex) => (
                            <DropdownMenuItem
                                key={menuIndex}
                                className="cursor-pointer"
                            >
                                {item.icon}
                                <span className="ml-2 text-[12px]">
                                    {item.name}
                                </span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default SinglePostRepository
