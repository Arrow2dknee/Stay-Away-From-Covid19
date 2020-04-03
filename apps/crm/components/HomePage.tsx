import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import './style.css'

const HomePage: NextPage<{}, {}> = () => {
  return (
    <div>
        <div className='header'>
            <h1 className='heading'>COVID-19</h1>
            <div className='rightContent'>
                <span className='links'><Link href='/'>Home</Link></span>
                <span className='links'><Link href='/'>Clusters</Link></span>
                <span className='links'><Link href='/'>FAQ</Link></span>
                </div>
            </div>
            <div>
            <img src='https://media.graytvinc.com/images/810*461/virus.png' alt='coronavirus' className='virusImg'/>
            <p className='content'>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease,
                and cancer are more likely to develop serious illness.
            </p>
        </div>
        <div className='card-body'>
            <h3 className='card-title'>WHO Guidelines</h3>
            <p className='card-content'>To stop the spread of the coronavirus, health officials have a favorite refrain: After being in a city or region where there have been a lot of COVID-19 cases, spend 14 days in quarantine even if you feel perfectly fine — don't leave your house. Coming from New York? 14-day quarantine. Arriving in Hawaii? 14-day quarantine. Been in Italy or China or Iran recently? 14-day quarantine.</p>
            <span className='link'><Link href='/linkpage' >Helpful Links</Link></span>
        </div>
    </div>
  )
}

export default HomePage
