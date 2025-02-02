import React from 'react'

const TaskList = () => {
    return (
        <>

            <div className='flex mt-10 justify-between gap-5 screen'>
                <div className='bg-blue-600 rounded-lg w-[45%] py-5 px-3'>
                    <h2 className='text-lg'>0</h2>
                    <h3>New Task</h3>

                </div>
                <div className='bg-yellow-600 rounded-lg w-[45%] py-5 px-3'>
                    <h2 className='text-lg'>0</h2>
                    <h3>New Task</h3>

                </div>
                <div className='bg-green-600 rounded-lg w-[45%] py-5 px-3'>
                    <h2 className='text-lg'>0</h2>
                    <h3>New Task</h3>

                </div>
                <div className='bg-blue-700 rounded-lg w-[45%] py-5 px-3'>
                    <h2 className='text-lg'>0</h2>
                    <h3>New Task</h3>

                </div>


            </div>

        </>
    )
}

export default TaskList
