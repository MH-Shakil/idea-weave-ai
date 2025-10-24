import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Message } from '../pages/home'

interface SearchState {
    searchChat: string
    filteredMessages: Message[]
}

const initialState: SearchState = {
    searchChat: '',
    filteredMessages: [],
}

const searchSlice = createSlice({
    name: 'searchChat',
    initialState,
    reducers: {
        setSearchChat: (state, action: PayloadAction<string>) => {
            state.searchChat = action.payload
        },
        setFilteredMessages: (state, action: PayloadAction<Message[]>) => {
            state.filteredMessages = action.payload
        },
        clearSearch: (state) => {
            state.searchChat = ''
            state.filteredMessages = []
        },
    },
})

export const { setSearchChat, setFilteredMessages, clearSearch } =
    searchSlice.actions

export default searchSlice.reducer
