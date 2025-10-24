import { createSlice } from '@reduxjs/toolkit'

interface ApiKeyState {
    isApiKeyOpen: boolean
}

const initialState: ApiKeyState = {
    isApiKeyOpen: false,
}

export const apiKeySlice = createSlice({
    name: 'apiKey',
    initialState,
    reducers: {
        closeApiKey: (state) => {
            state.isApiKeyOpen = false
        },
        openApiKey: (state) => {
            state.isApiKeyOpen = true
        },
    },
})

export const { closeApiKey, openApiKey } = apiKeySlice.actions
export default apiKeySlice.reducer
