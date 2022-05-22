import {useState} from "react";
import {encrypt} from "./cryptography";

export const CreateNote = () => {
    const [noteContents, setNoteContents] = useState("")
    const [key, setKey] = useState("")
    return (
        <>
            note:
            <textarea
                onChange={(event) => setNoteContents(event.target.value)}
                value={noteContents}
            />
            <br/>
            key:
            <input
                onChange={(event) => setKey(event.target.value)}
                type={"password"}
                value={key}
            />
            <br/>
            {noteContents === "" || key === "" ? null :
                <>
                    preview:
                    <br/>
                    <pre>{encrypt(noteContents, key)}</pre>
                    <br/>
                    <button>create</button>
                </>
            }
        </>
    )
}