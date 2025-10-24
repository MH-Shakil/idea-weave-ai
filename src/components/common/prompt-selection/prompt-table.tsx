import { Button } from '../../ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../ui/table'
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
        <Table className="font-montserrat">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[30%] text-[var(--text-color-dark)]">
                        Prompt
                    </TableHead>
                    <TableHead className="w-[30%] text-[var(--text-color-dark)]">
                        Last used
                    </TableHead>
                    <TableHead className="w-[40%] text-[var(--text-color-dark)]">
                        Action
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {prompts.map((prompt: any, index: number) => (
                    <TableRow key={index}>
                        <TableCell>
                            <div className="flex flex-col gap-1 font-montserrat">
                                <h5 className="text-[14px] font-medium text-[var(--text-color-dark)]">
                                    {prompt.title}
                                </h5>
                                <p className="text-[12px] text-[var(--text-color-dark)]">
                                    {prompt.description}
                                </p>
                                <div className="flex items-center gap-2">
                                    {prompt.categories.map(
                                        (category: any, idx: number) => (
                                            <div
                                                key={idx}
                                                className="border border-[var(--text-color-dark)] bg-[var(--bg-secondary-color)] p-1 text-[12px] leading-[15px] text-[var(--text-color-dark)]"
                                            >
                                                {category}
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <h5 className="text-[14px] text-[var(--text-color-dark)]">
                                {prompt.lastUsedDate}
                            </h5>
                            <h5 className="text-[14px] text-[var(--text-color-dark)]">
                                {prompt.lastUsedTime}
                            </h5>
                        </TableCell>
                        <TableCell>
                            <div className="flex justify-between">
                                <div className="flex gap-6">
                                    <EditIconSecond
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
                                        className="h-[30px] w-[30px] cursor-pointer duration-300 active:scale-90"
                                    />
                                </div>
                                <div className="flex gap-8">
                                    {addPromptBtn && (
                                        <Button
                                            variant="outline"
                                            className="font-bold"
                                        >
                                            add Prompt
                                        </Button>
                                    )}
                                    <Button
                                        variant="primary"
                                        className="font-bold"
                                    >
                                        Use Prompt
                                    </Button>
                                </div>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default PromptTable
