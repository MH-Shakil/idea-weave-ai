import { Button } from '../../ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../ui/table'

interface LibraryTableProps {
    libraries?: any
    addPromptBtn?: boolean
}

const LibraryTable: React.FC<LibraryTableProps> = ({
    libraries,
    addPromptBtn = false,
}) => {
    return (
        <Table className="font-montserrat">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[35%] text-[var(--text-color-dark)]">
                        Prompt
                    </TableHead>
                    <TableHead className="w-[35%] text-[var(--text-color-dark)]">
                        Category tag
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {libraries.map((library: any, index: number) => (
                    <TableRow key={index}>
                        <TableCell>
                            <div className="flex flex-col gap-1 font-montserrat">
                                <h5 className="text-[14px] font-medium text-[var(--text-color-dark)]">
                                    {library.title}
                                </h5>
                                <p className="text-[12px] text-[var(--text-color-dark)]">
                                    {library.description}
                                </p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                {library.categoryTag.map(
                                    (categoryTag: any, idx: number) => (
                                        <div
                                            key={idx}
                                            className="border border-[var(--text-color-dark)] bg-[var(--bg-secondary-color)] p-1 text-[12px] leading-[15px] text-[var(--text-color-dark)]"
                                        >
                                            {categoryTag}
                                        </div>
                                    )
                                )}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex gap-8">
                                {addPromptBtn && (
                                    <Button
                                        variant="outline"
                                        className="font-bold"
                                    >
                                        add Prompt
                                    </Button>
                                )}
                                <Button variant="primary" className="font-bold">
                                    Use Prompt
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default LibraryTable
