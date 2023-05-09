import React from 'react'
import Text from '../Button-2/Button-2'

const Card = (props) => {
  return (
    <div className='flex flex-col gap-[32px] items-start max-w-[384px]'>
        <img src={props.img} alt="" />
        <div className='flex flex-col gap-[16px]'>
            <h1 className='font-[600] text-[24px] leading-[36px]'>{props.texth1}</h1>

            <p className='font-[400] text-[18px] text-[#848FAC] leading-[27px]'>{props.textp}</p>
        </div>
        <Text/>
    </div>
  )
}

export default Card