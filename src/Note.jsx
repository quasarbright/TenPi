import aes from "crypto-js/aes";
import { enc } from "crypto-js/core";
import {useState} from "react";

export const Note = () => {
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
            <button
                onClick={() => {
                    if (key.length > 0) {
                        setNoteContents(encrypt(noteContents, key))
                    }
                }}
            >
                encrypt
            </button>
            <button
                onClick={() => {
                    if (key.length > 0) {
                        setNoteContents(decrypt(noteContents, key))
                    }
                }}
            >
                decrypt
            </button>
        </>
    )
}

function encrypt(text, key) {
    return aes.encrypt(text, key).toString()
}

function decrypt(text, key) {
    return aes.decrypt(text, key).toString(enc.Utf8)
}