import React from 'react';

export const Header = () => {
    return (
        <>
            <div className='flex flex-col items-center jutify-center gap-2'>
                <div className='text-primary font-bold text-4xl'>TodoX</div>
                <span className='text-xl font-medium text-muted-foreground'>Không có việc gì khó chỉ sợ mình không làm</span>
            </div>
        </>
    )
};