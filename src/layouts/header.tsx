// import { useTranslation } from "react-i18next";
import ThemeSwitcher from '../components/theme-switcher'
import PrimarySelect from '../components/common/primary-select'
import GptIcon from '../components/common/svg-icons/gpt-icon'
import UploadIcon from '../components/common/svg-icons/upload-icon'
import DemoPlayIcon from '../components/common/svg-icons/demo-play-icon'
import { Button } from '../components/ui/button'
import LicenseIcon from '../components/common/svg-icons/license-icon'
import ToggleIconLeft from '../components/common/svg-icons/toggle-icon-left'
import ToggleIconRight from '../components/common/svg-icons/toggle-icon-right'

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
        <header className="bg-[var(--bg-primary-color)] font-montserrat transition-all duration-500">
            <div className="flex w-full flex-shrink-0 justify-between px-8 py-[27px]">
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

                    <PrimarySelect options={openAIOptions} />
                    <PrimarySelect options={gptVersionOptions} />

                    <button className="flex h-[40px] items-center gap-3 rounded-md px-2 py-2 duration-300 hover:bg-[var(--bg-hover-color)] active:scale-95">
                        <UploadIcon />
                        <h5 className="text-[var(--text-color-base)]">
                            Export
                        </h5>
                    </button>

                    <button className="flex h-[40px] items-center gap-3 rounded-md px-2 py-2 duration-300 hover:bg-[var(--bg-hover-color)] active:scale-95">
                        <DemoPlayIcon />
                        <h5 className="text-[var(--text-color-base)]">Demo</h5>
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    {/* Do not delete this */}
                    {/* <LanguageSwitcher /> */}

                    <Button variant="primary" icon={<LicenseIcon />}>
                        Buy A License
                    </Button>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}

export default Header
