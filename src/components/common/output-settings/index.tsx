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
    const languageOption = [
        {
            value: 'Language 1',
            label: `${t('Language 1')}`,
        },
        {
            value: 'Language 2',
            label: `${t('Language 2')}`,
        },
    ]
    const ToneOptions = [
        {
            value: 'Tone 1',
            label: `${t('Tone 1')}`,
        },
        {
            value: 'Tone 2',
            label: `${t('Tone 2')}`,
        },
    ]
    const StyleOptions = [
        {
            value: 'Style 1',
            label: `${t('Style 1')}`,
        },
        {
            value: 'Style 2',
            label: `${t('Style 2')}`,
        },
    ]
    const FormatOptions = [
        {
            value: 'Format 1',
            label: `${t('Format 1')}`,
        },
        {
            value: 'Format 2',
            label: `${t('Format 2')}`,
        },
    ]
    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <CloseIcon
                className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                onClick={() => {
                    dispatch(closeOutputSettings())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                Output Settings
            </h2>
            <div className="mx-auto mt-8 flex w-[360px] flex-col gap-5">
                <div className="flex items-center justify-between">
                    <label className="block w-[30%] text-[16px] font-medium text-[var(--text-color-dark)]">
                        Language:
                    </label>
                    <PrimarySelect
                        mainClassName="w-[175px] border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2 w-[50%]"
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
                <div className="flex items-center justify-between">
                    <label className="block w-[30%] text-[16px] font-medium text-[var(--text-color-dark)]">
                        Tone:
                    </label>
                    <PrimarySelect
                        mainClassName="w-[175px] border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2 w-[50%]"
                        options={ToneOptions}
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
                <div className="flex items-center justify-between">
                    <label className="block w-[30%] text-[16px] font-medium text-[var(--text-color-dark)]">
                        Style:
                    </label>
                    <PrimarySelect
                        mainClassName="w-[175px] border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2 w-[50%]"
                        options={StyleOptions}
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
                <div className="flex items-center justify-between">
                    <label className="block w-[30%] text-[16px] font-medium text-[var(--text-color-dark)]">
                        Format:
                    </label>
                    <PrimarySelect
                        mainClassName="w-[175px] border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2 w-[50%]"
                        options={FormatOptions}
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
                <div className="mt-[50px] flex items-center gap-[10px]">
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

export default OutputSettings
