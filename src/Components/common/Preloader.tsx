import React from 'react'
import preloader from '../../assets/preloader.svg'
import classNew from './Preloader.module.css'
const Preloader = () => {
    return <div className={classNew.preloader}>
        <img src={preloader} alt="preloader"/>
    </div>
}

export {Preloader}