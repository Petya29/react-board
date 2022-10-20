import { AddCardInput, ImageSwitcher } from "./partials";
import { Container } from "./ui/layout";
import { Paper } from "./ui/surfaces";
import { Ripple } from "./ui/utils";

export const Board = () => {
    return (
        <Container maxWidth='full' className="mx-2">
            <Paper shadow="lg" className="w-72 mt-3 !bg-[#1e1e1ebf]">
                <button className="relative overflow-hidden border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                    ripple button
                    <Ripple />
                </button>
                <AddCardInput />
            </Paper>
            <ImageSwitcher />
        </Container>
    )
}
