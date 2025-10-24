// import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from 'react-redux'
import { cn } from '../../lib/utils'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import BotAvatar from './svg-icons/bot-icon'
import CopyIcon from './svg-icons/copy-icon'
import DeleteIcon from './svg-icons/delete-icon'
import ForkIcon from './svg-icons/fork-icon'
import PinIcon from './svg-icons/pin-icon'
import PlayIcon from './svg-icons/play-icon'
import RowIcon from './svg-icons/row-icon'
import ThreeDotVerticalIcon from './svg-icons/three-dot-vertical-icon'
import { RootState } from '../../store'
import DownloadIcon from './svg-icons/download-icon'
import { Dialog, DialogContent } from '../ui/dialog'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel'
import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Message } from '../../pages/home'
import { setFilteredMessages } from '../../reducers/chatSearch'
import GptIcon from './svg-icons/gpt-icon'
import { openUserProfile } from '../../reducers/userProfileReducer'
import { closeSettings } from '../../reducers/settingsReducer'
import { closeApiKey } from '../../reducers/apiKeyReducer'
import { closeLicenseKey } from '../../reducers/lisenceKeyReducer'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import TypingEffect from './typing-effect'
import Markdown from 'react-markdown'
// import Markdown from 'react-markdown'

interface CodeProps {
    inline?: boolean
    className?: string
    children?: React.ReactNode
}

interface ChatBoxProps {
    messages?: Message[]
}
const actionMenu = [
    {
        name: 'Pin',
        icon: <PinIcon />,
    },
    {
        name: 'Delete',
        icon: <DeleteIcon />,
    },
    {
        name: 'Show raw',
        icon: <RowIcon />,
    },
    {
        name: 'Play',
        icon: <PlayIcon />,
    },
    {
        name: 'Fork chat from here',
        icon: <ForkIcon />,
    },
]

const ChatBox: React.FC<ChatBoxProps> = ({ messages = [] }) => {
    const dispatch = useDispatch()

    const filteredMessages = useSelector(
        (state: any) => state.searchChat.filteredMessages
    )
    const searchChat = useSelector(
        (state: RootState) => state.searchChat.searchChat
    )
    const { currentTheme } = useSelector((state: RootState) => state.theme)
    const popupOptionTextColor = useMemo(
        () => (currentTheme === 'light-theme' ? '#000000' : '#FFFFFF'),
        [currentTheme]
    )
    const popupBgColor = useMemo(
        () => (currentTheme === 'light-theme' ? '#FFFFFF' : '#2C2C2C'),
        [currentTheme]
    )
    const [selectedImages, setSelectedImages] = useState<string[] | null>(null)
    const [displayedText, setDisplayedText] = useState('')

    // const syntaxStyle =
    //     currentTheme === 'light-theme' ? customLightStyle : customDarkStyle
    const handleImageClick = useCallback((imageUrls: string[]) => {
        setSelectedImages(imageUrls)
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [copied, setCopied] = useState(false)
    const [typedMessages, setTypedMessages] = useState<string[]>([])

    const handleCopy = useCallback(() => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }, [])

    const latestMessageRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (latestMessageRef.current) {
            latestMessageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }, [messages])

    useEffect(() => {
        if (latestMessageRef.current) {
            latestMessageRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }
    }, [displayedText])

    useEffect(() => {
        if (searchChat) {
            const result = messages.filter((message: any) =>
                message.text.toLowerCase().includes(searchChat.toLowerCase())
            )
            if (result.length > 0) {
                dispatch(setFilteredMessages(result))
            } else {
                dispatch(setFilteredMessages(messages))
            }
        } else {
            dispatch(setFilteredMessages(messages))
        }
    }, [searchChat, messages, dispatch])

    const handleTypingComplete = useCallback((messageId: string) => {
        setTypedMessages((prev) => {
            if (!prev.includes(messageId)) {
                return [...prev, messageId]
            }
            return prev
        })
    }, [])

    const markdownComponents = useMemo(
        () => ({
            code: ({ inline, className, children, ...props }: CodeProps) => {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                    <div className="relative">
                        <div className="absolute right-2 top-2 flex gap-2">
                            <CopyToClipboard
                                text={String(children).replace(/\n$/, '')}
                                onCopy={handleCopy}
                            >
                                <CopyIcon
                                    className="cursor-pointer duration-300 active:scale-75"
                                    onlyDark
                                />
                            </CopyToClipboard>
                        </div>
                        <SyntaxHighlighter
                            style={atomDark}
                            language={match[1] || 'text'}
                            PreTag="div"
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    </div>
                ) : (
                    <code className={className} {...props}>
                        {children}
                    </code>
                )
            },
        }),
        [handleCopy]
    )

    const renderAvatar = useCallback(
        (sender: 'user' | 'bot') => {
            if (sender === 'bot') {
                return (
                    <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full border border-[var(--text-color-dark)]">
                        <GptIcon />
                    </div>
                )
            }
            return (
                <div
                    className="flex h-[50px] w-[50px] flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--text-color-dark)]"
                    onClick={() => {
                        dispatch(openUserProfile())
                        dispatch(closeSettings())
                        dispatch(closeApiKey())
                        dispatch(closeLicenseKey())
                    }}
                >
                    <BotAvatar />
                </div>
            )
        },
        [dispatch]
    )

    const renderBotContent = useCallback(
        (
            messageText: string | undefined,
            shouldShowTypingEffect: boolean,
            messageId: string
        ) => {
            return (
                <>
                    {shouldShowTypingEffect && (
                        <div className="hidden">
                            <TypingEffect
                                text={String(messageText)}
                                onProgress={setDisplayedText}
                                onTypingComplete={() => {
                                    handleTypingComplete(messageId)
                                }}
                            />
                        </div>
                    )}
                    <div className="whitespace-pre-wrap break-all">
                        <Markdown components={markdownComponents}>
                            {shouldShowTypingEffect
                                ? displayedText
                                : String(messageText)}
                        </Markdown>
                    </div>
                </>
            )
        },
        [displayedText, markdownComponents, handleTypingComplete]
    )

    const renderUserContent = useCallback((messageText: string | undefined) => {
        return (
            <p
                className={cn(
                    'mb-1 w-full rounded-lg bg-[var(--bg-user-text-color)] p-3 text-[var(--text-color-dark)] transition-all duration-500'
                )}
            >
                {messageText}
            </p>
        )
    }, [])

    const renderImages = useCallback(
        (imageUrls?: string[]) => {
            if (!imageUrls || imageUrls.length === 0) return null
            return (
                <div
                    className={cn(
                        'mt-3 grid w-[40%] grid-cols-2 gap-2 rounded-lg bg-[var(--bg-user-text-color)] p-3 text-[var(--text-color-dark)] transition-all duration-500',
                        imageUrls.length === 1 && 'grid-cols-1'
                    )}
                >
                    {imageUrls.map((imageUrl: any, imgIndex: any) => (
                        <div className="relative" key={imgIndex}>
                            <img
                                src={imageUrl}
                                alt={`${imgIndex + 1}`}
                                className="h-[180px] w-full cursor-pointer rounded-lg object-cover"
                                onClick={() => handleImageClick(imageUrls)}
                            />
                            <DownloadIcon className="absolute bottom-2 right-2 cursor-pointer" />
                        </div>
                    ))}
                </div>
            )
        },
        [handleImageClick]
    )

    const renderActions = useCallback(
        (messageText?: string, messageCode?: string) => {
            return (
                <div
                    className={cn(
                        'absolute bottom-2 right-2 flex gap-2 bg-[var(--bg-ai-bot-text-color)] transition-all duration-500',
                        messageCode && 'static mt-2 flex justify-end'
                    )}
                >
                    <CopyToClipboard
                        text={
                            (messageText || '') +
                            (messageCode ? '\n' + messageCode : '')
                        }
                        onCopy={handleCopy}
                    >
                        <CopyIcon className="cursor-pointer duration-300 active:scale-75" />
                    </CopyToClipboard>
                    <Popover>
                        <PopoverTrigger>
                            <ThreeDotVerticalIcon className="cursor-pointer transition-all duration-500 active:scale-75" />
                        </PopoverTrigger>
                        <PopoverContent
                            className="flex w-[165px] flex-col gap-2 border-0 px-3 py-2 shadow-[1px_3px_12px_0px_rgba(0,0,0,0.25)]"
                            sideOffset={15}
                            style={{ backgroundColor: popupBgColor }}
                        >
                            {actionMenu.map((item, menuIndex) => (
                                <div
                                    key={menuIndex}
                                    className="menu-item flex cursor-pointer items-center gap-2 duration-300 active:scale-90"
                                >
                                    {item.icon}
                                    <span
                                        className="text-[12px]"
                                        style={{ color: popupOptionTextColor }}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </PopoverContent>
                    </Popover>
                </div>
            )
        },
        [handleCopy, popupBgColor, popupOptionTextColor]
    )

    return (
        <div className="flex w-full flex-col gap-8 overflow-y-auto">
            <>
                {(searchChat ? filteredMessages : messages)
                    .slice()
                    .map((message: any, index: number) => {
                        const effectiveMessages = searchChat
                            ? filteredMessages
                            : messages
                        const messageHasBeenTyped = typedMessages.includes(
                            message.id
                        )
                        const isLastMessage =
                            index === effectiveMessages.length - 1
                        const shouldShowTypingEffect =
                            isLastMessage && !messageHasBeenTyped

                        return (
                            <div
                                key={message.id || index}
                                className={'flex gap-7'}
                                ref={isLastMessage ? latestMessageRef : null}
                            >
                                {renderAvatar(message.sender)}
                                <div
                                    className={cn(
                                        'w-full',
                                        message.sender === 'bot' &&
                                            'relative w-full rounded-lg bg-[var(--bg-ai-bot-text-color)] p-3 text-[var(--text-color-dark)] transition-all duration-500',
                                        message.code && 'bg-transparent p-0'
                                    )}
                                >
                                    {message.sender === 'bot'
                                        ? renderBotContent(
                                              message.text,
                                              shouldShowTypingEffect,
                                              message.id
                                          )
                                        : renderUserContent(message.text)}

                                    {/* Render image */}
                                    {renderImages(message.imageUrls)}
                                    {/* Render Popup */}
                                    {message.sender === 'bot' &&
                                        renderActions(
                                            message.text,
                                            message.code
                                        )}
                                </div>
                            </div>
                        )
                    })}
                <div ref={latestMessageRef}></div>
                {/* Dialog for Image Preview */}
                {selectedImages && (
                    <Dialog
                        open={!!selectedImages}
                        onOpenChange={() => setSelectedImages(null)}
                    >
                        <DialogContent className="max-w-[930px] bg-white p-6">
                            <Carousel>
                                <CarouselContent>
                                    {selectedImages.map(
                                        (imageUrl, selectedindex) => (
                                            <CarouselItem key={selectedindex}>
                                                <img
                                                    src={imageUrl}
                                                    alt={`Selected preview`}
                                                    className="h-[548px] w-full rounded-lg object-cover"
                                                />
                                            </CarouselItem>
                                        )
                                    )}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </DialogContent>
                    </Dialog>
                )}
            </>
        </div>
    )
}

export default ChatBox
