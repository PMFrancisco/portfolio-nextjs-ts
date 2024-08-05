import React from 'react'
import { Photo } from '../atoms/Photo'
import { PresentationCard } from '../molecules/PresentationCard'

export const Main = () => {
  return (<div className='flex items-center gap-6'>
    <Photo />
    <PresentationCard />
    </div>
  )
}
