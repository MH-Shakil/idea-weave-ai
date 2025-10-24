import { useDispatch } from 'react-redux'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import CloseIcon from '../svg-icons/close-icon'
import { closeEditPrompt } from '../../../reducers/editPromtsReducer'

interface EditPromptProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

const EditPrompt: React.FC<EditPromptProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedActionButton,
}) => {
    const dispatch = useDispatch()
    return (
        <div className="relative w-full overflow-y-auto rounded-lg bg-[var(--sidebar-bg-color)] px-14 py-4 font-montserrat transition-all duration-500">
            <CloseIcon
                className="absolute right-5 top-5 cursor-pointer duration-300 active:scale-90"
                onClick={() => {
                    dispatch(closeEditPrompt())
                }}
            />
            <h2 className="border-b border-[var(--bg-border-color)] pb-5 text-center text-[24px] font-semibold text-[var(--text-color-dark)]">
                Edit prompt
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
                        placeholder="Enter your tag"
                        className="h-[50px] border-0 bg-[var(--bg-primary-color)] transition-all duration-500"
                    />
                    <div className="mt-2 flex gap-2">
                        <div className="border border-[var(--text-color-dark)] bg-[var(--bg-secondary-color)] p-1 text-[12px] leading-[15px] text-[var(--text-color-dark)] transition-all duration-500">
                            Design
                            <span className="ml-3 cursor-pointer">X</span>
                        </div>
                        <div className="border border-[var(--text-color-dark)] bg-[var(--bg-secondary-color)] p-1 text-[12px] leading-[15px] text-[var(--text-color-dark)] transition-all duration-500">
                            Marketing
                            <span className="ml-3 cursor-pointer">X</span>
                        </div>
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
                        Save
                    </Button>
                    <Button
                        variant="outline"
                        className="w-[100px] font-bold"
                        onClick={() => {
                            dispatch(closeEditPrompt())
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EditPrompt
