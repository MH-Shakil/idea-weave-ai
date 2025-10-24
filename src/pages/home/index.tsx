import React, { useState, useRef, useMemo, useCallback } from 'react'
import ThinkBoxLogo from '../../components/common/svg-icons/thinkbox-logo'
// import PrimarySelect from '../../components/common/primary-select'
import InfoIcon from '../../components/common/svg-icons/info-icon'
import { useTranslation } from 'react-i18next'
import BottomLayout from '../../components/common/bottom-layout'
import AiAgentSelection from '../../components/common/ai-agent-selection'
import ChatBox from '../../components/common/chat-box'
import PromptSelection from '../../components/common/prompt-selection'
import CreatePrompt from '../../components/common/prompt-selection/create-prompt'
import RegularSettings from '../../components/common/regular-settings'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import LicenseKey from '../../components/common/license-key'
import Apikey from '../../components/common/api-key'
import UserProfile from '../../components/common/user-profile'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../../components/ui/tooltip'
import { v4 as uuidv4 } from 'uuid'
import { addMessage } from '../../reducers/chatMessages'
import EditPrompt from '../../components/common/prompt-selection/edit-prompt'
// import Settings from '../../components/common/settings'
import OutputSettings from '../../components/common/output-settings'
import Settings from '../../components/common/settings'
import { IoChevronDown } from 'react-icons/io5'
import { closeApplyingSettings } from '../../reducers/applySettingsReducer'
import { closePrompt } from '../../reducers/promptsReducer'
import { closeLicenseKey } from '../../reducers/lisenceKeyReducer'
import { closeApiKey } from '../../reducers/apiKeyReducer'
import { closeSettings } from '../../reducers/settingsReducer'
import { closeUserProfile } from '../../reducers/userProfileReducer'
import { openAgentSelection } from '../../reducers/agentSelectionReducer'
import { closeCreatePrompt } from '../../reducers/createPromptsReducer'
import { closeEditPrompt } from '../../reducers/editPromtsReducer'

const GO_FOR_TUTORIAL = `In Go (Golang), the \`for\` loop is the only looping construct provided, and it can be used in several ways to iterate over a range of values. Here are a few common ways to use the \`for\` loop in Go:

### Basic \`for\` Loop

The basic form of a \`for\` loop uses the initialization, condition, and post statement:

\`\`\`go
package main

import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
}
\`\`\`

In this example, \`i\` is initialized to \`0\`, and the loop continues as long as \`i\` is less than \`5\`. After each iteration, \`i\` is incremented by \`1\`.

### Looping Over a Range

You can also use \`for\` to iterate over a range of numbers using the \`range\` keyword:

\`\`\`go
package main

import "fmt"

func main() {
    for i := range [5]int{0, 1, 2, 3, 4} {
        fmt.Println(i)
    }
}
\`\`\`

### Infinite Loop

You can create an infinite loop using \`for\` with no conditions:

\`\`\`go
package main

import "fmt"

func main() {
    i := 0
    for {
        fmt.Println(i)
        i++
        if i == 5 {
            break // Exit the loop when i reaches 5
        }
    }
}
\`\`\`

### For Loop with Condition Only

You can omit the initialization and post statements to create a loop with only a condition:

\`\`\`go
package main

import "fmt"

func main() {
    i := 0
    for i < 5 {
        fmt.Println(i)
        i++
    }
}
\`\`\`

### Looping Over a Slice or Array

You can also use \`for\` to loop over elements in a slice or array using \`range\`.

\`\`\`go
package main

import "fmt"

func main() {
    numbers := []int{1, 2, 3, 4, 5}
    for index, value := range numbers {
        fmt.Printf("Index: %d, Value: %d\n", index, value)
    }
}
\`\`\`

In the above example, \`index\` receives the index of the current element, and \`value\` receives the corresponding value from the slice.

### Conclusion

These examples illustrate the versatility of the \`for\` loop in Go. You can customize the structure to suit your needs, whether it's an indexed loop, an infinite loop, or iterating over collections like slices or maps.`

export interface Message {
    id: string
    sender: 'user' | 'bot'
    text?: string
    text2?: string
    text3?: string
    text4?: string
    code?: string
    code2?: string
    code3?: string
    code4?: string
    imageUrls?: string[]
    content?: string
    examples?: any
}

const HomePage = (): JSX.Element => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const messages = useSelector((state: any) => state.messages.messages)
    const [filePreviews, setFilePreviews] = useState<string[]>([])
    const [userInput, setUserInput] = useState<string>('')
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [textareaHeight, setTextareaHeight] = useState<string>('36px')
    const { isLicenseKeyOpen } = useSelector(
        (state: RootState) => state.licenseKey
    )
    const { isSettingsOpen } = useSelector((state: RootState) => state.settings)
    const { isUserProfileOpen } = useSelector(
        (state: RootState) => state.userProfile
    )
    const { isApiKeyOpen } = useSelector((state: RootState) => state.apiKey)
    const { isApplyingSettingsOpen } = useSelector(
        (state: RootState) => state.applySettings
    )
    const { isOutputSettingsOpen } = useSelector(
        (state: RootState) => state.outputSettings
    )
    const { isPromptOpen } = useSelector((state: RootState) => state.prompts)
    const { isAgentSelectionOpen } = useSelector(
        (state: RootState) => state.agentSelections
    )
    const { isCreatePromptOpen } = useSelector(
        (state: RootState) => state.createPrompts
    )
    const { isEditPromptOpen } = useSelector(
        (state: RootState) => state.editPrompts
    )

    const handleSendMessage = useCallback(() => {
        if (!userInput.trim() && !filePreviews.length) return

        const newUserMessage: Message = {
            id: uuidv4(),
            sender: 'user',
            text: userInput.trim() || '',
            imageUrls: filePreviews.length ? filePreviews : [],
        }

        let botResponse: Message

        const normalizedInput = userInput.toLowerCase()

        if (normalizedInput.includes('images')) {
            botResponse = {
                id: uuidv4(),
                sender: 'bot',
                text: 'Here are some images you requested:',
                imageUrls: ['/images/image-1.jpg', '/images/image-2.png'],
            }
        } else if (
            normalizedInput.includes('hello') ||
            normalizedInput.includes('hi')
        ) {
            botResponse = {
                id: uuidv4(),
                sender: 'bot',
                text: `Hello! How can I help you today? If you want to see what I can do, type "help".`,
            }
        } else if (normalizedInput.includes('help')) {
            botResponse = {
                id: uuidv4(),
                sender: 'bot',
                text: `Here are some things you can try:\n\n- images\n- hello\n- markdown\n- code`,
            }
        } else if (normalizedInput.includes('markdown')) {
            botResponse = {
                id: uuidv4(),
                sender: 'bot',
                text: `### Markdown demo\n\n- **Bold item**\n- _Italic item_\n- [Link](https://example.com)\n\n> Tip: You can also type \`code\` to see a code example.`,
            }
        } else if (normalizedInput.includes('code')) {
            botResponse = {
                id: uuidv4(),
                sender: 'bot',
                text: `Here's a small JavaScript example:\n\n\n\n\`\`\`js\nfunction sum(a, b) {\n  return a + b\n}\n\nconsole.log(sum(2, 3)) // 5\n\n// Async example\nasync function fetchJson(url) {\n  const res = await fetch(url)\n  if (!res.ok) throw new Error('Request failed')\n  return res.json()\n}\n\`\`\``,
            }
        } else {
            botResponse = {
                id: uuidv4(),
                sender: 'bot',
                text: GO_FOR_TUTORIAL,
            }
        }

        dispatch(addMessage(newUserMessage))
        dispatch(addMessage(botResponse))

        setUserInput('')
        setFilePreviews([])

        const textarea = document.querySelector('textarea')
        if (textarea) {
            textarea.style.height = '36px'
        }
        setTextareaHeight('36px')
    }, [dispatch, filePreviews, userInput])

    const handleKeyPress = useCallback(
        (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
            }
        },
        [handleSendMessage]
    )

    const handleAttachmentClick = useCallback(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }, [])
    const isOtherSectionActive = useMemo(
        () =>
            isLicenseKeyOpen ||
            isApiKeyOpen ||
            isSettingsOpen ||
            isUserProfileOpen ||
            isPromptOpen ||
            isOutputSettingsOpen ||
            isApplyingSettingsOpen ||
            isAgentSelectionOpen ||
            isCreatePromptOpen ||
            isEditPromptOpen,
        [
            isLicenseKeyOpen,
            isApiKeyOpen,
            isSettingsOpen,
            isUserProfileOpen,
            isPromptOpen,
            isOutputSettingsOpen,
            isApplyingSettingsOpen,
            isAgentSelectionOpen,
            isCreatePromptOpen,
            isEditPromptOpen,
        ]
    )

    return (
        <>
            <div className="flex grow overflow-y-auto px-9 font-montserrat">
                {isAgentSelectionOpen && <AiAgentSelection />}
                {isCreatePromptOpen && <CreatePrompt />}
                {isEditPromptOpen && <EditPrompt />}
                {isPromptOpen && <PromptSelection />}
                {isOutputSettingsOpen && <OutputSettings />}
                {isApplyingSettingsOpen && <RegularSettings />}
                {isUserProfileOpen && <UserProfile />}
                {isSettingsOpen && <Settings />}
                {isLicenseKeyOpen && <LicenseKey />}
                {isApiKeyOpen && <Apikey />}
                {!isOtherSectionActive && (
                    <>
                        {messages.length === 0 ? (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-5">
                                <ThinkBoxLogo />
                                <div className="flex items-center gap-2">
                                    <h5 className="text-sm font-medium text-[var(--text-color-base)]">
                                        {t('System Instruction:')}
                                    </h5>
                                    <div
                                        className="flex h-[30px] w-[235px] cursor-pointer items-center justify-between rounded-[4px] border border-[var(--text-color-base)] px-2 py-1 font-inter"
                                        onClick={() => {
                                            dispatch(openAgentSelection())
                                            dispatch(closeApplyingSettings())
                                            dispatch(closePrompt())
                                            dispatch(closeLicenseKey())
                                            dispatch(closeApiKey())
                                            dispatch(closeSettings())
                                            dispatch(closeUserProfile())
                                            dispatch(closeCreatePrompt())
                                            dispatch(closeEditPrompt())
                                        }}
                                    >
                                        <h3 className="text-[14px] text-[var(--text-color-base)]">
                                            {t('English Teacher')}
                                        </h3>
                                        <IoChevronDown className="h-4 w-4 opacity-50" />
                                    </div>

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span>
                                                    <InfoIcon />
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                                <p>
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's standard dummy
                                                    text ever since the 1500s,
                                                    when an unknown printer
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <p className="w-[50%] text-center text-[var(--text-color-dark-third)]">
                                    {t('englishTeacherDescription')}
                                </p>
                            </div>
                        ) : (
                            <ChatBox messages={messages} />
                        )}
                    </>
                )}
            </div>

            <BottomLayout
                handleAttachmentClick={handleAttachmentClick}
                fileInputRef={fileInputRef}
                setUserInput={setUserInput}
                handleKeyPress={handleKeyPress}
                handleSendMessage={handleSendMessage}
                userInput={userInput}
                filePreviews={filePreviews}
                setFilePreviews={setFilePreviews}
                textareaHeight={textareaHeight}
                setTextareaHeight={setTextareaHeight}
            />
        </>
    )
}

export default HomePage
