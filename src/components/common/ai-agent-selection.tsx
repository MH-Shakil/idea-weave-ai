import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '../ui/input'
import SingleAgent from './single-agent'
import CloseIcon from './svg-icons/close-icon'
import SearchIcon from './svg-icons/search-icon'
import { closeAgentSelection } from '../../reducers/agentSelectionReducer'

const SkeletonLoader = () => {
    return (
        <div className="bg-cultured flex w-full animate-pulse items-center gap-2 rounded-2xl py-1.5">
            <div className="flex h-[100px] w-full animate-pulse gap-4 rounded-md bg-[var(--bg-icon-color)] p-2">
                <div className="h-full w-[82px] animate-pulse rounded-md bg-[var(--bg-secondary-color)] p-2"></div>
                <div className="w-full">
                    <div className="mb-1 h-[20px] w-[40%] animate-pulse rounded-md bg-[var(--bg-secondary-color)]"></div>
                    <div className="h-[60px] w-[80%] animate-pulse rounded-md bg-[var(--bg-secondary-color)]"></div>
                </div>
            </div>
        </div>
    )
}
interface AiAgentSelectionProps {
    title?: string
    setSelectAgent?: (value: boolean) => void
}

const AiAgentSelection: React.FC<AiAgentSelectionProps> = () => {
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState<string>('')

    const [filteredAgents, setFilteredAgents] = useState<
        { id: number; name: string }[]
    >([])

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const agents = [
        { id: 1, name: 'English Teacher' },
        { id: 2, name: 'French Teacher' },
        { id: 3, name: 'Spanish Teacher' },
        { id: 4, name: 'Math Tutor' },
        { id: 5, name: 'Science Guide' },
        { id: 6, name: 'History Mentor' },
        { id: 7, name: 'Geography Teacher' },
        { id: 8, name: 'Coding Instructor' },
    ]

    useEffect(() => {
        if (searchTerm) {
            setIsLoading(true)

            const timeoutId = setTimeout(() => {
                const result = agents.filter((agent) =>
                    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                setFilteredAgents(result)
                setIsLoading(false)
            }, 1000)

            return () => clearTimeout(timeoutId)
        } else {
            setFilteredAgents(agents)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm])

    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <CloseIcon
                className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                onClick={() => {
                    dispatch(closeAgentSelection())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                Select your AI Agent
            </h2>

            {/* Search bar */}
            <div className="mx-auto mb-12 mt-10 max-w-[520px]">
                <Input
                    type="text"
                    placeholder="Search AI agent by name"
                    icon={<SearchIcon />}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Loader */}
            {isLoading ? (
                <div className="flex flex-col gap-3">
                    {[...Array(3)].map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))}
                </div>
            ) : (
                <>
                    {/* Ai Agent List */}
                    <h5 className="pb-6 text-[16px] font-medium text-[var(--text-color-dark)]">
                        System Instruction/ AI Agent
                    </h5>

                    <div className="flex max-h-[370px] flex-col gap-2 overflow-y-auto">
                        {filteredAgents.length > 0 ? (
                            filteredAgents.map((agent) => (
                                <SingleAgent key={agent.id} name={agent.name} />
                            ))
                        ) : (
                            <p className="text-center text-[var(--text-color-muted)]">
                                No agents found
                            </p>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default AiAgentSelection
