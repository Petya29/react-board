import React, { useRef, useState } from "react";
import { TextField } from "../ui/Inputs";

export const AddCardInput = () => {

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState<string>('');

  const handleChnage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  }

  return (
    <div>
      <TextField
        ref={inputRef}
        fullWidth
        placeholder="Enter a title for this card"
        value={title}
        onChange={handleChnage}
      />
    </div>
  )
}
