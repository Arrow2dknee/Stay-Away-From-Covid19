import React from 'react'
import { NextPage } from 'next'
import HomePage from '../components/HomePage'

const homepage: NextPage<{}, {}> = () => {
    return (
        <div>
            <HomePage />
        </div>
  )
}

export default homepage
