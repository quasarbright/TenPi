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
    return (
        <NoteInfo
            title={note?.title}
            encryptedBody={note.encryptedBody}
            id={note.id}
        />
    )
}

export const NoteInfo = ({title, encryptedBody}: Note) => {
    const [key, setKey] = useState("")
    const decryptedBody = decrypt(encryptedBody, key)
    return (
        <>
            {!title ? null :
                <>
                    <h1>{title}</h1>
                    <br/>
                </>}
            key:
            <input
                type={"password"}
                value={key}
                onChange={(event) => setKey(event.target.value)}
            />
            {key === "" ? null :
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