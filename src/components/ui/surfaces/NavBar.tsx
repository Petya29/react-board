import { BellAlertIcon, InfoCircleIcon } from "../icons";

export const NavBar = () => {
    return (
        <header className='bg-[#1e1e1ec7] text-white'>
            <div className='w-ful font-bold flex justify-between items-center py-2 px-6'>
                <div className='text-2xl'>
                    react-board
                </div>
                <div className='flex gap-4'>
                    <InfoCircleIcon style={{ cursor: 'pointer' }} />
                    <BellAlertIcon style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </header>
    )
}
