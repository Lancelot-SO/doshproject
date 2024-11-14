import React from 'react'
import ChartOne from './ChartOne'
import ChartTwo from './ChartTwo'

const MiddleSection = () => {
    return (
        <div className='w-[845px] h-[247px] mb-[100px] flex gap-4'>
            <div className='w-[521px] h-[246px]'>
                <ChartOne />
            </div>
            <div className='w-[287px] h-[247px]'>
                <ChartTwo />
            </div>
        </div>
    )
}

export default MiddleSection