import React, { useEffect, useState } from "react";
import styles from "./Filter.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

interface typeProps {
    search: (filter: string) => void;
}

export default function Filter(props: typeProps) {
    const [scrollY, setScrollY] = useState(0);
    const [isShowFilterHeader, setIsShowFilterHeader] = useState(false);
    const [value, setValue] = useState("");

    const { search } = props;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        if (scrollY > 87) {
            setIsShowFilterHeader(true);
        } else {
            setIsShowFilterHeader(false);
        }
    }, [scrollY]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className={styles.filter}>
            <FormControl
                sx={{ m: 1, width: "100%" }}
                variant="outlined"
                color="secondary"
                className={isShowFilterHeader ? styles.fixedFilter : ""}
            >
                <InputLabel htmlFor="outlined-adornment-filter">
                    Tìm Kiếm
                </InputLabel>
                <OutlinedInput
                    id="outlined-adornment-filter"
                    type="text"
                    value={value}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                onClick={() => search(value)}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Tìm Kiếm"
                />
            </FormControl>
        </div>
    );
}
