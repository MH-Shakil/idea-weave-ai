import { useState } from 'react'
import { cn } from '../../../lib/utils'
import CloseIcon from '../svg-icons/close-icon'
import { useDispatch } from 'react-redux'
import { closeLicenseKey } from '../../../reducers/lisenceKeyReducer'
import { closeApiKey } from '../../../reducers/apiKeyReducer'
import AppearanceTab from './appearance-tab'
import { closeSettings } from '../../../reducers/settingsReducer'
import { Button } from '../../ui/button'
import { closeUserProfile } from '../../../reducers/userProfileReducer'

interface SettingsProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

const Settings: React.FC<SettingsProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedActionButton,
}) => {
    const tabs = [
        {
            title: 'Appearance',
            content: (
                <AppearanceTab
                    setSelectedActionButton={setSelectedActionButton}
                />
            ),
        },
        {
            title: 'Keyboard Shortcut',
            content: <div className="p-10">Keyboard Shortcut</div>,
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
                    setSelectedActionButton && setSelectedActionButton('')
                    dispatch(closeLicenseKey())
                    dispatch(closeApiKey())
                    dispatch(closeSettings())
                    dispatch(closeUserProfile())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                Settings
            </h2>
            <div className="grid h-[calc(100%-150px)] grid-cols-12">
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
                <div className="col-span-9">
                    <div className={`tab-content pt-[0px]`}>
                        {tabs[activeTab]?.content}
                    </div>
                </div>
            </div>
            <div className="mt-7 flex justify-end gap-4">
                <Button variant="primary" className="w-[100px]">
                    Save
                </Button>
                <Button
                    variant="outline"
                    className="w-[100px] font-bold"
                    onClick={() => {
                        setSelectedActionButton && setSelectedActionButton('')
                        dispatch(closeLicenseKey())
                        dispatch(closeApiKey())
                        dispatch(closeSettings())
                    }}
                >
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default Settings
