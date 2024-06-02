import React, { useState } from 'react'
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

export default function ExpandablePanel({header,children}) {
    const [value, setValue] = useState(false)
    const handleClick=()=>{
        setValue(!value)
    }
  return (
        <div className='panelDiv'>
            <div className='topArrangment'>
                <div className='topArrangment'>{header}</div>
                <div onClick={handleClick}>
                    {value ? <GoChevronDown/> :  <GoChevronLeft/>}  
                </div>
            </div>
            {value && <div>{children}</div>}
        </div>
  )
}
