import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useLocalStorage } from "../../hooks";
import { Card, Column as ColumnType } from "../../models";
import { EllipsisHorizontalIcon } from "../ui/icons";
import { Paper } from "../ui/surfaces";
import { AddCardInput } from "./AddCardInput";

type ColumnProps = {
    order: number,
    title: string,
    cards: Card[],
}

export const Column = ({ order, title, cards }: ColumnProps) => {

    const [columns, setColumns] = useLocalStorage<ColumnType[]>('board', []);

    const [newTitle, setNewTitle] = useState<string>(title);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const handleEditable = () => {
        setIsEditable(prevState => !prevState);
    }

    const handleNewTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.target.value);
    }

    const handleBlur = () => {
        const columnIndex = columns.findIndex(column => column.order === order)
        if (columnIndex !== -1) {
            setColumns(prevState => {
                if (newTitle.trim() === '') {
                    setNewTitle(prevState[columnIndex].title);
                    return prevState;
                }
                prevState[columnIndex].title = newTitle.trim();
                setNewTitle(prevState => prevState.trim());
                return prevState;
            });
        }

        setIsEditable(false);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            handleBlur();
        }
    }

    return (
        <Paper shadow="lg" className="w-72 mt-3 !bg-[#1e1e1ebf]">
            <div className="flex justify-between">
                {isEditable
                    ?
                    <input
                        autoFocus
                        className="my-1 w-full outline-none rounded-sm border-solid border-[3px] border-indigo-500"
                        value={newTitle}
                        onChange={handleNewTitle}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                    />
                    :
                    <div
                        className="text-white cursor-pointer w-full my-1 border-solid border-[3px] border-transparent text-ellipsis overflow-hidden whitespace-nowrap"
                        onClick={handleEditable}
                    >
                        {newTitle}
                    </div>
                }
                <EllipsisHorizontalIcon
                    className="cursor-pointer"
                    rippleProps={{ duration: 750 }}
                    strokeColor="#ffffff"
                />
            </div>
            <AddCardInput />
        </Paper>
    )
}
