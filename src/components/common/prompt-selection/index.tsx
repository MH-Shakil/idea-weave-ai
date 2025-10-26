// import { useTranslation } from "react-i18next";

import CloseIcon from '../svg-icons/close-icon'
// tabs removed; showing history only
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
    lastUsedDate: string
    lastUsedTime: string
}

const prompts: Prompt[] = [
    {
        title: 'Write a blog post outline',
        description:
            'Create a detailed outline about the benefits of TypeScript for React apps.',
        lastUsedDate: '09/15/2025',
        lastUsedTime: '10.12.00',
    },
    {
        title: 'Product description',
        description:
            'Write a concise, persuasive description for a wireless ergonomic keyboard.',

        lastUsedDate: '09/14/2025',
        lastUsedTime: '17.45.00',
    },
    {
        title: 'Summarize a bug report',
        description:
            'Summarize key steps to reproduce and impact in 3 bullet points.',

        lastUsedDate: '09/12/2025',
        lastUsedTime: '09.05.00',
    },
    {
        title: 'SQL query from request',
        description:
            'Generate a SQL query to list top 10 customers by total spend last quarter.',

        lastUsedDate: '09/11/2025',
        lastUsedTime: '14.33.00',
    },
    {
        title: 'Marketing email draft',
        description:
            'Draft a launch email announcing a new AI-powered feature with a strong CTA.',

        lastUsedDate: '09/10/2025',
        lastUsedTime: '11.20.00',
    },
    {
        title: 'UX microcopy',
        description:
            'Suggest friendly error messages for a failed payment flow.',

        lastUsedDate: '09/08/2025',
        lastUsedTime: '16.10.00',
    },
    {
        title: 'Refactor suggestion',
        description:
            'Propose improvements for a React component to reduce unnecessary re-renders.',

        lastUsedDate: '09/07/2025',
        lastUsedTime: '13.52.00',
    },
    {
        title: 'Translate to French',
        description:
            'Translate the provided paragraph to French, preserving tone.',

        lastUsedDate: '09/06/2025',
        lastUsedTime: '08.40.00',
    },
]

const PromptSelection: React.FC<PromptSelectionProps> = () => {
    const dispatch = useDispatch()
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="relative w-[80%] overflow-y-auto rounded-xl border border-[var(--bg-border-color)] bg-gradient-to-br from-[var(--sidebar-bg-color)] to-[var(--bg-ai-bot-text-color)] px-10 py-6 font-montserrat shadow-sm transition-all duration-500">
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
                <div className="text-center">
                    <h2 className="font-extrabold bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] bg-clip-text text-[24px] text-transparent">
                        Prompt History
                    </h2>
                    <p className="mt-1 text-sm text-[var(--text-color-secondary)]">
                        Recently used prompts. Select one to use.
                    </p>
                </div>

                <div className="mt-6">
                    <MyPromptTabContent prompts={prompts} />
                </div>
            </div>
        </div>
    )
}

export default PromptSelection
