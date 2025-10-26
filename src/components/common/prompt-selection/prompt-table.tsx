import { Button } from '../../ui/button'
import EditIconSecond from '../svg-icons/edit-icon-second'
import DeleteIcon from '../svg-icons/delete-icon'
import { useDispatch } from 'react-redux'
import { openEditPrompt } from '../../../reducers/editPromtsReducer'
import { closeApplyingSettings } from '../../../reducers/applySettingsReducer'
import { closePrompt } from '../../../reducers/promptsReducer'
import { closeLicenseKey } from '../../../reducers/lisenceKeyReducer'
import { closeApiKey } from '../../../reducers/apiKeyReducer'
import { closeSettings } from '../../../reducers/settingsReducer'
import { closeUserProfile } from '../../../reducers/userProfileReducer'
import { closeAgentSelection } from '../../../reducers/agentSelectionReducer'
import { closeCreatePrompt } from '../../../reducers/createPromptsReducer'
import { closeOutputSettings } from '../../../reducers/outputSettingsReudcer'

interface PromptTableProps {
    prompts?: any
    addPromptBtn?: boolean
}

const PromptTable: React.FC<PromptTableProps> = ({
    prompts,
    addPromptBtn = false,
}) => {
    const dispatch = useDispatch()
    return (
        <div className="font-montserrat">
            {/* Header */}
            <div className="grid grid-cols-[3fr_2fr_3fr] items-center gap-4 rounded-lg border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] px-4 py-3 text-[13px] font-semibold text-[var(--text-color-dark)]">
                <div>Prompt</div>
                <div>Last used</div>
                <div className="text-right">Action</div>
            </div>

            {/* Rows */}
            <div className="mt-2 flex max-h-[440px] flex-col gap-3 overflow-y-auto pr-1">
                {prompts.map((prompt: any, index: number) => (
                    <div
                        key={index}
                        className="grid grid-cols-[3fr_2fr_3fr] items-center gap-4 rounded-lg border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] px-4 py-4 transition-colors hover:bg-[var(--bg-hover-color)]"
                    >
                        {/* Prompt title/desc */}
                        <div className="min-w-0">
                            <h5 className="truncate text-[14px] font-medium text-[var(--text-color-dark)]">
                                {prompt.title}
                            </h5>
                            <p className="mt-1 line-clamp-2 text-[12px] text-[var(--text-color-dark)]">
                                {prompt.description}
                            </p>
                        </div>

                        {/* Last used */}
                        <div className="text-[13px] text-[var(--text-color-dark)]">
                            <div>{prompt.lastUsedDate}</div>
                            <div>{prompt.lastUsedTime}</div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-4">
                            <div className="flex items-center gap-4">
                                <EditIconSecond
                                    className="h-[26px] w-[26px] cursor-pointer duration-300 active:scale-90"
                                    onClick={() => {
                                        dispatch(openEditPrompt())
                                        dispatch(closeApplyingSettings())
                                        dispatch(closeAgentSelection())
                                        dispatch(closeOutputSettings())
                                        dispatch(closePrompt())
                                        dispatch(closeLicenseKey())
                                        dispatch(closeApiKey())
                                        dispatch(closeSettings())
                                        dispatch(closeUserProfile())
                                        dispatch(closeCreatePrompt())
                                    }}
                                />
                                <DeleteIcon
                                    colorRed
                                    className="h-[26px] w-[26px] cursor-pointer duration-300 active:scale-90"
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                {addPromptBtn && (
                                    <Button
                                        variant="outline"
                                        className="font-bold"
                                    >
                                        Add Prompt
                                    </Button>
                                )}
                                <Button variant="primary" className="font-bold">
                                    Use Prompt
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PromptTable
