import { createSlice } from '@reduxjs/toolkit'

interface PromptsState {
    isPromptOpen: boolean
}

const initialState: PromptsState = {
    isPromptOpen: false,
}

export const promptsSlice = createSlice({
    name: 'prompts',
    initialState,
    reducers: {
        closePrompt: (state) => {
            state.isPromptOpen = false
        },
        openPrompt: (state) => {
            state.isPromptOpen = true
        },
    },
})

export const { closePrompt, openPrompt } = promptsSlice.actions
export default promptsSlice.reducer
