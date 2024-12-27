
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import React from 'react'

export const SharePetButton = (): JSX.Element => {
  const { user } = useAuth()
  return (
    <div
      className="flex p-16 mt-16 justify-center w-full"
    >
      <button className="bg-[#02966a] text-white text-sm md:text-lg hover:bg-[#15a97d] p-2 md:p-4"
      >
        <Link to={user ? '/cadastrar-pet' : '/criar-usuario'}>
          <span>
            Quero divulgar um animal
          </span>
        </Link>

      </button>
    </div>
  )
}
