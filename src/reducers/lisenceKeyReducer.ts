import { createSlice } from '@reduxjs/toolkit'

interface LicenseKeyState {
    isLicenseKeyOpen: boolean
}

const initialState: LicenseKeyState = {
    isLicenseKeyOpen: false,
}

export const licenseKeySlice = createSlice({
    name: 'licenseKey',
    initialState,
    reducers: {
        closeLicenseKey: (state) => {
            state.isLicenseKeyOpen = false
        },
        openLicenseKey: (state) => {
            state.isLicenseKeyOpen = true
        },
    },
})

export const { closeLicenseKey, openLicenseKey } = licenseKeySlice.actions
export default licenseKeySlice.reducer
