import PromptTable from './prompt-table'
import { cn } from '../../../lib/utils'
import LibraryTable from './library-table'

interface MyPromptTabContentProps {
    title?: string
    library?: boolean
    prompts?: any
    libraries?: any
    addPromptBtn?: boolean
}

const MyPromptTabContent: React.FC<MyPromptTabContentProps> = ({
    library,
    prompts,
    libraries,
    addPromptBtn = false,
}) => {
    return (
        <div className="relative w-full font-montserrat transition-all duration-500">
            <div
                className={cn(
                    'my-12 flex w-full justify-between',
                    library && 'justify-center'
                )}
            ></div>

            {library ? (
                <LibraryTable
                    libraries={libraries}
                    addPromptBtn={addPromptBtn}
                />
            ) : (
                <PromptTable prompts={prompts} addPromptBtn={addPromptBtn} />
            )}
        </div>
    )
}

export default MyPromptTabContent
