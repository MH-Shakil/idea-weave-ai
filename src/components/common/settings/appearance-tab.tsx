import { useTranslation } from 'react-i18next'
// import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import PrimarySelect from '../primary-select'

interface AppearanceTabProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

const AppearanceTab: React.FC<AppearanceTabProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedActionButton,
}) => {
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
    const fontSizeOptions = [
        {
            value: 'font Size 1',
            label: `${t('font Size 1')}`,
        },
        {
            value: 'font Size 2',
            label: `${t('font Size 2')}`,
        },
    ]
    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <div className="mx-auto mt-7 flex w-[405px] flex-col gap-9">
                <div className="flex w-full items-center justify-between gap-1">
                    <label className="block w-[30%] flex-shrink-0 text-[16px] font-medium text-[var(--text-color-dark)]">
                        Sidebar width:
                    </label>
                    <Input
                        mainClassName="w-[50%]"
                        type="text"
                        placeholder="Enter Sidebar width"
                        className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] transition-all duration-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label className="block w-[30%] text-[16px] font-medium text-[var(--text-color-dark)]">
                        Font size:
                    </label>
                    <PrimarySelect
                        mainClassName=" border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2 w-[50%]"
                        options={fontSizeOptions}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label className="block w-[30%] text-[16px] font-medium text-[var(--text-color-dark)]">
                        Language:
                    </label>
                    <PrimarySelect
                        mainClassName=" border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2 w-[50%]"
                        options={languageOption}
                    />
                </div>

                {/* <div className="flex justify-end gap-4">
                    <Button variant="primary" className="w-[100px]">
                        Create
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
                </div> */}
            </div>
        </div>
    )
}

export default AppearanceTab
