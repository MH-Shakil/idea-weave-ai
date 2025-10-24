// import { useTranslation } from "react-i18next";

import CloseIcon from '../svg-icons/close-icon'
import GlobalTabs from '../global-tabs'
import PromptIcon from '../svg-icons/prompt-icon'
import LibraryIcon from '../svg-icons/library-icon'
import MyPromptTabContent from './my-prompt-tab-content'
import { closeLicenseKey } from '../../../reducers/lisenceKeyReducer'
import { useDispatch } from 'react-redux'
import { closeApiKey } from '../../../reducers/apiKeyReducer'
import { closeSettings } from '../../../reducers/settingsReducer'
import { closeUserProfile } from '../../../reducers/userProfileReducer'
import { closePrompt } from '../../../reducers/promptsReducer'
import { closeApplyingSettings } from '../../../reducers/applySettingsReducer'
import { closeAgentSelection } from '../../../reducers/agentSelectionReducer'
import { closeOutputSettings } from '../../../reducers/outputSettingsReudcer'
import { closeCreatePrompt } from '../../../reducers/createPromptsReducer'
import { closeEditPrompt } from '../../../reducers/editPromtsReducer'

interface PromptSelectionProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

interface Prompt {
    title: string
    description: string
    categories: string[]
    lastUsedDate: string
    lastUsedTime: string
}

const prompts: Prompt[] = [
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categories: ['Design', 'Logo'],
        lastUsedDate: '12/02/2014',
        lastUsedTime: '12.20.00',
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categories: ['Design', 'Logo'],
        lastUsedDate: '12/02/2014',
        lastUsedTime: '12.20.00',
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categories: ['Design', 'Logo'],
        lastUsedDate: '12/02/2014',
        lastUsedTime: '12.20.00',
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categories: ['Design', 'Logo'],
        lastUsedDate: '12/02/2014',
        lastUsedTime: '12.20.00',
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categories: ['Design', 'Logo'],
        lastUsedDate: '12/02/2014',
        lastUsedTime: '12.20.00',
    },
]
const libraries: any = [
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categoryTag: ['Design', 'Logo'],
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categoryTag: ['Design', 'Logo'],
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categoryTag: ['Design', 'Logo'],
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categoryTag: ['Design', 'Logo'],
    },
    {
        title: 'Logo creation prompt',
        description: 'Creating new logo with text and....',
        categoryTag: ['Design', 'Logo'],
    },
]

const PromptSelection: React.FC<PromptSelectionProps> = () => {
    const dispatch = useDispatch()
    const PrompsTabs = [
        {
            title: 'My Prompts',
            content: <MyPromptTabContent prompts={prompts} />,
            icon: <PromptIcon />,
        },
        {
            title: 'Library',
            content: (
                <MyPromptTabContent
                    library
                    libraries={libraries}
                    addPromptBtn
                />
            ),
            icon: <LibraryIcon />,
        },
    ]
    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <CloseIcon
                className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                onClick={() => {
                    dispatch(closePrompt())
                    dispatch(closeApplyingSettings())
                    dispatch(closeAgentSelection())
                    dispatch(closeOutputSettings())
                    dispatch(closeLicenseKey())
                    dispatch(closeApiKey())
                    dispatch(closeSettings())
                    dispatch(closeUserProfile())
                    dispatch(closeCreatePrompt())
                    dispatch(closeEditPrompt())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                Select your Prompts
            </h2>

            <GlobalTabs length={prompts.length} tabs={PrompsTabs} />
        </div>
    )
}

export default PromptSelection
