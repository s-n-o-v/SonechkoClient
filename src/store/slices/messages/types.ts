import {MessageI} from "../../../types/MessageI.ts";

export interface MessagesState {
    messages: MessageI[];
    inputMessage: string;
}