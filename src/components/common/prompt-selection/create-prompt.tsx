import { useDispatch } from 'react-redux'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import CloseIcon from '../svg-icons/close-icon'
import { useState } from 'react'
import { closeCreatePrompt } from '../../../reducers/createPromptsReducer'

interface CreatePromptProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

const CreatePrompt: React.FC<CreatePromptProps> = ({
    setSelectedActionButton,
}) => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    const [tags, setTags] = useState<string[]>([])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            if (!tags.includes(inputValue.trim())) {
                setTags([...tags, inputValue.trim()])
            }
            setInputValue('')
        }
    }

    const removeTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
    }
    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <CloseIcon
                className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                onClick={() => {
                    dispatch(closeCreatePrompt())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                Create prompt
            </h2>
            <div className="mx-auto mt-7 flex w-[500px] flex-col gap-9">
                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-medium text-[var(--text-color-dark)]">
                        Prompt Name:
                    </label>
                    <Input
                        type="text"
                        placeholder="Enter prompt name"
                        className="h-[50px] border-0 bg-[var(--bg-primary-color)] transition-all duration-500"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-medium text-[var(--text-color-dark)]">
                        Category Tag:
                    </label>
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your tag"
                        className="h-[50px] border-0 bg-[var(--bg-primary-color)] transition-all duration-500"
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="flex items-center border border-[var(--text-color-dark)] bg-[var(--bg-secondary-color)] p-1 text-[12px] leading-[15px] text-[var(--text-color-dark)] transition-all duration-500"
                            >
                                {tag}
                                <span
                                    className="ml-3 cursor-pointer"
                                    onClick={() => removeTag(tag)}
                                >
                                    X
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[16px] font-medium text-[var(--text-color-dark)]">
                        Prompt Description:
                    </label>
                    <p className="text-[12px] text-[var(--text-color-dark-second)]">
                        Ex - Please write code in "Language" programming
                        language
                    </p>
                    <textarea
                        placeholder="Prompt Description"
                        className="resize-none border-0 bg-[var(--bg-primary-color)] px-3 py-2 transition-all duration-500 focus:outline-none"
                        rows={4}
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="primary" className="w-[100px]">
                        Create
                    </Button>
                    <Button
                        variant="outline"
                        className="w-[100px] font-bold"
                        onClick={() =>
                            setSelectedActionButton &&
                            setSelectedActionButton('')
                        }
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePrompt
