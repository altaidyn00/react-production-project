import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, type User } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)
            if (!response.data) throw new Error()
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            console.log(e, 'error')
            return thunkAPI.rejectWithValue('error')
        }
    }
)
