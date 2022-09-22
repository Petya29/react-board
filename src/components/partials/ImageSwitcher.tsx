import { ChangeEvent, useEffect, useRef } from "react";
import { useLocalStorage } from "../../hooks";
import { ImageIcon } from "../ui/icons";
import { Paper } from "../ui/surfaces";

export const ImageSwitcher = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const executedRef = useRef<boolean>(false);

    const [image, setImage] = useLocalStorage<string>('bg-image', '');

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
                executedRef.current = false;
                setImage(reader.result);
            }
        }
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        if (executedRef.current || image.trim() === '') return;

        const newImage = new Image();
        newImage.onerror = () => {
            document.body.style.background = `url("../../../public/default-bg.jpg") center center no-repeat`;
            document.body.style.backgroundSize = 'cover';
            alert('Your background image is not valid not valid');
        };
        newImage.src = image;

        document.body.style.background = `url(${image}) center center no-repeat`;
        document.body.style.backgroundSize = 'cover';

        executedRef.current = true;
    }, [image]);

    return (
        <Paper className="absolute bottom-[4%] w-min p-1 m-0 !bg-[#1e1e1ebf]">
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
