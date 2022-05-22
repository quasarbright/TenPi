import React, {useContext} from "react";
import {Client} from "./client/types";

export interface ClientContextProps {
    client: Client
}

export const ClientContext = React.createContext({})
export const useClientContext = () => useContext(ClientContext)
