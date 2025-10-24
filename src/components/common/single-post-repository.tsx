// import { useTranslation } from "react-i18next";

import { useSelector } from 'react-redux'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
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

interface SinglePostRepositoryProps {
    title?: string
    mainClassName?: string
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
}) => {
    //   const { t } = useTranslation();
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const popupOptionTextColor =
        currentTheme === 'light-theme' ? '#000000' : '#FFFFFF'
    const popupBgColor = currentTheme === 'light-theme' ? '#FFFFFF' : '#2C2C2C'
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
            <div className="flex items-center gap-1">
                <div className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]">
                    <DeleteIcon />
                </div>
                <div
                    className={cn(
                        'rounded-[4px] p-[2px] hover:bg-[var(--bg-hover-color)]',
                        bookmark &&
                            'bg-[var(--bg-dark-to-white-color)] hover:bg-[var(--bg-dark-to-white-color)]'
                    )}
                    onClick={toggleBookmark}
                >
                    <BookmarkSecondIcon selectColor={bookmark} />
                </div>

                <Popover>
                    <PopoverTrigger>
                        <div className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]">
                            <ThreeDotIcon />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent
                        className="flex w-[165px] flex-col gap-2 border-0 px-3 py-2 shadow-[1px_3px_12px_0px_rgba(0,0,0,0.25)]"
                        sideOffset={15}
                        style={{
                            backgroundColor: popupBgColor,
                        }}
                    >
                        {actionMenu.map((item, menuIndex) => (
                            <div
                                key={menuIndex}
                                className="menu-item flex cursor-pointer items-center gap-2 duration-300 active:scale-90"
                            >
                                {item.icon}
                                <span
                                    className="text-[12px]"
                                    style={{
                                        color: popupOptionTextColor,
                                    }}
                                >
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default SinglePostRepository
