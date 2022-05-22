import {useState} from "react";
import {encrypt} from "./cryptography";
import {useClientContext} from "./ClientContext";

export const CreateNote = () => {
    const [title, setTitle] = useState("")
    const [noteContents, setNoteContents] = useState("")
    const [key, setKey] = useState("")
    const encryptedBody = encrypt(noteContents, key)
    const {client} = useClientContext()

    function onCreate() {
        client.createNote(encryptedBody)
    }

    return (
        <>
            title:
            <input
                onChange={(event) => setTitle(event.target.value)}
                value={title}
            />
            <br/>
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
                    <button onClick={() => onCreate()}>create</button>
                </>
            }
        </>
    )
}