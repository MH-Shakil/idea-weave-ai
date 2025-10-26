// import { useTranslation } from "react-i18next";

import AttachmentIcon from './svg-icons/attachment-Icon'
import MikeIcon from './svg-icons/mike-icon'
import SendIcon from './svg-icons/send-icon'
import CloseIconSmall from './svg-icons/close-icon-small'
import { cn } from '../../lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import { TextAreafield } from '../ui/textarea'
import { useEffect, useRef } from 'react'
import { setInputFocus } from '../../reducers/inputFocus'

interface BottomLayoutProps {
    title?: string
    handleAttachmentClick?: () => void
    fileInputRef?: React.RefObject<HTMLInputElement>
    setUserInput?: (input: string) => void
    handleKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
    handleSendMessage?: () => void
    userInput?: string
    filePreviews?: string[]
    setFilePreviews?: React.Dispatch<React.SetStateAction<string[]>>

    textareaHeight?: string
    setTextareaHeight?: (value: string) => void
}

const BottomLayout: React.FC<BottomLayoutProps> = ({
    handleAttachmentClick,
    fileInputRef,
    setUserInput,
    handleKeyPress,
    handleSendMessage,
    userInput,
    filePreviews,
    setFilePreviews,
    textareaHeight,
    setTextareaHeight,
}) => {
    const dispatch = useDispatch()
    const isInputFocused = useSelector(
        (state: any) => state.focus.isInputFocused
    )
    const inputRef = useRef<HTMLTextAreaElement | null>(null)
    // removed header quick-controls from bottom layout

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const newFileURLs = Array.from(files).map((file) =>
                URL.createObjectURL(file)
            )

            setFilePreviews &&
                setFilePreviews((prevPreviews) => [
                    ...prevPreviews,
                    ...newFileURLs,
                ])
        }
    }
    const handleRemovePreview = (indexToRemove: number) => {
        setFilePreviews &&
            setFilePreviews((prevPreviews) =>
                prevPreviews.filter((_, index) => index !== indexToRemove)
            )
    }
    const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = e.target
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
        setTextareaHeight && setTextareaHeight(textarea.style.height)
    }

    useEffect(() => {
        if (isInputFocused && inputRef.current) {
            inputRef.current.focus()

            dispatch(setInputFocus(false))
        }
    }, [isInputFocused, dispatch])

    console.log('textareaHeight', textareaHeight)
    return (
        <div
            className={cn(
                'mt-4 flex flex-col px-9 font-montserrat',
                filePreviews && 'mt-4'
            )}
        >
            <div className="mt-3">
                <div className="relative w-full">
                    {/* Image Preview Section */}
                    {filePreviews && filePreviews.length > 0 && (
                        <div className="absolute bottom-[105%] left-0 mt-3 grid grid-cols-6 gap-2 rounded-md bg-[var(--bg-light-dark-color)] p-2">
                            {filePreviews.map((preview, index) => (
                                <div key={index} className="relative w-full">
                                    <img
                                        src={preview}
                                        alt={`Preview ${index + 1}`}
                                        className="h-[76px] w-[76px] rounded-lg border-[0.5px] border-[var(--text-color-base)] object-cover"
                                    />
                                    <div
                                        className="absolute right-1 top-1 cursor-pointer"
                                        onClick={() =>
                                            handleRemovePreview(index)
                                        }
                                    >
                                        <CloseIconSmall />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="relative h-full w-full">
                        <div
                            className={cn(
                                'absolute bottom-0 flex w-full flex-shrink-0 items-end gap-3 rounded-[10px] bg-[var(--sidebar-bg-color)] px-4 py-2 transition-all duration-500',
                                textareaHeight === '36px' && 'items-center'
                            )}
                        >
                            {/* <div
                                className={cn(
                                    'absolute right-0 top-[-40px] flex items-center gap-[10px]',
                                    textareaHeight !== '36px' &&
                                        'rounded-[10px] rounded-bl-none rounded-br-none bg-[var(--sidebar-bg-color)] p-4 pb-0'
                                )}
                            >
                                <Checkbox
                                    onCheckedChange={(checked) =>
                                        setEnterPressChecked &&
                                        setEnterPressChecked(checked as boolean)
                                    }
                                />
                                <p className="text-[var(--text-color-base)]">
                                    Enter to send message
                                </p>
                            </div> */}
                            <AttachmentIcon
                                className="flex-shrink-0 cursor-pointer duration-300 active:scale-75"
                                onClick={handleAttachmentClick}
                            />
                            <input
                                ref={fileInputRef}
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                                multiple
                                accept="image/*"
                            />
                            <TextAreafield
                                mainClassName="relative w-full"
                                className="max-h-60 w-full resize-none border-0 bg-transparent pl-0 text-[var(--text-color-base)] shadow-none placeholder:text-[var(--text-color-base)] focus:outline-none"
                                placeholder="Write your message here...."
                                ref={inputRef}
                                value={userInput}
                                onChange={(e) =>
                                    setUserInput && setUserInput(e.target.value)
                                }
                                onInput={autoResize}
                                onKeyDown={handleKeyPress}
                            />
                            <div className="flex items-center gap-[25px]">
                                <MikeIcon className="cursor-pointer duration-300 active:scale-75" />
                                <SendIcon
                                    className="cursor-pointer duration-300 active:scale-75"
                                    onClick={handleSendMessage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomLayout
