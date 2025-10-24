// import { useTranslation } from "react-i18next";

import { Button } from '../ui/button'

interface SingleAgentProps {
    name?: string
    mainClassName?: string
}

const SingleAgent: React.FC<SingleAgentProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    name = 'Prepare Blog post',
    // mainClassName = 'flex justify-between items-center font-montserrat cursor-pointer',
}) => {
    return (
        <div className="flex items-center justify-between gap-12 rounded-lg bg-[var(--bg-secondary-color)] p-2 font-montserrat transition-all duration-500">
            <div className="flex items-center gap-4">
                <div className="box-content h-[82px] w-[82px] flex-shrink-0 bg-[var(--bg-primary-color)] transition-all duration-500"></div>
                <div className="flex flex-col gap-2">
                    <h5 className="text-[14px] font-medium text-[var(--text-color-dark)]">
                        {name}
                    </h5>
                    <p className="text-[12px] font-normal text-[var(--text-color-dark-third)]">
                        An English teacher who can help you improve your English
                        language skills. including a grammar, vocabulary.
                        pronunciation and reading comprehension
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="outline" className="min-w-[110px]">
                    Make Default
                </Button>
                <Button variant="primary" className="min-w-[110px]">
                    Use
                </Button>
            </div>
        </div>
    )
}

export default SingleAgent
