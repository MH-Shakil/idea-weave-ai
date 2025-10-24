import { cn } from '../lib/utils'
import SettingsIcon from '../components/common/svg-icons/settings-icon'
import { Input } from '../components/ui/input'
import SearchIcon from '../components/common/svg-icons/search-icon'
import { Button } from '../components/ui/button'
import AddFolderIcon from '../components/common/svg-icons/add-folder-icon'
import ArchiveIcon from '../components/common/svg-icons/archive-icon'
import BookMarkIcon from '../components/common/svg-icons/bookmark-icon'
import SinglePostRepository from '../components/common/single-post-repository'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion'
import PlusIcon from '../components/common/svg-icons/plus-icon'
import EditIcon from '../components/common/svg-icons/edit-icon'
import DeleteIcon from '../components/common/svg-icons/delete-icon'
import LicenseIcon from '../components/common/svg-icons/license-icon'
import KeyIcon from '../components/common/svg-icons/key-icon'
import LanguageIcon from '../components/common/svg-icons/language-icon'
import ContactIcon from '../components/common/svg-icons/contact-icon'
import { useDispatch, useSelector } from 'react-redux'
import { closeLicenseKey, openLicenseKey } from '../reducers/lisenceKeyReducer'
import { closeApiKey, openApiKey } from '../reducers/apiKeyReducer'
import { setInputFocus } from '../reducers/inputFocus'
import { clearMessages } from '../reducers/chatMessages'
import { setSearchChat } from '../reducers/chatSearch'
import { RootState } from '../store'
import React, { FC, ReactNode, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../components/ui/tooltip'
import { closeSettings, openSettings } from '../reducers/settingsReducer'
import BotAvatar from '../components/common/svg-icons/bot-icon'
import {
    closeUserProfile,
    openUserProfile,
} from '../reducers/userProfileReducer'
import { closePrompt } from '../reducers/promptsReducer'
import { closeApplyingSettings } from '../reducers/applySettingsReducer'
import { closeOutputSettings } from '../reducers/outputSettingsReudcer'
import { closeAgentSelection } from '../reducers/agentSelectionReducer'
import { closeCreatePrompt } from '../reducers/createPromptsReducer'
import { closeEditPrompt } from '../reducers/editPromtsReducer'

interface SidebarProps {
    isSidebarOpen: boolean
}

type FileProps = {
    id: number
    title: string
    component: JSX.Element
}

type FolderProps = {
    folderName: string | null
    hasChildren: boolean
    files: FileProps[]
}

const ItemTypes = {
    FILE: 'file',
}

const DraggableFile: React.FC<{ file: FileProps }> = ({ file }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.FILE,
        item: file,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    return (
        <div
            ref={drag}
            className={`${
                isDragging ? 'opacity-50' : 'opacity-100'
            } cursor-pointer`}
        >
            {file.component}
        </div>
    )
}

const DroppableFolder: FC<{
    folder: FolderProps
    onDrop: (file: FileProps) => void
    children: ReactNode
}> = ({ onDrop, children }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.FILE,
        drop: (item: FileProps) => {
            onDrop(item)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }))

    return (
        <>
            {children && (
                <div
                    ref={drop}
                    className={` ${isOver ? '' : 'flex flex-col gap-1 bg-transparent'}`}
                >
                    {children}
                </div>
            )}
        </>
    )
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {
    const initialChatHistory: FolderProps[] = [
        {
            folderName: 'My Blog Posts',
            hasChildren: true,
            files: [
                {
                    id: 1,
                    title: 'Create Blog Post',
                    component: (
                        <SinglePostRepository title="Create Blog post" />
                    ),
                },
                {
                    id: 2,
                    title: 'Update Blog Post',
                    component: (
                        <SinglePostRepository title="Update Blog post" />
                    ),
                },
            ],
        },
        {
            folderName: 'Creating Image Post again',
            hasChildren: true,
            files: [
                {
                    id: 1,
                    title: 'Create Image Post',
                    component: (
                        <SinglePostRepository title="Creating Image Post" />
                    ),
                },
                {
                    id: 2,
                    title: 'Update Image Post',
                    component: (
                        <SinglePostRepository title="Updating Image Post" />
                    ),
                },
            ],
        },
        {
            folderName: null,
            hasChildren: false,
            files: [
                {
                    id: 3,
                    title: 'Miscellaneous Post 1',
                    component: (
                        <SinglePostRepository title="Miscellaneous Post 1" />
                    ),
                },
                {
                    id: 4,
                    title: 'Miscellaneous Post 2',
                    component: (
                        <SinglePostRepository title="Miscellaneous Post 2" />
                    ),
                },
                {
                    id: 5,
                    title: 'Miscellaneous Post 3',
                    component: (
                        <SinglePostRepository title="Miscellaneous Post 3" />
                    ),
                },
            ],
        },
    ]

    const [chatHistory, setChatHistory] = useState(initialChatHistory)
    const [newFolderName, setNewFolderName] = useState('')
    const [actionTools, setActionTools] = useState<string>('')
    const [editFolderIndex, setEditFolderIndex] = useState<number | null>(null)
    const [folderEditName, setFolderEditName] = useState('')

    const dispatch = useDispatch()

    const handleEditFolder = (index: number) => {
        setEditFolderIndex((prevIndex) => (prevIndex === index ? null : index))
        setFolderEditName(chatHistory[index].folderName || '')
    }

    const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFolderEditName(e.target.value)
    }

    const handleEditFolderKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Enter' && folderEditName.trim()) {
            setChatHistory((prevChatHistory) => {
                const updatedChatHistory = [...prevChatHistory]
                updatedChatHistory[index] = {
                    ...updatedChatHistory[index],
                    folderName: folderEditName,
                }
                return updatedChatHistory
            })
            setEditFolderIndex(null)
        }
    }
    const onNewChatClick = () => {
        dispatch(clearMessages())
        dispatch(setInputFocus(true))
    }
    const searchChat = useSelector(
        (state: RootState) => state.searchChat.searchChat
    )

    const handleAddFolder = () => {
        setActionTools((prev) => (prev === 'show-input' ? '' : 'show-input'))
    }
    const handleArchiveFolder = () => {
        setActionTools((prev) =>
            prev === 'archive-folder' ? '' : 'archive-folder'
        )
    }
    const handleBookmark = () => {
        setActionTools((prev) => (prev === 'bookmark' ? '' : 'bookmark'))
    }

    const handleCreateFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newFolderName.trim()) {
            const newFolder = {
                folderName: newFolderName,
                hasChildren: true,
                files: [],
            }

            setChatHistory((prevChatHistory) => {
                const folders = prevChatHistory.filter(
                    (folder) => folder.folderName !== null
                )
                const ungroupedFiles = prevChatHistory.filter(
                    (folder) => folder.folderName === null
                )

                const updatedChatHistory = [
                    ...folders,
                    newFolder,
                    ...ungroupedFiles,
                ]

                return updatedChatHistory
            })

            setNewFolderName('')
            setActionTools('')
        }
    }

    const handleDropFileIntoFolder = (
        folderIndex: number,
        droppedFile: FileProps
    ) => {
        setChatHistory((prevChatHistory) => {
            let updatedChatHistory = [...prevChatHistory]

            updatedChatHistory = updatedChatHistory.map((folder) => {
                if (folder.files.some((file) => file.id === droppedFile.id)) {
                    return {
                        ...folder,
                        files: folder.files.filter(
                            (file) => file.id !== droppedFile.id
                        ),
                    }
                }
                return folder
            })

            updatedChatHistory[folderIndex] = {
                ...updatedChatHistory[folderIndex],
                files: [...updatedChatHistory[folderIndex].files, droppedFile],
            }

            return updatedChatHistory
        })
    }

    return (
        <div
            className={cn(
                'fixed left-0 top-0 z-10 flex h-screen w-[300px] transform flex-col bg-[var(--sidebar-bg-color)] p-3 font-montserrat shadow-md transition-all duration-300 ease-in-out',
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            )}
        >
            <div className="flex grow flex-col gap-[10px] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between rounded-[5px] bg-[var(--bg-secondary-color)] px-[10px] py-3 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <div
                            className="h-[46px] w-[46px] cursor-pointer rounded-full bg-[var(--bg-primary-color)] transition-all duration-500"
                            onClick={() => {
                                dispatch(openUserProfile())
                                dispatch(closeSettings())
                                dispatch(closeApiKey())
                                dispatch(closeApplyingSettings())
                                dispatch(closeAgentSelection())
                                dispatch(closeOutputSettings())
                                dispatch(closePrompt())
                                dispatch(closeLicenseKey())
                                dispatch(closeCreatePrompt())
                                dispatch(closeEditPrompt())
                            }}
                        >
                            <BotAvatar />
                        </div>
                        <h3 className="font-medium text-[var(--text-color-base)]">
                            IdeaWaveAI
                        </h3>
                    </div>
                    <SettingsIcon
                        onClick={() => {
                            dispatch(openSettings())
                            dispatch(closeApplyingSettings())
                            dispatch(closeAgentSelection())
                            dispatch(closeOutputSettings())
                            dispatch(closePrompt())
                            dispatch(closeLicenseKey())
                            dispatch(closeApiKey())
                            dispatch(closeUserProfile())
                            dispatch(closeCreatePrompt())
                            dispatch(closeEditPrompt())
                        }}
                    />
                </div>
                {/* Search Bar */}
                <Input
                    type="email"
                    placeholder="Search Chat"
                    icon={<SearchIcon />}
                    value={searchChat}
                    onChange={(e) => dispatch(setSearchChat(e.target.value))}
                />
                {/* New Chat Layer */}
                <div className="flex items-center gap-2 transition-all duration-500">
                    <Button
                        variant="dark"
                        className="h-[35px] w-[170px] transition-all duration-500"
                        onClick={onNewChatClick}
                    >
                        + New Chat
                    </Button>

                    <div
                        className={cn(
                            'flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[4px] bg-[var(--bg-icon-color)] duration-300 hover:bg-[var(--bg-hover-color)] active:scale-95',
                            actionTools === 'show-input' &&
                                'bg-[var(--bg-dark-to-white-color)] hover:bg-[var(--bg-dark-to-white-color)]'
                        )}
                        onClick={handleAddFolder}
                    >
                        <AddFolderIcon
                            selectColor={actionTools === 'show-input'}
                        />
                    </div>
                    <div
                        className={cn(
                            'flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[4px] bg-[var(--bg-icon-color)] duration-300 hover:bg-[var(--bg-hover-color)] active:scale-95',
                            actionTools === 'archive-folder' &&
                                'bg-[var(--bg-dark-to-white-color)] hover:bg-[var(--bg-dark-to-white-color)]'
                        )}
                        onClick={handleArchiveFolder}
                    >
                        <ArchiveIcon
                            selectColor={actionTools === 'archive-folder'}
                        />
                    </div>
                    <div
                        className={cn(
                            'flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-[4px] bg-[var(--bg-icon-color)] duration-300 hover:bg-[var(--bg-hover-color)] active:scale-95',
                            actionTools === 'bookmark' &&
                                'bg-[var(--bg-dark-to-white-color)] hover:bg-[var(--bg-dark-to-white-color)]'
                        )}
                        onClick={handleBookmark}
                    >
                        <BookMarkIcon
                            selectColor={actionTools === 'bookmark'}
                        />
                    </div>
                </div>
                {actionTools === 'show-input' && (
                    <Input
                        type="text"
                        placeholder="New Folder Name"
                        value={newFolderName}
                        onChange={(e) => setNewFolderName(e.target.value)}
                        onKeyDown={handleCreateFolder}
                    />
                )}

                {/* Post Repository */}
                {chatHistory.map((item, index) => (
                    <DroppableFolder
                        key={index}
                        folder={item}
                        onDrop={(file) => handleDropFileIntoFolder(index, file)}
                    >
                        {item.hasChildren ? (
                            <Accordion type="single" collapsible>
                                <AccordionItem value={`item-${index}`}>
                                    <div className="flex items-center justify-between pb-[14px] font-montserrat">
                                        {editFolderIndex === index ? (
                                            <Input
                                                type="text"
                                                value={folderEditName}
                                                onChange={
                                                    handleFolderNameChange
                                                }
                                                onKeyDown={(e) =>
                                                    handleEditFolderKeyDown(
                                                        e,
                                                        index
                                                    )
                                                }
                                            />
                                        ) : (
                                            <AccordionTrigger className="py-0 font-medium text-[var(--bg-dark-to-white-color)]">
                                                {item.folderName &&
                                                item.folderName.length > 14 ? (
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger
                                                                asChild
                                                            >
                                                                <span>
                                                                    {item.folderName.slice(
                                                                        0,
                                                                        14
                                                                    ) + '... '}
                                                                    (
                                                                    {
                                                                        item
                                                                            .files
                                                                            .length
                                                                    }
                                                                    )
                                                                </span>
                                                            </TooltipTrigger>
                                                            <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                                                {
                                                                    item.folderName
                                                                }
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                ) : (
                                                    item.folderName +
                                                    ' ' +
                                                    `(${item.files.length})`
                                                )}
                                            </AccordionTrigger>
                                        )}

                                        <div className="flex justify-between gap-2">
                                            <div className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]">
                                                <PlusIcon />
                                            </div>
                                            <div
                                                className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]"
                                                onClick={() =>
                                                    handleEditFolder(index)
                                                }
                                            >
                                                <EditIcon />
                                            </div>
                                            <div className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]">
                                                <DeleteIcon />
                                            </div>
                                        </div>
                                    </div>
                                    {item.files.length > 0 && (
                                        <AccordionContent className="flex flex-col gap-2 border-b-0 pl-5">
                                            {item.files.map((file) => (
                                                <DraggableFile
                                                    key={file.id}
                                                    file={file}
                                                />
                                            ))}
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            </Accordion>
                        ) : item.files.length > 0 ? (
                            item.files.map((file) => (
                                <DraggableFile key={file.id} file={file} />
                            ))
                        ) : null}
                    </DroppableFolder>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <Button
                    className="justify-start"
                    variant="barnRed"
                    size="sm"
                    icon={<LicenseIcon />}
                    onClick={() => {
                        dispatch(openLicenseKey())
                        dispatch(closeApplyingSettings())
                        dispatch(closeAgentSelection())
                        dispatch(closeOutputSettings())
                        dispatch(closePrompt())
                        dispatch(closeApiKey())
                        dispatch(closeSettings())
                        dispatch(closeUserProfile())
                        dispatch(closeCreatePrompt())
                        dispatch(closeEditPrompt())
                    }}
                >
                    Enter License Key
                </Button>
                <Button
                    className="justify-start"
                    variant="barnRed"
                    size="sm"
                    icon={<KeyIcon />}
                    onClick={() => {
                        dispatch(openApiKey())
                        dispatch(closeLicenseKey())
                        dispatch(closeApplyingSettings())
                        dispatch(closeAgentSelection())
                        dispatch(closeOutputSettings())
                        dispatch(closePrompt())
                        dispatch(closeSettings())
                        dispatch(closeUserProfile())
                        dispatch(closeCreatePrompt())
                        dispatch(closeEditPrompt())
                    }}
                >
                    Enter API Key
                </Button>
                <Button
                    className="justify-start"
                    variant="transparent"
                    size="sm"
                    icon={<LanguageIcon />}
                >
                    Language
                </Button>
                <Button
                    className="justify-start"
                    variant="transparent"
                    size="sm"
                    icon={<ContactIcon />}
                >
                    Contact Us
                </Button>
            </div>
        </div>
    )
}

export default Sidebar
