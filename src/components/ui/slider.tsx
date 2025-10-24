'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '../../lib/utils'

const SliderWithValue = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
    const [sliderValue, setSliderValue] = React.useState<number[]>([33]) // Default value

    const handleValueChange = (value: number[]) => {
        setSliderValue(value)
    }

    return (
        <div className="flex w-full items-center justify-between space-x-4">
            <SliderPrimitive.Root
                ref={ref}
                className={cn(
                    'relative flex w-full touch-none select-none items-center',
                    className
                )}
                value={sliderValue}
                onValueChange={handleValueChange}
                {...props}
            >
                <SliderPrimitive.Track className="relative h-[3px] w-full grow overflow-hidden rounded-full bg-[var(--bg-track-color)]">
                    <SliderPrimitive.Range className="absolute h-full bg-[linear-gradient(180deg,_var(--primary-color),_var(--primary-color-second))]" />
                </SliderPrimitive.Track>
                <SliderPrimitive.Thumb className="ring-offset-background focus-visible:ring-ring block h-[10px] w-[10px] rounded-full border-0 bg-[linear-gradient(180deg,_var(--primary-color),_var(--primary-color-second))] transition-colors focus-visible:outline-none focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
            </SliderPrimitive.Root>

            <span className="min-w-[40px] text-left text-sm font-medium text-[var(--text-color-dark)]">
                {sliderValue[0]}
            </span>
        </div>
    )
})

SliderWithValue.displayName = SliderPrimitive.Root.displayName

export { SliderWithValue as Slider }
