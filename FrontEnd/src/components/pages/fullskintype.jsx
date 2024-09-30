import { useState } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Header from '../Header/Header.jsx'
import ExploreMenu from '../ExploreMenu/ExploreMenu.jsx'
import SkinTypeRoutine from '../content/SkinTypeRoutine.jsx'
import Footer from '../Footer/Footer.jsx'
const fullskintype = () => {
   const[category,setCategory]=useState("All")
  return (
    <div className='app' width='100%' >
      <Navbar/>
      <Header/>
      <ExploreMenu category={category}setCategory={setCategory}/>
      <SkinTypeRoutine category={category} /> 
      <Footer/>
    </div>
  )
}

export default fullskintype