import { createSlice } from '@reduxjs/toolkit'

interface AgentSelectionsState {
    isAgentSelectionOpen: boolean
}

const initialState: AgentSelectionsState = {
    isAgentSelectionOpen: false,
}

export const agentSelectionsSlice = createSlice({
    name: 'agentSelections',
    initialState,
    reducers: {
        closeAgentSelection: (state) => {
            state.isAgentSelectionOpen = false
        },
        openAgentSelection: (state) => {
            state.isAgentSelectionOpen = true
        },
    },
})

export const { closeAgentSelection, openAgentSelection } =
    agentSelectionsSlice.actions
export default agentSelectionsSlice.reducer
