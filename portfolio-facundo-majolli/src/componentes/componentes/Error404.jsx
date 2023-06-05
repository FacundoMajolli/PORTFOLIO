import React from 'react'
import {Link} from 'react-router-dom'
import {home} from '../../constants/constants'
import '../../CSS/Error404.css'

const Error404 = () => {
  return (
    <>
      <div className="contenedor">
        <div className="div-error" title="ERROR 404">ERROR 404</div>
        <p className='volver'>
          <Link className='link-volver' title='Volver' to={home}>Volver</Link>
        </p>
      </div>
    </>
  )
}

export default Error404
