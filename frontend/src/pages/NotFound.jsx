import React from 'react'

function NotFound() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
                <img src="/404_NotFound.png" alt="not found" className="max-w-full w-96 mb-6" />

                <div className='text-xl font-semibold'>Bạn đang đi vào vùng cấm địa</div>

                <a href='/' className='inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-blue-300 rounded-2xl hover:bg-blue-400'>Quay lai</a>

            </div>
        </>
    )
}

export default NotFound;