import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarVisible: false
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        toggleSidebarVisibility: (state) => {
            state.isSidebarVisible = !state.isSidebarVisible;
        }
    }

});

export const { toggleSidebarVisibility } = configSlice.actions;
export default configSlice.reducer;