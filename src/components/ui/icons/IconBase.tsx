import { HTMLAttributes } from "react";
import { Ripple, RippleProps } from "../utils";

export type IconBaseProps = {
    fill?: string,
    strokeColor?: string,
    isHoverable?: boolean,
    disableRipple?: boolean,
    rippleProps?: RippleProps,
} & HTMLAttributes<HTMLSpanElement>

export const IconBase = ({
    fill = 'none',
    strokeColor = 'currentcolor',
    isHoverable = true,
    disableRipple = false,
    rippleProps,
    className,
    children,
    ...rest
}: IconBaseProps) => {
    return (
        <div
            className={[
                "flex",
                "items-center",
                "justify-center",
                "w-8",
                "h-8",
                "rounded-[4px]",
                disableRipple ? "" : "relative overflow-hidden",
                isHoverable ? "hover:bg-[#3d3d3d]" : "",
                className
            ].join(" ").trim()}
            {...rest}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={strokeColor} className="w-6 h-6">
                {children}
            </svg>
            {!disableRipple && <Ripple {...rippleProps} />}
        </div>
    )
}
