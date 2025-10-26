// import { useTranslation } from "react-i18next";
import ThemeSwitcher from '../components/theme-switcher'
import PrimarySelect from '../components/common/primary-select'
import GptIcon from '../components/common/svg-icons/gpt-icon'
import UploadIcon from '../components/common/svg-icons/upload-icon'
// import DemoPlayIcon from '../components/common/svg-icons/demo-play-icon'
import { Button } from '../components/ui/button'
import LicenseIcon from '../components/common/svg-icons/license-icon'
import ToggleIconLeft from '../components/common/svg-icons/toggle-icon-left'
import ToggleIconRight from '../components/common/svg-icons/toggle-icon-right'
import ArrowRightIcon from '../components/common/svg-icons/arrow-right-icon'
import PromptIcon from '../components/common/svg-icons/prompt-icon'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'
import SettingsIconSecond from '../components/common/svg-icons/settings-icon-second'
// import { cn } from '../lib/utils'
import { useDispatch } from 'react-redux'
// import { RootState } from '../store'
import {
    openApplyingSettings,
    closeApplyingSettings,
} from '../reducers/applySettingsReducer'
import { openPrompt, closePrompt } from '../reducers/promptsReducer'
import {
    openOutputSettings,
    closeOutputSettings,
} from '../reducers/outputSettingsReudcer'
import { closeLicenseKey } from '../reducers/lisenceKeyReducer'
import { closeApiKey } from '../reducers/apiKeyReducer'
import { closeSettings } from '../reducers/settingsReducer'
import { closeUserProfile } from '../reducers/userProfileReducer'
import { closeCreatePrompt } from '../reducers/createPromptsReducer'
import { closeEditPrompt } from '../reducers/editPromtsReducer'
import { closeAgentSelection } from '../reducers/agentSelectionReducer'

interface Option {
    value: string
    label: string
    icon?: React.ReactNode
}

interface HeaderProps {
    toggleSidebarOpen?: () => void
    isSidebarOpen?: boolean
}

const Header: React.FC<HeaderProps> = ({
    toggleSidebarOpen,
    isSidebarOpen,
}) => {
    const dispatch = useDispatch()
    const userName = 'Mehedi Hasan'
    // keep selectors if needed later for highlighting states
    // const { isApplyingSettingsOpen } = useSelector(
    //     (state: RootState) => state.applySettings
    // )
    // const { isOutputSettingsOpen } = useSelector(
    //     (state: RootState) => state.outputSettings
    // )
    // const { isPromptOpen } = useSelector((state: RootState) => state.prompts)
    // const { t } = useTranslation();

    const openAIOptions: Option[] = [
        {
            value: 'OpenAI',
            label: 'OpenAI',
            icon: <GptIcon />,
        },
        {
            value: 'dark',
            label: 'Dark',
            icon: <GptIcon />,
        },
        {
            value: 'system',
            label: 'System',
            icon: <GptIcon />,
        },
    ]

    const gptVersionOptions: Option[] = [
        {
            value: 'GPT-4.0',
            label: 'GPT-4.0',
            icon: <GptIcon />,
        },
        {
            value: 'GPT -3',
            label: 'GPT -3',
            icon: <GptIcon />,
        },
        {
            value: 'GPT -2',
            label: 'GPT -2',
            icon: <GptIcon />,
        },
        {
            value: 'GPT -1',
            label: 'GPT -1',
            icon: <GptIcon />,
        },
    ]
    return (
        <header className="sticky top-0 z-30 border-b border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] font-montserrat backdrop-blur-md transition-all duration-500">
            <div className="flex w-full flex-shrink-0 justify-between px-8 py-4">
                <div className="flex flex-shrink-0 items-center gap-6">
                    {isSidebarOpen ? (
                        <div className="rounded-md p-1 hover:bg-[var(--bg-hover-color)]">
                            <ToggleIconLeft
                                toggleSidebarOpen={toggleSidebarOpen}
                                className="flex-shrink-0 cursor-pointer"
                            />
                        </div>
                    ) : (
                        <div className="rounded-md p-1 hover:bg-[var(--bg-hover-color)]">
                            <ToggleIconRight
                                toggleSidebarOpen={toggleSidebarOpen}
                            />
                        </div>
                    )}

                    <PrimarySelect
                        options={openAIOptions}
                        mainClassName="flex items-center gap-2 p-2 rounded-xl "
                    />
                    <PrimarySelect
                        options={gptVersionOptions}
                        mainClassName="flex items-center gap-2 p-2 rounded-xl  min-w-[140px]"
                    />
                </div>
                <div className="flex items-center gap-6">
                    {/* Do not delete this */}
                    {/* <LanguageSwitcher /> */}

                    <Button
                        variant="primary"
                        className="!rounded-2xl px-4 text-base !font-semibold"
                        size="sm"
                        icon={<LicenseIcon />}
                    >
                        Buy A License
                    </Button>
                    <ThemeSwitcher />

                    {/* Avatar + name acts as menu trigger */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-[var(--bg-border-color)] px-3 py-1 hover:bg-[var(--bg-hover-color)]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] text-sm font-semibold text-white">
                                {userName
                                    .split(' ')
                                    .map((n) => n[0])
                                    .join('')
                                    .slice(0, 2)}
                            </div>
                            <span className="text-sm text-[var(--text-color-base)]">
                                {userName}
                            </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[var(--bg-primary-color)] text-[var(--text-color-base)]">
                            <DropdownMenuItem
                                onSelect={() => {
                                    dispatch(openApplyingSettings())
                                    dispatch(closeSettings())
                                    dispatch(closeAgentSelection())
                                    dispatch(closeOutputSettings())
                                    dispatch(closePrompt())
                                    dispatch(closeLicenseKey())
                                    dispatch(closeApiKey())
                                    dispatch(closeUserProfile())
                                    dispatch(closeCreatePrompt())
                                    dispatch(closeEditPrompt())
                                }}
                            >
                                <SettingsIconSecond selectColor={false} />
                                <span className="ml-2">Preferences</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onSelect={() => {
                                    dispatch(openOutputSettings())
                                    dispatch(closeApplyingSettings())
                                    dispatch(closeSettings())
                                    dispatch(closeAgentSelection())
                                    dispatch(closePrompt())
                                    dispatch(closeLicenseKey())
                                    dispatch(closeApiKey())
                                    dispatch(closeUserProfile())
                                    dispatch(closeCreatePrompt())
                                    dispatch(closeEditPrompt())
                                }}
                            >
                                <ArrowRightIcon selectColor={false} />
                                <span className="ml-2">Output Settings</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onSelect={() => {
                                    dispatch(openPrompt())
                                    dispatch(closeApplyingSettings())
                                    dispatch(closeSettings())
                                    dispatch(closeAgentSelection())
                                    dispatch(closeLicenseKey())
                                    dispatch(closeApiKey())
                                    dispatch(closeUserProfile())
                                    dispatch(closeCreatePrompt())
                                    dispatch(closeEditPrompt())
                                    dispatch(closeOutputSettings())
                                }}
                            >
                                <PromptIcon selectColor={false} />
                                <span className="ml-2">Prompt Library</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <UploadIcon height={18} width={18} />
                                <span className="ml-2">Export</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {/* Overflow icon moved inside avatar menu; removing separate 3-dot */}
                </div>
            </div>
        </header>
    )
}

export default Header
