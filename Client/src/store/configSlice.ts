import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: true
}

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    }

});

export const { toggleMode } = configSlice.actions;
export default configSlice.reducer;