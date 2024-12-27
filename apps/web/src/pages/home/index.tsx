import React from 'react'
// import { PetsList } from '../../components/PetList'
import { SharePetButton } from '../../components/SharePetButton'

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-12 relative min-h-screen">
      {/* <PetsList /> */}
      <SharePetButton />
    </main>
  )
}
