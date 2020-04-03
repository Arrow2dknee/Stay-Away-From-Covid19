import React from 'react'
import { NextPage } from 'next'
import './style.css'

const LinkPage: NextPage<{}, {}> = () => {
  return (
    <div>
        <h1 className='heading'>HELPFUL LINKS</h1>
        <div className='linkPageContents'>
            <li><a href='https://www.mohfw.gov.in/'>HTTPS://WWW.MOHFW.GOV.IN/</a></li>
            <li><a href='https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf'>HTTPS://WWW.MOHFW.GOV.IN/PDF/CORONVAVIRUSHELPLINENUMBER.PDF</a></li>
            <li><a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>HTTPS://WWW.WHO.INT/EMERGENCIES/DISEASES/NOVEL-CORONAVIRUS-2019</a></li>
            <li><a href='https://www.cdc.gov/coronavirus/2019-ncov/faq.html'>HTTPS://WWW.CDC.GOV/CORONAVIRUS/2019-NCOV/FAQ.HTML</a></li>
        </div>
    </div>
  )
}

export default LinkPage
