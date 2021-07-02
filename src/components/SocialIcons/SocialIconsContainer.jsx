import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { socialData } from '../../additionalData/socialItems'
import { getSocialItemsAC } from '../../redux/navigationReducer'
import { getSocialItems } from '../../redux/navigationSelector'
import Social from './Social'

const SocialIconsContainer = ({socialItems, getSocialItems}) => {

    useEffect(() => {
        if(!socialItems.length) {
            getSocialItems(socialData)
        }
    })
    
    return <Social socialItems={socialItems}/> 
}

const mapStateToProps = (state) => {
    return {
        socialItems: getSocialItems(state)
    }
}


export default connect(mapStateToProps, {getSocialItems: getSocialItemsAC})(SocialIconsContainer)