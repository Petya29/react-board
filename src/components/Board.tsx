import { AddCardInput, ImageSwitcher } from "./partials";
import { Tooltip } from "./ui/feedback";
import { Container } from "./ui/layout";
import { Paper } from "./ui/surfaces";
import { Ripple } from "./ui/utils";

export const Board = () => {

    return (
        <Container maxWidth='full' className="mx-2">
            <Paper shadow="lg" className="w-72 mt-3 !bg-[#1e1e1ebf]">
                <div className="mb-1">
                    <button className="relative overflow-hidden border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                        ripple button
                        <Ripple />
                    </button>
                </div>
                <AddCardInput />
            </Paper>
            <div className="absolute bottom-[4%]">
                <Tooltip title="Click to change background image" align={'right'}>
                    <ImageSwitcher />
                </Tooltip>
            </div>
        </Container>
    )
}
