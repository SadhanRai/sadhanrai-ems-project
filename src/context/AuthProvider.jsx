import React, { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage'
import { useState, useEffect } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setuserData] = useState('')
    // const data = getLocalStorage()
    // setuserData(data); //it takes time to fetch data// not good way to asign // so we use useEffect hooks here

    //---------------OR------------
    // const { employee, admin } = getLocalStorage() // To get seperate value from this function 
    // setuserData({ employee, admin })

    useEffect(() => {
        const { employee, admin } = getLocalStorage()
        setuserData({ employee, admin })

    }, [])


    console.log("local data", userData.employee)
    return (
        <div>
            <AuthContext.Provider value={userData} >

                {children}
            </AuthContext.Provider>

        </div>
    )
}

export default AuthProvider