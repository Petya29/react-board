import { HTMLAttributes } from "react"

export type IconBaseProps = {
    fill?: string,
    strokeColor?: string,
    isHoverable?: boolean,
} & HTMLAttributes<HTMLSpanElement>

export const IconBase = ({
    fill = 'none',
    strokeColor = 'currentcolor',
    isHoverable = true,
    children,
    ...rest
}: IconBaseProps) => {
    return (
        <span
            className={[
                "flex",
                "items-center",
                "justify-center",
                "w-8",
                "h-8",
                "rounded-[4px]",
                isHoverable ? "hover:bg-[#3d3d3d]" : ""
            ].join(" ")}
            {...rest}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={strokeColor} className="w-6 h-6">
                {children}
            </svg>
        </span>
    )
}
