import { createContext, useContext, useEffect, useState } from "react";
import {supabase} from '../supabase/supabase.config';

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState([]);
    useEffect(()=>{
        const {data:{subscription}} = supabase.auth.onAuthStateChange((_event, session) => {
            console.log('mirando',_event,session)
            /*async (event,session)=>{
                console.log('hello',event,session);
                if(session?.user==null)
                   setUser(null);

                setUser(session?.user);   
            } */       
              setUser(session?.user);
          })
          
          // call unsubscribe to remove the callback
          return ()=>subscription.unsubscribe()
    },[])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}