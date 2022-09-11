import { ElementType, HTMLAttributes } from "react";

export const enum ContainerSizes {
    xs = "max-w-xs",
    sm = "max-w-screen-sm",
    md = "max-w-screen-md",
    lg = "max-w-screen-lg",
    xl = "max-w-screen-xl",
    "2xl" = "max-w-screen-2xl",
    full = "max-w-full",
    none = "max-w-none"
}

type ContainerProps = {
    component?: ElementType,
    maxWidth?: ContainerSizes,
} & HTMLAttributes<HTMLElement>

export const Container = ({
    component,
    maxWidth = ContainerSizes.md,
    className,
    children
}: ContainerProps) => {

    const ComponentName = component ?? 'div';

    return (
        <ComponentName className={[maxWidth, className].join(' ')}>
            {children}
        </ComponentName>
    )
}
