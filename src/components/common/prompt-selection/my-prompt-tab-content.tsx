import { useTranslation } from 'react-i18next'
import { Input } from '../../ui/input'
import PrimarySelect from '../primary-select'
import SearchIcon from '../svg-icons/search-icon'
import { Button } from '../../ui/button'
import PromptTable from './prompt-table'
import { cn } from '../../../lib/utils'
import LibraryTable from './library-table'
import { useDispatch } from 'react-redux'
import { openCreatePrompt } from '../../../reducers/createPromptsReducer'
import { closeApplyingSettings } from '../../../reducers/applySettingsReducer'
import { closePrompt } from '../../../reducers/promptsReducer'
import { closeLicenseKey } from '../../../reducers/lisenceKeyReducer'
import { closeApiKey } from '../../../reducers/apiKeyReducer'
import { closeSettings } from '../../../reducers/settingsReducer'
import { closeUserProfile } from '../../../reducers/userProfileReducer'
import { closeEditPrompt } from '../../../reducers/editPromtsReducer'

interface MyPromptTabContentProps {
    title?: string
    library?: boolean
    prompts?: any
    libraries?: any
    addPromptBtn?: boolean
}

const MyPromptTabContent: React.FC<MyPromptTabContentProps> = ({
    library,
    prompts,
    libraries,
    addPromptBtn = false,
}) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const categoryOptions = [
        {
            value: 'Category 1',
            label: `${t('Category 1')}`,
        },
        {
            value: 'Category 2',
            label: `${t('Category 2')}`,
        },
    ]
    return (
        <div className="relative w-full font-montserrat transition-all duration-500">
            <div
                className={cn(
                    'my-12 flex w-full justify-between',
                    library && 'justify-center'
                )}
            >
                <div className="flex w-full items-center gap-2">
                    <Input
                        type="text"
                        placeholder="Search by prompt name"
                        icon={<SearchIcon />}
                        className="w-full"
                        mainClassName="relative w-[80%]"
                    />
                    <PrimarySelect
                        mainClassName="w-[111px] border border-[var(--text-color-base)] font-inter py-1 h-[35px] px-2"
                        options={categoryOptions}
                    />
                </div>
                {!library && (
                    <Button
                        variant="primary"
                        onClick={() => {
                            dispatch(openCreatePrompt())
                            dispatch(closeApplyingSettings())
                            dispatch(closePrompt())
                            dispatch(closeLicenseKey())
                            dispatch(closeApiKey())
                            dispatch(closeSettings())
                            dispatch(closeUserProfile())
                            dispatch(closeEditPrompt())
                        }}
                    >
                        + Create new prompt
                    </Button>
                )}
            </div>

            {library ? (
                <LibraryTable
                    libraries={libraries}
                    addPromptBtn={addPromptBtn}
                />
            ) : (
                <PromptTable prompts={prompts} addPromptBtn={addPromptBtn} />
            )}
        </div>
    )
}

export default MyPromptTabContent
