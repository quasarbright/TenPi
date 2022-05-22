import { InMemoryClient } from "./client/in-memory-client";
import { ClientContext } from "./ClientContext"

export const InMemoryClientProvider = ({children}) => {
    const value = {
        client: new InMemoryClient()
    }
    return (
        <ClientContext.Provider value={value} children={children}/>
    );
}