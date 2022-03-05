import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';

interface Props {
    onClick: () => void;//Change this to not have ?
    defaultState: boolean;
    color: string;
}

export default function CheckBox(props: Props) {

    const [enabled, setEnabled] = useState(props.defaultState);

    const handleChange = () => {
        setEnabled(!enabled);
    }

    return <>
        <Checkbox
            checked={enabled}
            onChange={handleChange}
            sx={{
                color: props.color,
                '&.Mui-checked': {
                    color: props.color,
                },
            }}
        />
    </>

}