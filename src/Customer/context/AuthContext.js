import { useContext, createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [newUser, setNewUser] = useState(false);
    const [token, setToken] = useState("");

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider);

        const result = await signInWithPopup(auth, provider);
        // Pass the UserCredential
        const { isNewUser } = getAdditionalUserInfo(result);
        setNewUser(isNewUser)
        console.log(isNewUser);
    };

    const logOut = () => {
        signOut(auth);
    };

    //Set user
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setToken(currentUser?.accessToken);
            console.log(currentUser?.accessToken);
        });
        return () => {
            unsubcribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user, token, newUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
