import React from 'react'
import Headers from '../Others/Headers'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const Admindsb = () => {
    return (

        <>
            <div className='p-10  bg-[#0c0b0b] h-90'>
                <Headers />
                <CreateTask />
                <AllTask />


            </div>

        </>
    )
}

export default Admindsb
