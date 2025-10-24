// ThemeSwitcher.tsx
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../reducers/themeReducer'
import { RootState } from '../store'
import { Switch } from './ui/switch'

const ThemeSwitcher = (): JSX.Element => {
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch()

    const isChecked = currentTheme === 'dark-theme'

    const handleThemeChange = (checked: boolean): void => {
        const newTheme = checked ? 'dark-theme' : 'light-theme'
        dispatch(setTheme(newTheme))
    }

    return <Switch checked={isChecked} onCheckedChange={handleThemeChange} />
}

export default ThemeSwitcher
