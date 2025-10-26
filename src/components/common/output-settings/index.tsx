import { useTranslation } from 'react-i18next'
import PrimarySelect from '../primary-select'
import CloseIcon from '../svg-icons/close-icon'
import InfoIcon from '../svg-icons/info-icon'
import { Checkbox } from '../../ui/checkbox'
import { Button } from '../../ui/button'
import { useDispatch } from 'react-redux'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../../ui/tooltip'
import { closeOutputSettings } from '../../../reducers/outputSettingsReudcer'

interface OutputSettingsProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

const OutputSettings: React.FC<OutputSettingsProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedActionButton,
}) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const languageOptions = [
        { value: 'en_us', label: t('English (US)') as unknown as string },
        { value: 'en_gb', label: t('English (UK)') as unknown as string },
        { value: 'auto', label: t('Auto-detect') as unknown as string },
    ]

    const toneOptions = [
        { value: 'neutral', label: t('Neutral') as unknown as string },
        { value: 'friendly', label: t('Friendly') as unknown as string },
        {
            value: 'professional',
            label: t('Professional') as unknown as string,
        },
    ]

    const styleOptions = [
        { value: 'concise', label: t('Concise') as unknown as string },
        { value: 'detailed', label: t('Detailed') as unknown as string },
        {
            value: 'structured',
            label: t('Structured (Bulleted)') as unknown as string,
        },
    ]

    const formatOptions = [
        { value: 'paragraph', label: t('Paragraph') as unknown as string },
        { value: 'markdown', label: t('Markdown') as unknown as string },
        { value: 'text', label: t('Plain Text') as unknown as string },
    ]

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="relative overflow-y-auto rounded-xl border border-[var(--bg-border-color)] bg-gradient-to-br from-[var(--sidebar-bg-color)] to-[var(--bg-ai-bot-text-color)] px-10 py-6 font-montserrat shadow-sm transition-all duration-500">
                <CloseIcon
                    className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                    onClick={() => {
                        dispatch(closeOutputSettings())
                    }}
                />

                <div className="text-center">
                    <h2 className="font-extrabold bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] bg-clip-text text-[24px] text-transparent">
                        Output Settings
                    </h2>
                    <p className="mt-1 text-sm text-[var(--text-color-secondary)]">
                        Configure language, tone, style, and response format
                    </p>
                </div>

                <div className="mx-auto mt-8 flex w-[430px] flex-col gap-6">
                    <div className="flex w-full items-start gap-4">
                        <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-base)]">
                            <span>Locale</span>
                            <span>:</span>
                        </label>
                        <div className="w-full">
                            <div className="flex flex-shrink-0 items-center gap-2">
                                <PrimarySelect
                                    mainClassName="h-[35px] w-[200px] border border-[var(--bg-border-color)] px-2 py-1"
                                    options={languageOptions}
                                />
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span>
                                                <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                            <p>
                                                Choose the output locale or use
                                                auto-detect.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-start gap-4">
                        <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-base)]">
                            <span>Voice</span>
                            <span>:</span>
                        </label>
                        <div className="w-full">
                            <div className="flex flex-shrink-0 items-center gap-2">
                                <PrimarySelect
                                    mainClassName="h-[35px] w-[200px] border border-[var(--bg-border-color)] px-2 py-1"
                                    options={toneOptions}
                                />
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span>
                                                <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                            <p>
                                                Select the voice/tone for
                                                responses.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-start gap-4">
                        <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-base)]">
                            <span>Writing Style</span>
                            <span>:</span>
                        </label>
                        <div className="w-full">
                            <div className="flex flex-shrink-0 items-center gap-2">
                                <PrimarySelect
                                    mainClassName="h-[35px] w-[200px] border border-[var(--bg-border-color)] px-2 py-1"
                                    options={styleOptions}
                                />
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span>
                                                <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                            <p>
                                                Control structure and level of
                                                detail.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-start gap-4">
                        <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-base)]">
                            <span>Output Format</span>
                            <span>:</span>
                        </label>
                        <div className="w-full">
                            <div className="flex flex-shrink-0 items-center gap-2">
                                <PrimarySelect
                                    mainClassName="h-[35px] w-[200px] border border-[var(--bg-border-color)] px-2 py-1"
                                    options={formatOptions}
                                />
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <span>
                                                <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                            <p>
                                                Pick how the response should be
                                                formatted.
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center gap-[10px]">
                        <Checkbox />
                        <p className="text-[var(--text-color-base)]">
                            Set all as Default
                        </p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                    <p>
                                        Make these values the defaults for new
                                        conversations.
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    <div className="flex items-center gap-[10px]">
                        <Checkbox />
                        <p className="whitespace-nowrap text-[var(--text-color-base)]">
                            Apply settings for all conversations
                        </p>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                    <p>
                                        Override existing conversations with
                                        these output settings.
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    <div className="mt-7 flex justify-end gap-4">
                        <Button variant="primary" className="w-[100px]">
                            Save
                        </Button>
                        <Button
                            variant="outline"
                            className="w-[100px] font-bold text-[var(--text-color-base)]"
                            onClick={() =>
                                setSelectedActionButton &&
                                setSelectedActionButton('')
                            }
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutputSettings
