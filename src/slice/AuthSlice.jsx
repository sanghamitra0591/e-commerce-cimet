import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        userLoggedIn: false,
        loading: true,
        selectedCurrency: 'USD'
    },
    reducers: {
        setUser(state, action) {
            state.currentUser = action.payload;
            state.userLoggedIn = !!action.payload;
            state.loading = false;
        },
        resetUser(state) {
            state.currentUser = null;
            state.userLoggedIn = false;
            state.loading = false;
        },
        updateGender(state, action) {
            state.currentUser.gender = action.payload.gender
        },
        setSelectedCurrency(state, action) {
            state.selectedCurrency = action.payload
        }
    },
});

export const { setUser, resetUser, updateGender, setSelectedCurrency } = authSlice.actions;
export default authSlice.reducer;

