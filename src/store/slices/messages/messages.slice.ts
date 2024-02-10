import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MessagesState} from "./types.ts";
import {MessageI} from "../../../types/MessageI.ts";

const initialState: MessagesState = {
    messages: [],
    inputMessage: ''
}

const MessagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage (state, action: PayloadAction<{message: MessageI}>) {
            state.messages.push(action.payload.message)
        },
        changeInputMessage (state, action: PayloadAction<{body: string}>) {
            state.inputMessage = action.payload.body
        }
    }
})

export const { addMessage, changeInputMessage } = MessagesSlice.actions
export default MessagesSlice.reducer
