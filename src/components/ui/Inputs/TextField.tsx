import React, { forwardRef, TextareaHTMLAttributes, useRef } from "react";

type TextFieldProps = {
    hideResizeIcon?: boolean,
    fullWidth?: boolean,
    variant?: 'outlined' | 'filled',
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(({
    fullWidth = false,
    variant = 'outlined',
    rows = 2,
    onChange,
    onFocus,
    onBlur,
    className,
    ...rest
}: TextFieldProps, ref) => {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(e);
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (onFocus) onFocus(e);
        if (textareaRef.current) {
            textareaRef.current.classList.add('border-indigo-500');
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (onBlur) onBlur(e);
        if (textareaRef.current) {
            textareaRef.current.classList.remove('border-indigo-500');
        }
    }

    return (
        <textarea
            className={[
                fullWidth ? 'w-full' : '',
                'shadow-md',
                'rounded-sm',
                'outline-none',
                'py-1',
                'px-2',
                'resize-none',
                'overflow-y-hidden',
                'border-solid border-[3px]',
                className
            ].join(' ').trim()}
            ref={(el: HTMLTextAreaElement) => {
                textareaRef.current = el;
                if (typeof ref === 'function') {
                    ref(el);
                } else if (ref) {
                    ref.current = el;
                }
            }}
            rows={rows}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
        />
    )
})
