import React from 'react';
import Input from "./Input.tsx";

const Chats = () => {
    return (
        <div>
            <Input text={"Enter for search..."} width={"25vw"} logo={'src/assets/iconsearch.svg'}/>
        </div>
    );
};

export default Chats;