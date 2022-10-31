import React, { useEffect } from 'react'
import { useState } from 'react'
import Button from './Buttons'
let filterByType = [
  'Great for Groups', 'Family-friendly', 'Animals', 'Arts & Baking', 'Baking', 'Cooking', 'Dance', "Drink", 'Entertainment', 'Fitness', 'History & Culture', 'Magic', 'Music', 'Social Impact', 'Wellness', 'Olympians & Paralympians', 'Desgined for accessibilty'
]
export default function Filter() {

  let [FilterByTypeData, setfilterByTypeData] = useState([])
  useEffect(() => {
    setfilterByTypeData(filterByType)
  }, [])

  return (
    <div>
      <Button></Button>
    </div>
  )
}
