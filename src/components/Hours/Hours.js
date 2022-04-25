import { useEffect, useState } from 'react'
import '../Hours/Hours.css'

function Hours() {

  return (
    <div className="container hours-cont">
      <h1>Vida Exotica</h1>
      <p className='hours-title'>Horas de operacion</p>
      <div >
        <ul className='hours-text-cont'>
          <li><span className='bold'>Martes-Jueves</span>: 15:00 - 22:00</li>
          <li><span className='bold'>Viernes</span>: 15:00 - 00:00</li>
          <li><span className='bold'>Sabado</span>: 15:00 - 01:00</li>
          <li><span className='bold'>Domingo</span>: 15:00 - 22:00</li>
        </ul>
      </div>
    </div>

  );
}

export default Hours;