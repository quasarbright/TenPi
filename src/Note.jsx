import {useState} from "react";

export const Note = ({}) => {
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
                value={key}
            />
            <br/>
            <button
                onClick={() => alert(`encrypting ${noteContents} with ${key}`)}
            >
                encrypt
            </button>
            <button
                onClick={() => alert(`decrypting ${noteContents} with ${key}`)}
            >
                decrypt
            </button>
        </>
    )
}