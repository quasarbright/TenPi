import {useClientContext} from "./ClientContext";
import {Note} from "./client/types";
import {useState} from "react";
import {decrypt} from "./cryptography";
import {useParams} from "react-router-dom";

export const ViewNotePage = () => {
    const {id} = useParams()
    return <ViewNote id={id}/>
}

export const ViewNote = ({id}: {id: string}) => {
    const {client} = useClientContext()
    const note = client.getNoteById(id)
    if (note) {
        return (
            <NoteInfo
                title={note?.title}
                encryptedBody={note.encryptedBody}
                id={note.id}
            />
        )
    } else {
        return (<p>404: note not found</p>)
    }
}

export const NoteInfo = ({title, encryptedBody}: Note) => {
    const [key, setKey] = useState("")
    const [decryptedBody, setDecryptedBody] = useState("")
    function updateDecryptedBody() {
        setDecryptedBody(decrypt(encryptedBody, key))
    }
    return (
        <>
            {!title ? null :
                    <h1>{title}</h1>
            }
            key:
            <input
                type={"password"}
                value={key}
                onChange={(event) => setKey(event.target.value)}
            />
            <button onClick={() => updateDecryptedBody()}>decrypt</button>
            {decryptedBody === "" ? null :
                <>
                    <br/>
                    decrypted body:
                    <br/>
                    <p>{decryptedBody}</p>
                </>
            }
        </>
    );
}