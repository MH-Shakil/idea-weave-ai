import { useState } from 'react'
import CloseIcon from '../svg-icons/close-icon'
import { useDispatch } from 'react-redux'
import InfoIcon from '../svg-icons/info-icon'
import PrimarySelect from '../primary-select'
import { useTranslation } from 'react-i18next'
import MinusIconCircle from '../svg-icons/minus-icon-circle'
import PlusIconCircle from '../svg-icons/plus-icon-circle'
import { Slider } from '../../ui/slider'
import { Checkbox } from '../../ui/checkbox'
import { Button } from '../../ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../../ui/tooltip'

import { closeApplyingSettings } from '../../../reducers/applySettingsReducer'

interface RegularSettingsProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

const tabNames = ['General', 'Generation', 'Safety', 'Advanced'] as const

const RegularSettings: React.FC<RegularSettingsProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedActionButton,
}) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const contextOptions = [
        { value: '3', label: t('Last 3 messages') as unknown as string },
        { value: '8', label: t('Last 8 messages') as unknown as string },
        { value: 'all', label: t('Entire conversation') as unknown as string },
    ]

    const styleOptions = [
        { value: 'natural', label: t('Natural') as unknown as string },
        { value: 'formal', label: t('Formal') as unknown as string },
        { value: 'concise', label: t('Concise') as unknown as string },
    ]

    const [count, setCount] = useState(5)
    const [activeMenu, setActiveMenu] = useState<
        'General' | 'Generation' | 'Safety' | 'Advanced'
    >('General')

    const getDisplayLabel = (rawLabel: string): string => {
        switch (rawLabel) {
            case 'Temperature':
                return 'Creativity'
            case 'Top P':
                return 'Sampling (Top P)'
            case 'Max Tokens':
                return 'Token Limit'
            case 'Response Length':
                return 'Reply Length'
            default:
                return rawLabel
        }
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count > 0 ? count - 1 : 0)
    }

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="relative overflow-y-auto rounded-xl border border-[var(--bg-border-color)] bg-gradient-to-br from-[var(--sidebar-bg-color)] to-[var(--bg-ai-bot-text-color)] px-10 py-6 font-montserrat shadow-sm transition-all duration-500">
                <CloseIcon
                    className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                    onClick={() => {
                        dispatch(closeApplyingSettings())
                    }}
                />
                <div className="text-center">
                    <h2 className="font-extrabold bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] bg-clip-text text-[24px] text-transparent">
                        Settings
                    </h2>
                    <p className="mt-1 text-sm text-[var(--text-color-secondary)]">
                        Control tone, context, and output length for new chats
                    </p>
                </div>

                <div className="mt-5 flex justify-center gap-2">
                    {tabNames.map((name) => (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setActiveMenu(name)}
                            className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                                activeMenu === name
                                    ? 'bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] text-white'
                                    : 'border border-[var(--bg-border-color)] text-[var(--text-color-base)] hover:bg-[var(--bg-primary-color)]'
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                <div className="mx-auto mt-8 flex w-[430px] flex-col gap-6">
                    {activeMenu === 'General' && (
                        <>
                            <div className="flex w-full items-start gap-4">
                                <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-base)]">
                                    <span>Context Window</span>
                                    <span>:</span>
                                </label>
                                <div className="w-full">
                                    <div className="flex flex-shrink-0 items-center gap-2">
                                        <PrimarySelect
                                            mainClassName="h-[35px] w-[200px] border border-[var(--bg-border-color)] px-2 py-1"
                                            options={contextOptions}
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
                                                        Choose how many previous
                                                        messages are considered
                                                        while generating a
                                                        response.
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <div className="mt-5 flex items-center gap-6">
                                        <MinusIconCircle
                                            onClick={handleDecrement}
                                        />
                                        <span className="text-[var(--text-color-base)]">
                                            {count}
                                        </span>
                                        <PlusIconCircle
                                            onClick={handleIncrement}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full items-start gap-4">
                                <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-base)]">
                                    <span>Response Style</span>
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
                                                        Pick the default tone of
                                                        replies.
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeMenu === 'Generation' && (
                        <>
                            {[
                                'Temperature',
                                'Top P',
                                'Max Tokens',
                                'Response Length',
                            ].map((label, idx) => (
                                <div
                                    key={idx}
                                    className="flex w-full items-center gap-4"
                                >
                                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-base)]">
                                        <span>{getDisplayLabel(label)}</span>
                                        <span>:</span>
                                    </label>
                                    <div className="w-full">
                                        <div className="flex w-full flex-shrink-0 items-center gap-2">
                                            <Slider
                                                defaultValue={[33]}
                                                max={100}
                                                step={1}
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
                                                            Tune how imaginative
                                                            or conservative
                                                            responses should be.
                                                            Higher values can
                                                            increase variety but
                                                            reduce
                                                            predictability.
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {activeMenu === 'Safety' && (
                        <>
                            <div className="flex items-center gap-[10px]">
                                <Checkbox />
                                <p className="whitespace-nowrap text-[var(--text-color-base)]">
                                    Safe Mode (reduce sensitive content)
                                </p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <Checkbox />
                                <p className="whitespace-nowrap text-[var(--text-color-base)]">
                                    Filter profanity
                                </p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <Checkbox />
                                <p className="whitespace-nowrap text-[var(--text-color-base)]">
                                    Mask personal data (PII)
                                </p>
                            </div>
                        </>
                    )}

                    {activeMenu === 'Advanced' && (
                        <>
                            <div className="flex items-center gap-[10px]">
                                <Checkbox />
                                <p className="whitespace-nowrap text-[var(--text-color-base)]">
                                    Enable streaming responses
                                </p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <Checkbox />
                                <p className="whitespace-nowrap text-[var(--text-color-base)]">
                                    Show token usage estimates
                                </p>
                            </div>
                        </>
                    )}

                    <div className="flex items-center gap-[10px]">
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

                    <div className="mt-7 flex justify-end gap-3">
                        <Button variant="primary" className="w-[120px]">
                            Save
                        </Button>
                        <Button
                            variant="outline"
                            className="w-[120px] font-bold text-[var(--text-color-base)]"
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

export default RegularSettings
