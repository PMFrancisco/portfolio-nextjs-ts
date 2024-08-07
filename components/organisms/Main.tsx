import React from 'react'
import { Photo } from '../atoms/Photo'
import { PresentationCard } from '../molecules/PresentationCard'

export const Main = () => {
  return (<div className='flex items-center justify-center max-h gap-6 px-6 md:px-12 py-12 md:py-20'>
    <Photo />
    <PresentationCard />
    </div>
  )
}
