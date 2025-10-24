import { useDrag, useDrop } from 'react-dnd'
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../ui/accordion'
import DeleteIcon from './svg-icons/delete-icon'
import EditIcon from './svg-icons/edit-icon'
import PlusIcon from './svg-icons/plus-icon'

const ItemTypes = {
    FILE: 'file',
}

// Draggable File Component
export const DraggableFile = ({ file, index }: any) => {
    const [, dragRef] = useDrag({
        type: ItemTypes.FILE,
        item: { file, index },
    })

    return (
        <div ref={dragRef} className="my-1 cursor-move rounded border p-2">
            {file.component}
        </div>
    )
}

// Droppable Folder Component
const DroppableFolder = ({ item, index, onDropFile }: any) => {
    // const [{ isOver }, dropRef] = useDrop({
    //     accept: ItemTypes.FILE,
    //     drop: (draggedItem) => onDropFile(draggedItem?.file, index),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // })

    return (
        <AccordionItem value={`item-${index}`}>
            <div className="flex items-center justify-between pb-[14px] font-montserrat">
                <AccordionTrigger className="py-0 font-medium text-[var(--bg-dark-to-white-color)]">
                    {item.folderName} ({item.files.length})
                </AccordionTrigger>
                <div className="flex justify-between gap-2">
                    <div
                        className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]"
                        // onClick={() => handleAddFileToFolder(index)}
                    >
                        <PlusIcon />
                    </div>
                    <div className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]">
                        <EditIcon />
                    </div>
                    <div
                        className="rounded-[4px] p-1 hover:bg-[var(--bg-hover-color)]"
                        // onClick={() => handleDeleteFolder(index)}
                    >
                        <DeleteIcon />
                    </div>
                </div>
            </div>
            <AccordionContent className="flex flex-col gap-2 border-b-0 pl-5">
                {item.files.map((file: any, fileIndex: any) => (
                    <DraggableFile
                        key={file.id}
                        file={file}
                        index={fileIndex}
                    />
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}
export default DroppableFolder
