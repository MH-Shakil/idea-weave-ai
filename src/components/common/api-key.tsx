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
            <div className="relative w-[690px] rounded-xl border border-[var(--bg-border-color)] bg-gradient-to-br from-[var(--sidebar-bg-color)] to-[var(--bg-ai-bot-text-color)] px-14 py-6 font-montserrat shadow-sm transition-all duration-500">
                <CloseIcon
                    className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                    onClick={() => {
                        dispatch(closeLicenseKey())
                        dispatch(closeApiKey())
                        dispatch(closeSettings())
                        dispatch(closeUserProfile())
                    }}
                />
                <div className="text-center">
                    <h2 className="font-extrabold bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] bg-clip-text text-[24px] text-transparent">
                        Enter API Keys
                    </h2>
                    <p className="mt-1 text-sm text-[var(--text-color-secondary)]">
                        Keys are stored locally on your device with encryption
                    </p>
                </div>

                <div className="mt-[28px]">
                    <h5 className="text-[14px] font-semibold text-[var(--text-color-base)]">
                        Enter AI Provider API Keys
                    </h5>
                    <h5 className="text-[12px] text-[var(--text-color-secondary)]">
                        We do not upload your keys to the cloud
                    </h5>
                </div>

                <h5 className="mt-[24px] text-[16px] font-medium text-[var(--text-color-base)]">
                    OpenAI API Key{' '}
                    <span className="cursor-pointer text-[14px] text-[var(--link-color)]">
                        (How to get OpenAI API key)
                    </span>
                </h5>

                <div className="mb-8 mt-3 flex w-full items-center gap-4">
                    <GptIcon />
                    <Input
                        mainClassName="w-full"
                        type="text"
                        placeholder="XXXXXXXXX-XXXXXXXXX"
                        className="h-[50px] w-full flex-shrink-0 border border-[var(--bg-border-color)] focus:outline-none"
                    />
                    <Button
                        variant="primary"
                        className="h-[45px] w-[120px] flex-shrink-0"
                    >
                        Save
                    </Button>
                </div>
                <h5 className="mt-[12px] text-[16px] font-medium text-[var(--text-color-base)]">
                    Gemini API Key{' '}
                    <span className="cursor-pointer text-[14px] text-[var(--link-color)]">
                        (How to get Gemini API key)
                    </span>
                </h5>

                <div className="mb-4 mt-3 flex w-full items-center gap-4">
                    <GeminiStar />
                    <Input
                        mainClassName="w-full"
                        type="text"
                        placeholder="XXXXXXXXX-XXXXXXXXX"
                        className="h-[50px] w-full flex-shrink-0 border border-[var(--bg-border-color)] focus:outline-none"
                    />
                    <Button
                        variant="primary"
                        className="h-[45px] w-[120px] flex-shrink-0"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Apikey
