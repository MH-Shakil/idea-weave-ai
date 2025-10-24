// import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

interface Option {
    value: string
    label: string
    icon?: React.ReactNode
}

interface SelectComponentProps {
    options: Option[]
    mainClassName?: string
}

const PrimarySelect: React.FC<SelectComponentProps> = ({
    options,
    mainClassName = 'min-w-[120px] border-0 font-inter px-2 hover:bg-[var(--bg-hover-color)]',
}) => {
    //   const { t } = useTranslation();

    const [selectedValue, setSelectedValue] = useState<Option | null>(
        options.length > 0 ? options[0] : null
    )
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const contentColor = currentTheme === 'light-theme' ? '#FFFFFF' : '#2C2C2C'
    const optionTextColor =
        currentTheme === 'light-theme' ? '#000000' : '#FFFFFF'

    useEffect(() => {
        if (options.length > 0) {
            setSelectedValue(options[0])
        }
    }, [options])
    return (
        <Select
            value={selectedValue?.value}
            onValueChange={(value) => {
                const selectedOption = options.find(
                    (option) => option.value === value
                )
                setSelectedValue(selectedOption || null)
            }}
        >
            <SelectTrigger className={mainClassName}>
                {selectedValue ? (
                    <div className="flex items-center">
                        {selectedValue.icon && (
                            <span className="mr-2 text-[24px]">
                                {selectedValue.icon}
                            </span>
                        )}
                        <SelectValue className="text-[14px] text-[var(--text-color-base)]">
                            {selectedValue.label}
                        </SelectValue>
                    </div>
                ) : (
                    <SelectValue placeholder="Select..." />
                )}
            </SelectTrigger>
            <SelectContent
                className="bg-[var(--bg-light-dark-color)] font-inter text-[var(--text-color-base)]"
                style={{ backgroundColor: contentColor }}
            >
                {options.map((option, index) => (
                    <SelectItem
                        key={index}
                        value={option.value}
                        icon={option.icon}
                        className="hover:bg-[var(--bg-hover-color)]"
                    >
                        <p style={{ color: optionTextColor }}>
                            {' '}
                            {option.label}
                        </p>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default PrimarySelect
