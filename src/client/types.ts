export interface Note {
    title?: string
    encryptedBody: string
    id: string
}

export interface Client {
    createNote(encryptedText: string): Note
    getNoteById(id: string): Note | undefined
}