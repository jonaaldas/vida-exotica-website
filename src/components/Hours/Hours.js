import { useEffect, useState } from 'react'
import '../Hours/Hours.css'
import { useTranslation } from "react-i18next";
function Hours() {
  const { t } = useTranslation(["Hours"])
  return (
    <div className="container hours-cont">
      <h1>Vida Exotica</h1>
      <p className='hours-title'>{t("Horario de Atención")}</p>
      <div >
        <ul className='hours-text-cont'>
          <li><span className='bold'>{t("Martes-Jueves")}</span>: 15:00 - 22:00</li>
          <li><span className='bold'>{t("Viernes")}</span>: 15:00 - 00:00</li>
          <li><span className='bold'>{t("Sabado")}</span>: 15:00 - 01:00</li>
          <li><span className='bold'>{t("Domingo")}</span>: 15:00 - 22:00</li>
        </ul>
      </div>
    </div>

  );
}

export default Hours;