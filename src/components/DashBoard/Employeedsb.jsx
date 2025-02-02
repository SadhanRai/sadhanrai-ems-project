import React from 'react'
import Headers from '../Others/Headers'
import TaskList from '../Others/TaskList'
import Task from '../TaskList/Task'



const Employeedsb = () => {
    return (
        <>
            <div className='p-10 bg-[#1c1c1c] h-screen'>

                <Headers />

                <TaskList />
                <Task />
            </div>

        </>
    )
}

export default Employeedsb
