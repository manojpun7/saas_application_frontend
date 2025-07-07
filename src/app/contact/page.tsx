import { useAppDispatch } from '@/lib/store/hook'
import { setAddress, setName } from '@/lib/store/userSlice'
import React from 'react'

const Contact = () => {
    let address = "kathmandu"
    let name = "manoj"
    const dispatch = useAppDispatch()
    dispatch(setName(name))
    dispatch(setAddress(address))
  return (
    <div>
      
    </div>
  )
}

export default Contact

