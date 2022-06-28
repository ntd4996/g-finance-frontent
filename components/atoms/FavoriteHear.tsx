import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

export default function FavoriteHear() {
    const [isFavorite, setIsFavorite] = useState(false);

    const clickFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <div onClick={() => clickFavorite()} className="cursor-pointer">
            {isFavorite ? (
                <FavoriteOutlinedIcon style={{ color: "#ff4b8d" }} />
            ) : (
                <FavoriteBorderOutlinedIcon />
            )}
        </div>
    );
}
