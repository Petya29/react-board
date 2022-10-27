import {
    CSSProperties,
    MutableRefObject,
    ReactElement,
    ReactNode,
    useLayoutEffect,
    useRef,
    useState
} from "react";
import { createPortal } from "react-dom";
import { Paper } from "../surfaces";

const ARROW_MARGIN = 12;

type TooltipProps = {
    title?: ReactNode | string,
    arrow?: boolean,
    align?: 'top' | 'right' | 'bottom' | 'left',
    style?: CSSProperties,
    className?: string,
    children: ReactElement
}

const calcLeft = (align: 'top' | 'right' | 'bottom' | 'left', childrenRects: DOMRect | null, tooltipRef: MutableRefObject<HTMLElement | null>): string => {
    if (!childrenRects || !tooltipRef.current) return '0px';

    let childrenMargin = 0;
    let tooltipMargin = 0;

    if (align === 'top' || align === 'bottom') {
        childrenMargin = childrenRects.left + (childrenRects.width / 2);
        tooltipMargin = tooltipRef.current.offsetWidth / 2;

        return childrenMargin - tooltipMargin + 'px';
    }
    if (align === 'right') {
        childrenMargin = childrenRects.left + childrenRects.width + ARROW_MARGIN;

        return childrenMargin + 'px';
    }

    childrenMargin = childrenRects.left - tooltipRef.current.offsetWidth - ARROW_MARGIN;
    return childrenMargin + 'px';
}

const calcArrow = (align: 'top' | 'right' | 'bottom' | 'left'): string => {
    let result = "";

    switch (align) {
        case 'top': result = "-bottom-[76%] rotate-180 left-1/2"
            break;
        case 'right': result = "bottom-[20%] rotate-[270deg] -left-[4px]"
            break;
        case 'bottom': result = "-top-[44%] left-1/2"
            break;
        case 'left': result = "bottom-[20%] rotate-90 left-[calc(101%_+_1px)]"
            break;
        default:
            break;
    }

    return result;
}

export const Tooltip = ({
    title,
    arrow = true,
    align = 'bottom',
    style,
    className,
    children
}: TooltipProps) => {

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    useLayoutEffect(() => {
        if (!wrapperRef.current || !tooltipRef.current) return;

        const childrenRects = wrapperRef.current.getBoundingClientRect();

        tooltipRef.current.style.transform = 'scale(1)';
        tooltipRef.current.style.opacity = '1';

        switch (align) {
            case 'top':
                tooltipRef.current.style.top = childrenRects.top - childrenRects.height + 'px';
                tooltipRef.current.style.left = calcLeft(align, childrenRects, tooltipRef);
                break;
            case 'right':
                tooltipRef.current.style.top = childrenRects.top + (childrenRects.height / 2) - (tooltipRef.current.offsetHeight / 2) + 'px';
                tooltipRef.current.style.left = calcLeft(align, childrenRects, tooltipRef);
                break;
            case 'bottom':
                tooltipRef.current.style.top = childrenRects.top + childrenRects.height + (ARROW_MARGIN * 2) + 'px';
                tooltipRef.current.style.left = calcLeft(align, childrenRects, tooltipRef);
                break;
            case 'left':
                tooltipRef.current.style.top = childrenRects.top + (childrenRects.height / 2) - (tooltipRef.current.offsetHeight / 2) + 'px';
                tooltipRef.current.style.left = calcLeft(align, childrenRects, tooltipRef);
                break;
            default:
                break;
        }
    }, [align, wrapperRef.current, isHovered]);

    if (!title || !tooltipRef) return children;

    return (
        <div
            ref={wrapperRef}
            className={[
                "tooltip-wrapper",
                "inline-block",
                className
            ].join(" ").trim()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {createPortal(
                isHovered &&
                <div
                    ref={tooltipRef}
                    style={{
                        position: 'absolute',
                        transform: 'scale(.9)',
                        opacity: 0.5,
                        transition: 'all .2s ease'
                    }}
                >
                    <Paper
                        component='span'
                        className="relative text-gray-300 !bg-[#1e1e1ebf]"
                        style={style}
                    >
                        {title}
                    </Paper>
                    {arrow &&
                        <div
                            className={[
                                "absolute",
                                calcArrow(align),
                                "-translate-x-1/2",
                                "-translate-y-1/2",
                                "h-0 w-0",
                                "border-x-8",
                                "border-x-transparent",
                                "border-b-8"
                            ].join(" ").trim()}
                            style={{
                                borderBottomColor: '#1e1e1ebf'
                            }}
                        />
                    }
                </div>,
                document.getElementById('portal') as HTMLElement
            )}
        </div>
    )
}
