import * as React from 'react'
import { cn } from '../../lib/utils'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
    mainClassName?: string
    iconClass?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            icon,
            mainClassName = 'relative',
            iconClass = 'absolute left-3 top-1/2 -translate-y-1/2 transform text-sm',
            ...props
        },
        ref
    ) => {
        return (
            <div className={mainClassName}>
                {icon && <span className={iconClass}>{icon}</span>}
                <input
                    type={type}
                    className={cn(
                        'flex h-[35px] w-full rounded-md border border-[var(--text-color-base)] bg-[var(--bg-secondary-color)] px-3 py-2 text-sm text-[var(--text-color-base)] placeholder:text-[var(--text-color-secondary)] hover:bg-[var(--bg-hover-color)] focus-visible:outline-none focus-visible:ring-0',
                        icon && 'pl-8',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)

Input.displayName = 'Input'

export { Input }
