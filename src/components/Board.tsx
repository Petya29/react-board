import { Container } from "./ui/layout";
import { Ripple } from "./ui/utils";

export const Board = () => {
    return (
        <Container maxWidth='lg'>
            <button className="relative overflow-hidden border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                ripple button
                <Ripple />
            </button>
        </Container>
    )
}
