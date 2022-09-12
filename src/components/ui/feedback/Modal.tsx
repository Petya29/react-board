import { ReactNode } from "react"

type ModalProps = {
    isOpen: boolean,
    children: ReactNode
}

export const Modal = ({ isOpen, children }: ModalProps) => {
    return (
        <div
            className={[
                'fixed',
                'top-0',
                'left-0',
                'w-full',
                'h-full',
                'bg-[#00000099]',
                isOpen ? 'block' : 'hidden'
            ].join(' ').trim()}
        >
            <div
                className={[
                    'fixed',
                    'text-center',
                    'w-4/5',
                    'h-auto',
                    'top-1/2',
                    'left-1/2',
                    '-translate-x-1/2',
                    '-translate-y-1/2'
                ].join(' ').trim()}
            >
                {children}
            </div>
        </div>
    )
}
