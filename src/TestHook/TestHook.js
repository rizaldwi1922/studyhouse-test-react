import React from 'react'

export default function TestHook(props){
    
    return (
        <div>
             <div className='d-flex justify-content-center'>
                <div className='mt-2 border border-primary d-flex justify-content-center align-items-center' style={{ width: 200, height: 300}}>
                    
                </div>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                {props.colors.map(color =>
                         <div style={{cursor: 'pointer' }} className='border border-primary p-5 m-1'>
                            
                         </div>
                )}
            </div>
        </div>
       
    )
}