import { useTranslation } from 'react-i18next'

const LanguageSwitcher = (): JSX.Element => {
    const { i18n } = useTranslation()

    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className="cursor-pointer bg-transparent p-2 text-[var(--text-color-base)]"
        >
            <option
                className="bg-[var(--bg-color)] text-[var(--text-color-base)]"
                value="en"
            >
                English
            </option>
            <option
                className="bg-[var(--bg-color)] text-[var(--text-color-base)]"
                value="fr"
            >
                France
            </option>
        </select>
    )
}

export default LanguageSwitcher
