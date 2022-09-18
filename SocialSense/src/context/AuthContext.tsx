import axios from 'axios';
import react, {createContext} from 'react';
import { BASE_URL } from '../config';

export const AuthContext = createContext();

type UserRegister = {
    name: string;
    email: string;
    password: string;
}

export const AuthProvider = ({children}) => {
    
    const register = (name, email, password) => {
        axios.post<UserRegister>(`${BASE_URL}/register`, {name, email, password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
        }).catch (e => {
            console.log("Register Error: ${e}");
        });
    };
    
        return (
        <AuthContext.Provider value={register}>
            {children}
        </AuthContext.Provider>
    )
}