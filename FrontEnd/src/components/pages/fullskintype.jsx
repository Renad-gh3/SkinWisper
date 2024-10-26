import { useState } from 'react'
import Header from '../Header/Header.jsx'
import ExploreMenu from '../ExploreMenu/ExploreMenu.jsx'
import SkinTypeRoutine from '../content/SkinTypeRoutine.jsx'

const fullskintype = () => {
   const[category,setCategory]=useState("All")
  return (
    <div className='app' width='100%' >
      <Header/>
      <ExploreMenu category={category}setCategory={setCategory}/>
      <SkinTypeRoutine category={category} /> 
    </div>
  )
}

export default fullskintype