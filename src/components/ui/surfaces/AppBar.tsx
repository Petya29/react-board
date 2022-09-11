import { CSSProperties, HTMLAttributes } from "react";

type AppBarProps = {
    position?: CSSProperties['position']
} & HTMLAttributes<HTMLHeadingElement>

export const AppBar = ({
    position = 'static',
    style,
    children,
    ...rest
}: AppBarProps) => {
    return (
        <header
            className='bg-[#1e1e1e] text-white w-full'
            style={{
                ...style,
                position: position,
                top: '0'
            }}
            {...rest}
        >
            {children}
        </header>
    )
}
