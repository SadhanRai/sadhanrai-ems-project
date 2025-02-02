import React from 'react'

const CreateTask = () => {
    return (

        <form className='mt-10 bg-[#1c1c1c] p-5 rounded-md'>
            {/* Task Title and Date */}
            <div className="grid grid-cols-2 gap-4 mb-4 ">
                <div>
                    <label className="block text-sm text-gray-400 mb-1" htmlFor="task-title">
                        Task Title
                    </label>
                    <input
                        type="text"
                        id="task-title"
                        placeholder="Make a UI design"
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md border-none focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1" htmlFor="date">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md border-none focus:outline-none"
                    />
                </div>
            </div>

            {/* Assign To and Category */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-1" htmlFor="assign-to">
                        Assign to
                    </label>
                    <input
                        type="text"
                        id="assign-to"
                        placeholder="Employee name"
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md border-none focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-1" htmlFor="category">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        placeholder="Design, Dev, etc."
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md border-none focus:outline-none"
                    />
                </div>
            </div>

            {/* Description */}
            <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-1" htmlFor="description">
                    Description
                </label>
                <textarea
                    id="description"
                    rows="4"
                    placeholder="Enter task details..."
                    className="w-full p-2 bg-gray-700 text-gray-200 rounded-md border-none focus:outline-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-600 focus:outline-none"
            >
                Create Task
            </button>
        </form>
    )
}

export default CreateTask
