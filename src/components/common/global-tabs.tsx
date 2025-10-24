import React, { ReactNode, useState } from 'react'
import { cn } from '../../lib/utils'

export interface IGlobalTabItem {
    key?: string
    title: string
    content: string | ReactNode
    icon?: ReactNode
}

interface IGlobalTabsProps {
    tabs: IGlobalTabItem[]
    wrapperClassNames?: string
    ptTabContent?: string
    length?: number
}

const GlobalTabs = (props: IGlobalTabsProps) => {
    const { tabs = [], wrapperClassNames, ptTabContent = '0px', length } = props

    const [activeTab, setActiveTab] = useState(0)

    const changeTab = (index: number) => {
        setActiveTab(index)
    }

    return (
        <div className={`${wrapperClassNames}`}>
            <div className={cn('mt-5 flex min-w-[400px] justify-center')}>
                {tabs.length > 0 &&
                    tabs.map((tab: IGlobalTabItem, index: number) => (
                        <button
                            key={tab?.key || index}
                            className={cn(
                                'whitespace-nowrap rounded-lg px-2 py-2.5 text-sm font-semibold sm:px-5 sm:text-base'
                            )}
                            onClick={() => changeTab(index)}
                        >
                            <div
                                className={cn(
                                    'flex border-b border-transparent pb-[2px]',
                                    index === activeTab &&
                                        'border-b border-[var(--text-color-base)]'
                                )}
                            >
                                {tab.icon && (
                                    <span className="mr-2">{tab.icon}</span>
                                )}
                                <p className="text-[var(--text-color-dark)]">
                                    {tab.title} ({length})
                                </p>
                            </div>
                        </button>
                    ))}
            </div>
            <div className={`tab-content pt-[${ptTabContent}]`}>
                {tabs[activeTab]?.content}
            </div>
        </div>
    )
}

export default GlobalTabs
