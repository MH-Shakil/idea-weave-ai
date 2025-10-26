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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu'

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

    const getNextFileId = (history: FolderProps[]): number => {
        let maxId = 0
        history.forEach((folder) =>
            folder.files.forEach((file) => {
                if (file.id > maxId) maxId = file.id
            })
        )
        return maxId + 1
    }

    const handleAddChatToFolder = (folderIndex: number): void => {
        setChatHistory((prev) => {
            const updated = [...prev]
            const nextId = getNextFileId(prev)
            const newTitle = `New Chat ${updated[folderIndex].files.length + 1}`
            const newFile: FileProps = {
                id: nextId,
                title: newTitle,
                component: <SinglePostRepository title={newTitle} />,
            }
            updated[folderIndex] = {
                ...updated[folderIndex],
                files: [...updated[folderIndex].files, newFile],
            }
            return updated
        })
    }

    const handleDeleteFolderByIndex = (folderIndex: number): void => {
        setChatHistory((prev) => prev.filter((_, i) => i !== folderIndex))
    }

    // ---------- Render helpers ----------
    const renderFolderActions = (index: number): JSX.Element => (
        <DropdownMenu>
            <DropdownMenuTrigger className="opacity-0 transition-opacity group-hover:opacity-100">
                <span className="material-symbols-outlined text-[20px] text-[var(--text-color-base)]">
                    more_horiz
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[var(--bg-primary-color)] text-[var(--text-color-base)]">
                <DropdownMenuItem onSelect={() => handleAddChatToFolder(index)}>
                    <PlusIcon />
                    <span className="ml-2">Add Chat</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleEditFolder(index)}>
                    <EditIcon />
                    <span className="ml-2">Rename</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onSelect={() => handleDeleteFolderByIndex(index)}
                >
                    <DeleteIcon />
                    <span className="ml-2 text-red-500">Delete</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
    const renderFolderHeader = (
        item: FolderProps,
        index: number
    ): JSX.Element => {
        return (
            <div className="ring-[var(--bg-border-color)]/60 font-montserrat group rounded-xl border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] px-3.5 py-2.5 shadow-sm ring-1 ring-inset transition-all duration-300 hover:shadow-md">
                <div className="flex items-center justify-between">
                    {editFolderIndex === index ? (
                        <Input
                            type="text"
                            value={folderEditName}
                            onChange={handleFolderNameChange}
                            onKeyDown={(e) => handleEditFolderKeyDown(e, index)}
                        />
                    ) : (
                        <AccordionTrigger className="flex flex-1 items-center gap-2 py-0 text-[13px] font-medium tracking-wide text-[var(--text-color-base)] hover:opacity-90">
                            <span className="truncate">
                                {item.folderName &&
                                item.folderName.length > 18 ? (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span>
                                                    {item.folderName.slice(
                                                        0,
                                                        18
                                                    ) + '...'}
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent className="max-w-[300px] bg-[var(--bg-primary-color)] text-[var(--text-color-dark)]">
                                                {item.folderName}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ) : (
                                    item.folderName
                                )}
                            </span>
                            <span className="rounded-full bg-[linear-gradient(to_right,_var(--primary-color),_var(--primary-color-second))] px-2 py-0.5 text-xs font-semibold text-white">
                                {item.files.length}
                            </span>
                        </AccordionTrigger>
                    )}
                    {renderFolderActions(index)}
                </div>
            </div>
        )
    }

    const renderFolderFiles = (
        item: FolderProps,
        index: number
    ): JSX.Element | null => {
        if (item.files.length === 0) return null
        return (
            <AccordionContent className="mt-2 flex flex-col gap-2 border-b-0 pl-0">
                {item.files.map((file) => (
                    <div
                        key={file.id}
                        className="rounded-lg border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] px-2.5 py-2 transition-all duration-200 hover:-translate-y-[1px] hover:bg-[var(--bg-hover-color)]"
                    >
                        <DraggableFile
                            file={{
                                ...file,
                                component: (
                                    <SinglePostRepository
                                        title={file.title}
                                        onDelete={() =>
                                            setChatHistory((prev) => {
                                                const updated = [...prev]
                                                updated[index] = {
                                                    ...updated[index],
                                                    files: updated[
                                                        index
                                                    ].files.filter(
                                                        (f) => f.id !== file.id
                                                    ),
                                                }
                                                return updated
                                            })
                                        }
                                    />
                                ),
                            }}
                        />
                    </div>
                ))}
            </AccordionContent>
        )
    }

    const renderFolder = (item: FolderProps, index: number): JSX.Element => (
        <DroppableFolder
            key={index}
            folder={item}
            onDrop={(file) => handleDropFileIntoFolder(index, file)}
        >
            {item.hasChildren ? (
                <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                        {renderFolderHeader(item, index)}
                        {renderFolderFiles(item, index)}
                    </AccordionItem>
                </Accordion>
            ) : item.files.length > 0 ? (
                item.files.map((file) => (
                    <div
                        key={file.id}
                        className="rounded-lg border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] px-2.5 py-2 transition-all duration-200 hover:-translate-y-[1px] hover:bg-[var(--bg-hover-color)]"
                    >
                        <DraggableFile file={file} />
                    </div>
                ))
            ) : null}
        </DroppableFolder>
    )

    return (
        <div
            className={cn(
                'font-montserrat fixed left-0 top-0 z-20 flex h-screen w-[320px] transform flex-col border-r border-[var(--bg-border-color)] bg-[var(--sidebar-bg-color)] p-3 shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out',
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            )}
        >
            <div className="flex grow flex-col gap-[10px] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between rounded-xl border border-[var(--bg-border-color)] bg-[var(--bg-secondary-color)] px-[10px] py-3 shadow-sm transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <div
                            className="ring-[var(--bg-border-color)]/50 h-[46px] w-[46px] cursor-pointer rounded-full bg-[var(--bg-primary-color)] ring-1 ring-inset transition-all duration-500 hover:scale-[1.02]"
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
                            {/* <BotAvatar /> */}
                            <img
                                src="./images/IdeaWeaveAi-transparent.png"
                                alt="bot-avatar"
                                width={46}
                                height={46}
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="font-medium tracking-wide text-[var(--text-color-base)]">
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
                    className="focus:ring-[var(--primary-color)]/30 rounded-full border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] focus:ring-2"
                />
                {/* New Chat Layer */}
                <div className="flex items-center gap-2 transition-all duration-500">
                    <Button
                        variant="primary"
                        className="h-[38px] w-[180px] rounded-md shadow-sm transition-all duration-500 hover:shadow"
                        onClick={onNewChatClick}
                    >
                        + New Chat
                    </Button>

                    <div
                        className={cn(
                            'flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] shadow-sm duration-300 hover:shadow active:scale-95',
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
                            'flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] shadow-sm duration-300 hover:shadow active:scale-95',
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
                            'flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-[var(--bg-border-color)] bg-[var(--bg-primary-color)] shadow-sm duration-300 hover:shadow active:scale-95',
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
                        className="border border-[var(--bg-border-color)]"
                    />
                )}

                {/* Post Repository */}
                {chatHistory.map((item, index) => renderFolder(item, index))}
            </div>

            <div className="mt-2 flex flex-col gap-2 border-t border-[var(--bg-border-color)] pt-3">
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
