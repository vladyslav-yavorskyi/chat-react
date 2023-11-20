import Input from "./Input.tsx";
import ChatCard from "./ChatCard.tsx";

const Chats = () => {
    return (
        <div>
            <Input text={"Enter for search..."} width={"25vw"} logo={'src/assets/iconsearch.svg'} change={() => null} click={() => null}/>
            {Array(4).fill(0).map((_, i) => <ChatCard width={'350px'} key={i} />)}
        </div>
    );
};

export default Chats;