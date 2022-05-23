import {useState} from "react";
import {encrypt} from "./cryptography";
import {useClientContext} from "./ClientContext";
import {useNavigate} from "react-router-dom";

export const CreateNote = () => {
    const [title, setTitle] = useState<string>(undefined)
    const [noteContents, setNoteContents] = useState("")
    const [key, setKey] = useState("")
    const encryptedBody = encrypt(noteContents, key)
    const {client} = useClientContext()
    const navigate = useNavigate()

    function onCreate() {
        const {id} = client.createNote(encryptedBody, {title})
        navigate(`/${id}`)
    }

    return (
        <>
            <h1>Create a Note</h1>
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