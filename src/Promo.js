import React from 'react'
import './Promo.css'

import BottomChannel from './components/BottomChannel'
import { motion } from 'framer-motion'

function Promo() {

  document.title= "Your Name Here!"

  return (
    <div className="Promo">

      <SlidingText time="40" begin="0" end="-100%"/>
      <SlidingText time="41" begin="-100%" end="0"/>
      <SlidingText time="42" begin="0" end="-100%"/>
      <SlidingText time="43" begin="-100%" end="0"/>
      <SlidingText time="44" begin="0" end="-100%"/>
      <SlidingText time="45" begin="-100%" end="0"/>
      
      <BottomChannel buttonText={"Contact"} pathName={'/contact'}/>
    </div>
  )
}

function SlidingText( { time, begin, end } ) {
  return (
    <motion.h1 className="promo__text"
      style= {{ whitespace: "nowrap" }}
      animate= {{ x: [begin, end] }}
      transition= {{ duration: time, repeat:Infinity, ease: "linear", repeatType: "loop" }}>
      Your Name Here Your Name Here Your Name Here Your Name Here Your Name Here 
    </motion.h1>
  )
}

export default Promo