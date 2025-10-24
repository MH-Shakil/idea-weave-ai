import { useState } from 'react'
import { closeApiKey } from '../../../reducers/apiKeyReducer'
import { closeLicenseKey } from '../../../reducers/lisenceKeyReducer'
import CloseIcon from '../svg-icons/close-icon'
import { useDispatch } from 'react-redux'
import { cn } from '../../../lib/utils'
import IdeaWaveAi from './think-box-ai'
import { closeUserProfile } from '../../../reducers/userProfileReducer'
import { closeSettings } from '../../../reducers/settingsReducer'

interface UserProfileProps {
    title?: string
    setUserProfileOpen?: (value: boolean) => void
}

const UserProfile: React.FC<UserProfileProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUserProfileOpen,
}) => {
    const tabs = [
        {
            title: 'IdeaWaveAI',
            content: <IdeaWaveAi />,
        },
        {
            title: 'Work Account',
            content: <div className="p-10">Work Account</div>,
        },
    ]
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(0)

    const changeTab = (index: number) => {
        setActiveTab(index)
    }
    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <CloseIcon
                className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                onClick={() => {
                    setUserProfileOpen && setUserProfileOpen(false)
                    dispatch(closeLicenseKey())
                    dispatch(closeApiKey())
                    dispatch(closeUserProfile())
                    dispatch(closeSettings())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                User Profile
            </h2>
            <div className="grid h-[calc(100%-50px)] grid-cols-12">
                <div className="col-span-3 mt-2 border-r border-[var(--bg-border-color)]">
                    <div className={cn('flex flex-col gap-1')}>
                        {tabs.length > 0 &&
                            tabs.map((tab: any, index: number) => (
                                <button
                                    key={tab?.key || index}
                                    className={cn(
                                        'h-[40px] whitespace-nowrap text-left text-sm font-semibold sm:px-5 sm:text-base'
                                    )}
                                    onClick={() => changeTab(index)}
                                >
                                    <div
                                        className={cn(
                                            'h-[40px] rounded-lg p-2',
                                            index === activeTab &&
                                                'bg-[var(--bg-secondary-color)] transition-all duration-500'
                                        )}
                                    >
                                        <p className="text-[var(--text-color-dark)]">
                                            {tab.title}
                                        </p>
                                    </div>
                                </button>
                            ))}
                    </div>
                </div>
                <div className="col-span-9 overflow-y-auto">
                    <div className={`tab-content pt-[0px]`}>
                        {tabs[activeTab]?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
