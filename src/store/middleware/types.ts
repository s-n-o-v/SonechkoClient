import {MessageI} from "../../types/MessageI.ts";

export interface ServerToClientListen {
    message: ( message: MessageI ) => void
}
export interface ClientToServerListen {
    message: ( message: MessageI ) => void
}