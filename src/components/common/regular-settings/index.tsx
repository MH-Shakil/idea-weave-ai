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

const RegularSettings: React.FC<RegularSettingsProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedActionButton,
}) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const languageOption = [
        {
            value: 'Last n Message',
            label: `${t('Last n Message')}`,
        },
        {
            value: 'Last n Message',
            label: `${t('Last n Message')}`,
        },
    ]

    const [count, setCount] = useState(5) // Initial value is 5, you can change it

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count > 0 ? count - 1 : 0) // Prevent negative values
    }

    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <CloseIcon
                className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                onClick={() => {
                    dispatch(closeApplyingSettings())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                Apply Settings
            </h2>

            <div className="mx-auto mt-8 flex w-[430px] flex-col gap-5">
                <div className="flex w-full items-start gap-4">
                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-dark)]">
                        <span>Context Limit</span>
                        <span>:</span>
                    </label>
                    <div className="w-full">
                        <div className="flex flex-shrink-0 items-center gap-2">
                            <PrimarySelect
                                mainClassName="w-[175px] border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2 "
                                options={languageOption}
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
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="mt-5 flex items-center gap-6">
                            <MinusIconCircle onClick={handleDecrement} />
                            <span className="text-[var(--text-color-dark)]">
                                {count}
                            </span>
                            <PlusIconCircle onClick={handleIncrement} />
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-dark)]">
                        <span>Temperature</span>
                        <span>:</span>
                    </label>
                    <div className="w-full">
                        <div className="flex w-[100%] flex-shrink-0 items-center gap-2">
                            <Slider defaultValue={[33]} max={100} step={1} />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span>
                                            <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-dark)]">
                        <span>Top P</span>
                        <span>:</span>
                    </label>
                    <div className="w-full">
                        <div className="flex w-[100%] flex-shrink-0 items-center gap-2">
                            <Slider defaultValue={[33]} max={100} step={1} />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span>
                                            <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-dark)]">
                        <span>Top K</span>
                        <span>:</span>
                    </label>
                    <div className="w-full">
                        <div className="flex w-[100%] flex-shrink-0 items-center gap-2">
                            <Slider defaultValue={[33]} max={100} step={1} />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span>
                                            <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-dark)]">
                        <span>Presence Penalty</span>
                        <span>:</span>
                    </label>
                    <div className="w-full">
                        <div className="flex w-[100%] flex-shrink-0 items-center gap-2">
                            <Slider defaultValue={[33]} max={100} step={1} />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span>
                                            <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-dark)]">
                        <span>Frequency Penalty</span>
                        <span>:</span>
                    </label>
                    <div className="w-full">
                        <div className="flex w-[100%] flex-shrink-0 items-center gap-2">
                            <Slider defaultValue={[33]} max={100} step={1} />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span>
                                            <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center gap-4">
                    <label className="flex w-[50%] justify-between text-[16px] font-medium text-[var(--text-color-dark)]">
                        <span>Max Tokens</span>
                        <span>:</span>
                    </label>
                    <div className="w-full">
                        <div className="flex w-[100%] flex-shrink-0 items-center gap-2">
                            <Slider defaultValue={[33]} max={100} step={1} />
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span>
                                            <InfoIcon className="cursor-pointer duration-300 active:scale-90" />
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                </div>

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
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex items-center gap-[10px]">
                    <Checkbox />
                    <p className="whitespace-nowrap text-[var(--text-color-base)]">
                        Apply setting for all Conversations
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
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer
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
                        className="w-[100px] font-bold"
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
    )
}

export default RegularSettings
