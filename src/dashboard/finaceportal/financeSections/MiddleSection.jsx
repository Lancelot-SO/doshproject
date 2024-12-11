import React from 'react'
import ChartOne from './ChartOne'
import ChartTwo from './ChartTwo'

const MiddleSection = () => {
    return (
        <div className='lg:w-[845px] w-[370px] lg:h-[247px] lg:mb-[100px] mb-[130px] flex flex-col lg:flex-row gap-4'>
            <div className='w-[521px] h-[246px]'>
                <ChartOne />
            </div>
            <div className='w-[287px] h-[247px] mt-[100px] lg:mt-0'>
                <ChartTwo />
            </div>
        </div>
    )
}

export default MiddleSection