'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '../../lib/utils'
import DarkModeIcon from '../common/svg-icons/dark-mode-icon'
import LightModeIcon from '../common/svg-icons/light-mode-icon'

interface SwitchProps
    extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
    checked?: boolean
    icon?: boolean
    onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    SwitchProps
>(({ className, checked, onCheckedChange, icon = true, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            'focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-8 w-[70px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=unchecked]:bg-[#2E2D2D]',
            !icon &&
                'focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-7 w-[51px] shrink-0 cursor-pointer items-center rounded-full border-[0.5px] border-[var(--text-color-dark)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--bg-dark-to-white-color)] data-[state=unchecked]:bg-[var(--sidebar-bg-color)]',
            className
        )}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
        ref={ref}
    >
        {icon ? (
            <SwitchPrimitives.Thumb
                className={cn(
                    'pointer-events-none relative block h-[26px] w-[26px] rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[40px] data-[state=unchecked]:translate-x-0'
                )}
            >
                <span className="absolute inset-0 flex items-center justify-center">
                    {checked ? <DarkModeIcon /> : <LightModeIcon />}
                </span>
            </SwitchPrimitives.Thumb>
        ) : (
            <SwitchPrimitives.Thumb
                className={cn(
                    'pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[26px] data-[state=unchecked]:translate-x-[3px] data-[state=checked]:bg-[var(--bg-light-dark-color)] data-[state=unchecked]:bg-[var(--text-color-base)]'
                )}
            />
        )}
    </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
