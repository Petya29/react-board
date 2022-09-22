import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    isOpen: boolean,
    onClickOutside: () => void,
    children: ReactNode
}

export const Modal = ({
    isOpen,
    onClickOutside,
    children
}: ModalProps) => {

    if (!isOpen) return null;
    
    return createPortal(
        <Fragment>
            <div
                className={[
                    'fixed',
                    'top-0',
                    'left-0',
                    'right-0',
                    'bottom-0',
                    'bg-[#00000099]',
                    'z-[999]',
                ].join(' ').trim()}
                onClick={onClickOutside}
            />
            <div
                className={[
                    'fixed',
                    'flex',
                    'justify-center',
                    'max-w-[80%]',
                    'h-auto',
                    'top-1/2',
                    'left-1/2',
                    '-translate-x-1/2',
                    '-translate-y-1/2',
                    'z-[999]'
                ].join(' ').trim()}
            >
                {children}
            </div>
        </Fragment>,
        document.getElementById('portal') as HTMLElement
    )
}
