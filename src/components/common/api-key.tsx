// import { useTranslation } from "react-i18next";

import { useDispatch } from 'react-redux'
import { closeLicenseKey } from '../../reducers/lisenceKeyReducer'
import { Input } from '../ui/input'
import CloseIcon from './svg-icons/close-icon'
import { Button } from '../ui/button'
import { closeApiKey } from '../../reducers/apiKeyReducer'
import GptIcon from './svg-icons/gpt-icon'
import GeminiStar from './svg-icons/gemini-star-icon'
import { closeSettings } from '../../reducers/settingsReducer'
import { closeUserProfile } from '../../reducers/userProfileReducer'

interface ApikeyProps {
    title?: string
    setSelectAgent?: (value: boolean) => void
}

const Apikey: React.FC<ApikeyProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectAgent,
    // mainClassName = 'flex justify-between items-center font-montserrat cursor-pointer',
}) => {
    const dispatch = useDispatch()
    return (
        <div className="flex w-full items-center justify-center">
            <div className="relative w-[690px] rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
                <CloseIcon
                    className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                    onClick={() => {
                        dispatch(closeLicenseKey())
                        dispatch(closeApiKey())
                        dispatch(closeSettings())
                        dispatch(closeUserProfile())
                    }}
                />
                <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                    Enter API Keys
                </h2>

                <div className="mt-[40px]">
                    <h5 className="text-[14px] font-semibold text-[var(--text-color-dark)]">
                        Enter AI Provider API Keys
                    </h5>
                    <h5 className="text-[12px] text-[var(--text-color-base)]">
                        It will be stored locally in your computer with
                        encryption. we do not store anything in cloud
                    </h5>
                </div>

                <h5 className="mt-[30px] text-[16px] font-medium text-[var(--text-color-dark)]">
                    OpenAI API Key{' '}
                    <span className="cursor-pointer text-[14px] text-[var(--text-color-dark-fifth)]">
                        (How to get OpenAI API key)
                    </span>
                </h5>

                <div className="mb-11 mt-4 flex w-full items-center gap-4">
                    <GptIcon />
                    <Input
                        mainClassName="w-full"
                        type="text"
                        placeholder="XXXXXXXXX-XXXXXXXXX"
                        className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] focus:outline-none"
                    />
                    <Button
                        variant="primary"
                        className="h-[45px] w-[100px] flex-shrink-0"
                    >
                        Save
                    </Button>
                </div>
                <h5 className="mt-[30px] text-[16px] font-medium text-[var(--text-color-dark)]">
                    Gemini API Key{' '}
                    <span className="cursor-pointer text-[14px] text-[var(--text-color-dark-fifth)]">
                        (How to get Gemini API key)
                    </span>
                </h5>

                <div className="mb-11 mt-4 flex w-full items-center gap-4">
                    <GeminiStar />
                    <Input
                        mainClassName="w-full"
                        type="text"
                        placeholder="XXXXXXXXX-XXXXXXXXX"
                        className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] focus:outline-none"
                    />
                    <Button
                        variant="primary"
                        className="h-[45px] w-[100px] flex-shrink-0"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Apikey
