import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import licenseKeyReducer from './lisenceKeyReducer'
import apiKeyReducer from './apiKeyReducer'
import focusReducer from './inputFocus'
import chatMessagesReducer from './chatMessages'
import chatSearchReducer from './chatSearch'
import settingsReducer from './settingsReducer'
import userProfileReducer from './userProfileReducer'
import promptsReducer from './promptsReducer'
import outputSettingsReudcer from './outputSettingsReudcer'
import applySettingsReducer from './applySettingsReducer'
import agentSelectionReducer from './agentSelectionReducer'
import createPromptsReducer from './createPromptsReducer'
import editPromtsReducer from './editPromtsReducer'

const rootReducer = combineReducers({
    theme: themeReducer,
    licenseKey: licenseKeyReducer,
    apiKey: apiKeyReducer,
    focus: focusReducer,
    messages: chatMessagesReducer,
    searchChat: chatSearchReducer,
    settings: settingsReducer,
    userProfile: userProfileReducer,
    prompts: promptsReducer,
    outputSettings: outputSettingsReudcer,
    applySettings: applySettingsReducer,
    agentSelections: agentSelectionReducer,
    createPrompts: createPromptsReducer,
    editPrompts: editPromtsReducer,
})

export default rootReducer
