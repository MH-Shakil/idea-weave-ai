import React, { useState, useRef, useMemo, useCallback } from 'react'
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
import { v4 as uuidv4 } from 'uuid'
import { addMessage } from '../../reducers/chatMessages'
import EditPrompt from '../../components/common/prompt-selection/edit-prompt'
// import Settings from '../../components/common/settings'
import OutputSettings from '../../components/common/output-settings'
import Settings from '../../components/common/settings'

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
            <div className="font-montserrat flex grow overflow-y-auto px-9">
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
                            <div className="flex h-full w-full items-center justify-center">
                                <div className="mx-auto w-full max-w-[720px] rounded-2xl border border-[var(--bg-border-color)] bg-gradient-to-br from-[var(--bg-track-color)] to-[var(--bg-ai-bot-text-color)] p-8 text-center shadow-sm">
                                    <img
                                        src="./images/IdeaWeaveAi-with-log.png"
                                        alt="IdeaWeaveAI logo"
                                        className="mx-auto mb-4 h-[140px] w-[140px]"
                                    />
                                    <h1 className="font-extrabold bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] bg-clip-text text-3xl text-transparent">
                                        IdeaWeaveAI
                                    </h1>
                                    <p className="mx-auto mt-2 max-w-[560px] text-[var(--text-color-dark-second)]">
                                        Your AI partner for content, code and
                                        creative ideation. Ask anything or try a
                                        quick prompt below.
                                    </p>

                                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                        <button
                                            className="rounded-full bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] px-4 py-2 text-sm font-medium text-white shadow active:scale-95"
                                            onClick={() =>
                                                setUserInput(
                                                    'Create a blog post outline about AI productivity tools'
                                                )
                                            }
                                        >
                                            Create a blog post outline
                                        </button>
                                        <button
                                            className="rounded-full bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] px-4 py-2 text-sm font-medium text-white shadow active:scale-95"
                                            onClick={() =>
                                                setUserInput(
                                                    'Generate 5 catchy titles for a tech newsletter'
                                                )
                                            }
                                        >
                                            Generate 5 catchy titles
                                        </button>
                                        <button
                                            className="rounded-full bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] px-4 py-2 text-sm font-medium text-white shadow active:scale-95"
                                            onClick={() =>
                                                setUserInput(
                                                    'Explain closures in JavaScript with a simple example'
                                                )
                                            }
                                        >
                                            Explain JS closures
                                        </button>
                                    </div>

                                    <p className="mt-6 text-xs text-[var(--text-color-dark-third)]">
                                        Tip: Press Enter to send, Shift+Enter
                                        for a new line
                                    </p>
                                </div>
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
