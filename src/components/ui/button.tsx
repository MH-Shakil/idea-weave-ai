import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

// import {cn} from '@/lib/utils';

const COMMON_CLASSES = `inline-flex items-center justify-center
 whitespace-nowrap rounded-md text-[12px] font-medium capitalize ring-offset-background transition-colors focus-visible:outline-none
 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-10 leading-[15px] active:scale-95 duration-300`

const BUTTON_VARIANTS = {
    primary:
        'bg-[linear-gradient(180deg,_var(--primary-color),_var(--primary-color-second))] text-white border-0 ',
    dark: 'bg-[var(--bg-dark-to-white-color)] text-[var(--bg-primary-color)] ',
    barnRed: 'bg-[var(--bg-barn-red-color)] text-white ',
    transparent: 'bg-transparent text-[var(--text-color-base)]',
    outline:
        'border border-[var(--primary-color)] text-[var(--primary-color)] bg-transparent',
    secondary: 'bg-gradient-2 hover:bg-gradient-3 text-white',
    link: 'text-[var(--primary-color)] underline-offset-4 hover:underline',
    ghost: 'hover:bg-dark-green hover:text-accent-foreground',
    destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
}

const BUTTON_SIZE = {
    default: 'h-8',
    sm: 'h-9',
    lg: 'h-14',
    icon: 'h-12 w-12',
}

const BUTTON_SPACE = {
    default: 'px-2',
    sm: 'px-2',
    lg: 'px-2 py-2',
    icon: '',
}

const buttonVariants = cva(COMMON_CLASSES, {
    variants: {
        variant: BUTTON_VARIANTS,
        size: BUTTON_SIZE,
        space: BUTTON_SPACE,
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
        space: 'default',
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    innerClassName?: string
    icon?: React.ReactNode // Add an optional icon prop
    iconPosition?: 'left' | 'right' // Optional: Define icon position
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            innerClassName = '',
            variant,
            size = 'default',
            children,
            asChild = false,
            icon, // Use the icon prop
            iconPosition = 'left', // Optional: position of the icon
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button'

        const iconElement = icon && (
            <span
                className={cn(
                    'mr-2 inline-flex items-center',
                    size === 'icon' && 'mr-0'
                )}
            >
                {icon}
            </span>
        )

        return (
            <>
                {variant === 'secondary' ? (
                    <Comp
                        className={cn(
                            COMMON_CLASSES,
                            variant && BUTTON_VARIANTS?.[variant]
                                ? BUTTON_VARIANTS?.[variant]
                                : '',
                            size && BUTTON_SIZE?.[size]
                                ? BUTTON_SIZE?.[size]
                                : '',
                            'group',
                            className
                        )}
                        ref={ref}
                        {...props}
                    >
                        <span
                            className={cn(
                                size && BUTTON_SPACE?.[size]
                                    ? BUTTON_SPACE?.[size]
                                    : '',
                                'bg-dark-green group-active:bg-dark-green font-display inline-flex h-[calc(100%_-_2.5px)] w-[calc(100%_-_2.5px)] items-center justify-center rounded-md transition-all duration-500 group-hover:bg-black',
                                innerClassName
                            )}
                        >
                            {iconPosition === 'left' && iconElement}
                            {children}
                            {iconPosition === 'right' && iconElement}
                        </span>
                    </Comp>
                ) : (
                    <Comp
                        className={cn(
                            buttonVariants({ variant, size, className })
                        )}
                        ref={ref}
                        {...props}
                    >
                        {iconPosition === 'left' && iconElement}
                        {children}
                        {iconPosition === 'right' && iconElement}
                    </Comp>
                )}
            </>
        )
    }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
