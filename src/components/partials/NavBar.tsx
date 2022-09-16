import { BellAlertIcon, InfoCircleIcon } from "../ui/icons";
import { AppBar } from "../ui/surfaces";

export const NavBar = () => {
    return (
        <AppBar position="sticky" className="!bg-[#1e1e1ebf]">
            <div className='w-ful font-bold flex justify-between items-center py-2 px-6'>
                <div className='text-2xl'>
                    react-board
                </div>
                <div className='flex gap-4'>
                    <InfoCircleIcon className="cursor-pointer" rippleProps={{ duration: 750 }} />
                    <BellAlertIcon className="cursor-pointer" rippleProps={{ duration: 750 }} />
                </div>
            </div>
        </AppBar>
    )
}
