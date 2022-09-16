import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ImageIcon } from "../ui/icons";
import { Paper } from "../ui/surfaces";

export const ImageSwitcher = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const [image, setImage] = useState<string>('');

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    const handleFileLoad = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files.length) return;

        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onloadend = function () {
            if (typeof reader.result === 'string') {
                setImage(reader.result);
            }
        }
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        if (image.trim() === '') return;

        document.body.style.background = `url(${image}) center center no-repeat`;
        document.body.style.backgroundSize = 'cover';
    }, [image]);

    return (
        <Paper className="absolute bottom-[4%] w-min p-0 m-0 !bg-[#1e1e1ebf]">
            <ImageIcon
                size="lg"
                strokeColor="#ffffff"
                className="cursor-pointer"
                rippleProps={{ duration: 750 }}
                onClick={handleClick}
            />
            <input
                ref={inputRef}
                type='file'
                className="hidden"
                onChange={handleFileLoad}
            />
        </Paper>
    )
}
