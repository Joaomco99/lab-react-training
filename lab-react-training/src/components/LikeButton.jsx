import { useState } from "react";

export const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [color, setColor] = useState("blue");

    const arrayOfColors = ["purple", "blue", "green", "yellow", "orange", "red"];

    const addLike = () => {
        setLikes(likes + 1);
        // we set a random color from the array
        setColor(arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)])
    }

    return (
        <div>
            <button style={{color: 'white', backgroundColor: color}} onClick={addLike}>{likes} Likes</button>
        </div>
    );

}
