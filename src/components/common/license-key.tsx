// import { useTranslation } from "react-i18next";

import { useDispatch } from 'react-redux'
import { closeLicenseKey } from '../../reducers/lisenceKeyReducer'
import { Input } from '../ui/input'
import CloseIcon from './svg-icons/close-icon'
import { Button } from '../ui/button'
import { closeApiKey } from '../../reducers/apiKeyReducer'
import { closeSettings } from '../../reducers/settingsReducer'
import { closeUserProfile } from '../../reducers/userProfileReducer'

interface LicenseKeyProps {
    title?: string
    setSelectAgent?: (value: boolean) => void
}

const LicenseKey: React.FC<LicenseKeyProps> = ({
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
                        Enter License Key
                    </h2>
                    <p className="mt-1 text-sm text-[var(--text-color-secondary)]">
                        Activate Pro features across your devices
                    </p>
                </div>

                <div className="mt-[32px] flex w-full items-start justify-between gap-3">
                    <label className="mt-3 block flex-shrink-0 text-[16px] font-medium text-[var(--text-color-base)]">
                        License Key :
                    </label>
                    <div className="w-full">
                        <Input
                            mainClassName="w-full"
                            type="text"
                            placeholder="XXXXXXXXX-XXXXXXXXX"
                            className="h-[50px] w-full flex-shrink-0 border border-[var(--bg-border-color)] focus:outline-none"
                        />
                        <p className="mt-2 cursor-pointer text-[14px] text-[var(--link-color)]">
                            How to get new license key
                        </p>
                    </div>
                </div>
                <div className="mt-[36px] flex justify-end gap-3">
                    <Button variant="primary" className="w-[120px]">
                        Create
                    </Button>
                    <Button
                        variant="outline"
                        className="w-[120px] font-bold text-[var(--text-color-base)]"
                    >
                        Unlink Device
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LicenseKey
