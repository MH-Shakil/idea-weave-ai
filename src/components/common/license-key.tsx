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
                    Enter License Key
                </h2>

                <div className="mt-[48px] flex w-full items-start justify-between gap-3">
                    <label className="mt-3 block flex-shrink-0 text-[16px] font-medium text-[var(--text-color-dark)]">
                        License Key :
                    </label>
                    <div className="w-full">
                        <Input
                            mainClassName="w-full"
                            type="text"
                            placeholder="XXXXXXXXX-XXXXXXXXX"
                            className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] focus:outline-none"
                        />
                        <p className="mt-2 cursor-pointer text-[14px] text-[var(--text-color-dark-fifth)]">
                            How to get new license key
                        </p>
                    </div>
                </div>
                <div className="mt-[54px] flex justify-end gap-4">
                    <Button variant="primary" className="w-[100px]">
                        Create
                    </Button>
                    <Button
                        variant="outline"
                        className="w-[100px] font-bold"
                        // onClick={() =>
                        //     setSelectedActionButton &&
                        //     setSelectedActionButton('')
                        // }
                    >
                        Unlink Device
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LicenseKey
