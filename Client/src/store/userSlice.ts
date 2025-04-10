import { userConnectionProps } from "@/components/Pages/Home/UserConnectionCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    batch: string;
    dob: string;
    linkedin: string;
    github: string;
    profileImageURL?: string;
    skills: string[];
    interests: string[];
    bio?: string;
    jobDetails?: {
        company?: string;
        title?: string;
    };
    location: string;
    previousCompanies?: string[];
    internships?: string[];
    availableForMentorship: boolean;
    connections: userConnectionProps[];
};

export interface UserState {
    user: User | null;
    loading: boolean;
}

const initialState: UserState = {
    user: null,
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.loading = false;
        },
        clearUser: (state) => {
            state.user = null;
            state.loading = false;
        },
        updateUser: (state, action: PayloadAction<User>) => {
            if (state.user) state.user = { ...state.user, ...action.payload };
        },
    }
});

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;