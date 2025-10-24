import { Input } from '../../ui/input'
import GptIcon from '../svg-icons/gpt-icon'
import { Button } from '../../ui/button'
import GeminiStar from '../svg-icons/gemini-star-icon'
import { Switch } from '../../ui/switch'

interface IdeaWaveAiProps {
    title?: string
    setSelectedActionButton?: (value: string) => void
}

const IdeaWaveAi: React.FC<IdeaWaveAiProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSelectedActionButton,
}) => {
    return (
        <div className="max-h-[calc(100%-200px)] overflow-y-auto px-9 py-5 font-montserrat transition-all duration-500">
            <div className="flex justify-end">
                <Button
                    variant="primary"
                    // onClick={() => {
                    //     setSelectedActionButton &&
                    //         setSelectedActionButton('create-prompt')
                    // }}
                >
                    + Add new profile
                </Button>
            </div>
            <div className="mt-[30px] flex w-full items-center justify-between gap-3">
                <label className="block flex-shrink-0 text-[16px] font-medium text-[var(--text-color-dark)]">
                    Name :
                </label>
                <Input
                    mainClassName="w-full"
                    type="text"
                    placeholder="IdeaWaveAI"
                    className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] focus:outline-none"
                />
            </div>
            <div className="mt-4 flex w-full items-start justify-between gap-3">
                <label className="mt-3 block flex-shrink-0 text-[16px] font-medium text-[var(--text-color-dark)]">
                    URL :
                </label>
                <div className="w-full">
                    <Input
                        mainClassName="w-full"
                        type="text"
                        placeholder="https://IdeaWaveAI"
                        className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] focus:outline-none"
                    />
                    <p className="mt-2 cursor-pointer text-[14px] font-medium text-[var(--text-color-dark)]">
                        OR
                    </p>
                    <label>
                        <div className="mt-2 w-[73px] cursor-pointer border border-[var(--text-color-dark)] bg-[var(--bg-secondary-color)] p-1 text-center text-[14px] leading-[15px] text-[var(--text-color-dark)]">
                            Browse
                            <input
                                // ref={fileInputRef}
                                type="file"
                                style={{ display: 'none' }}
                                // onChange={handleFileChange}
                                multiple
                                accept="image/*"
                            />
                        </div>
                    </label>
                </div>
            </div>
            <div className="mt-9 flex items-center gap-[10px]">
                <Switch icon={false} />
                <p className="text-[12px] font-medium text-[var(--text-color-base)]">
                    Use new API keys for this profile
                </p>
            </div>
            <div className="mt-[40px]">
                <h5 className="text-[14px] font-semibold text-[var(--text-color-dark)]">
                    Enter AI Provider API Keys
                </h5>
                <h5 className="text-[12px] text-[var(--text-color-base)]">
                    It will be stored locally in your computer with encryption.
                    we do not store anything in cloud
                </h5>
            </div>
            <h5 className="mt-[30px] text-[16px] font-medium text-[var(--text-color-dark)]">
                OpenAI API Key{' '}
                <span className="cursor-pointer text-[14px] text-[var(--text-color-dark-fifth)]">
                    (How to get OpenAI API key)
                </span>
            </h5>
            <div className="mb-11 mt-4 flex w-full items-center gap-4">
                <GptIcon />
                <Input
                    mainClassName="w-full"
                    type="text"
                    placeholder="XXXXXXXXX-XXXXXXXXX"
                    className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] focus:outline-none"
                />
                <Button
                    variant="primary"
                    className="h-[45px] w-[100px] flex-shrink-0"
                >
                    Save
                </Button>
            </div>
            <h5 className="mt-[30px] text-[16px] font-medium text-[var(--text-color-dark)]">
                Gemini API Key{' '}
                <span className="cursor-pointer text-[14px] text-[var(--text-color-dark-fifth)]">
                    (How to get Gemini API key)
                </span>
            </h5>
            <div className="mb-11 mt-4 flex w-full items-center gap-4">
                <GeminiStar />
                <Input
                    mainClassName="w-full"
                    type="text"
                    placeholder="XXXXXXXXX-XXXXXXXXX"
                    className="h-[50px] w-full flex-shrink-0 border-0 bg-[var(--bg-primary-color)] focus:outline-none"
                />
                <Button
                    variant="primary"
                    className="h-[45px] w-[100px] flex-shrink-0"
                >
                    Save
                </Button>
            </div>
        </div>
    )
}

export default IdeaWaveAi
