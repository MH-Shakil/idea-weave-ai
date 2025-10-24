import React, { useState, useEffect } from 'react'

interface TypingEffectProps {
    text: string
    speed?: number
    onProgress?: (text: string) => void
    onTypingComplete?: () => void
}

const TypingEffect: React.FC<TypingEffectProps> = ({
    text,
    speed = 10,
    onProgress,
    onTypingComplete,
}) => {
    const [displayedText, setDisplayedText] = useState('')
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                const nextText = displayedText + text[index]
                setDisplayedText(nextText)
                setIndex(index + 1)

                if (onProgress) {
                    onProgress(nextText)
                }
            }, speed)
            return () => clearTimeout(timeoutId)
        } else {
            if (onTypingComplete) {
                onTypingComplete()
            }
        }
    }, [index, text, speed, onProgress, displayedText, onTypingComplete])

    return <>{displayedText}</>
}

export default TypingEffect
