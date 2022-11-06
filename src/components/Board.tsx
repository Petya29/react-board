import { useEffect } from "react";
import { useLocalStorage } from "../hooks";
import { Column as ColumnType } from "../models";
import { Column, ImageSwitcher } from "./partials";
import { Tooltip } from "./ui/feedback";
import { Container } from "./ui/layout";

export const Board = () => {

    const [columns, setColumns] = useLocalStorage<ColumnType[]>('board', []);

    useEffect(() => {
        if (!columns.length) {
            setColumns([{
                order: 0,
                title: 'Need to do',
                cards: []
            }]);
        }
    }, []);

    return (
        <Container maxWidth='full' className="mx-2">
            {columns.map(column => (
                <Column
                    order={column.order}
                    title={column.title}
                    cards={column.cards}
                    key={column.order}
                />
            ))}
            <div className="absolute bottom-[4%]">
                <Tooltip title="Click to change background image" align={'right'}>
                    <ImageSwitcher />
                </Tooltip>
            </div>
        </Container>
    )
}
