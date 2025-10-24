import { createSlice } from '@reduxjs/toolkit'

interface UserProfileState {
    isUserProfileOpen: boolean
}

const initialState: UserProfileState = {
    isUserProfileOpen: false,
}

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        closeUserProfile: (state) => {
            state.isUserProfileOpen = false
        },
        openUserProfile: (state) => {
            state.isUserProfileOpen = true
        },
    },
})

export const { closeUserProfile, openUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer
