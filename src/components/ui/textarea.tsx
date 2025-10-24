import * as React from 'react'
import { cn } from '../../lib/utils'

export interface TextAreafieldProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    icon?: React.ReactNode
    mainClassName?: string
    iconClass?: string
}

const TextAreafield = React.forwardRef<HTMLTextAreaElement, TextAreafieldProps>(
    (
        {
            className,
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
                <textarea
                    className={cn(
                        'flex w-full rounded-md border border-[var(--text-color-base)] bg-[var(--bg-secondary-color)] px-3 py-2 text-sm text-[var(--text-color-base)] placeholder:text-[var(--text-color-secondary)] focus-visible:outline-none focus-visible:ring-0',
                        icon && 'pl-8',
                        className
                    )}
                    rows={1}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    }
)

TextAreafield.displayName = 'TextAreafield'

export { TextAreafield }
