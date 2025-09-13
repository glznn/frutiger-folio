import React from 'react'
import './SwapArrow.css'
import { findChannelIndex } from '..';
import { channelData } from '../data/channelData';
import { useNavigate } from 'react-router-dom';

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function SwapArrow() {
    const navigate = useNavigate();
    const index = findChannelIndex(window.location.pathname)
  return (
    <div className="SwapArrow">
        <div className="swap__left"
            onClick={ () => {
                if (typeof document !== 'undefined' && 'startViewTransition' in document) {
                    document.startViewTransition(() => {
                        navigate(channelData[index].prev)
                    })
                }
                else {
                    navigate(channelData[index].prev)
                }
            }}
        >
            <FaCaretLeft />
        </div>

        <div className="swap__leftShadow"> 
            <FaCaretLeft />
        </div>

        <div className="swap__right"
            onClick={ () => {
                if (typeof document !== 'undefined' && 'startViewTransition' in document) {
                    document.startViewTransition(() => {
                        navigate(channelData[index].next)
                    })
                }
                else {
                    navigate(channelData[index].next)
                }
            }}
        >
            <FaCaretRight />
        </div>
        
        <div className="swap__rightShadow">
            <FaCaretRight />
        </div>

    </div>
  )
}

export default SwapArrow