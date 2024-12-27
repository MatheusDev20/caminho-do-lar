import { Link as RedirectLink, useNavigate, Link } from 'react-router-dom'

import homeLogo from '../../../assets/home_dog.svg'
import { useAuth } from '../../context/AuthContext'
import React from 'react'

export const Header = (): JSX.Element => {
  const { user } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <div className="bg-[#1F2029] border-b-2 border-t-0 border-r-0 border-l-0 border-gray-500 py-2 px-2">
        <header className="flex items-center justify-around">
          {/* DropDown Responsive Icon */}
          {/* <IconButto
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ base: 'block', sm: 'block', md: 'none' }}
            bg='gray.700'
            _hover={{
              bg: 'gray.500'
            }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
          {/* HAF Logo and Icon */}
            <div>
                <span onClick={() => { navigate('/home') }} >
                  HELP A FRIEND
                </span>
              <img src={homeLogo} />
            </div>

            {/* Navigation Links Desktop */}
            <div
              className="flex flex-row gap-12">
              {activeLinks.map((link) => (
                !link.auth && (
                    <NavLink
                    redirectTo={link.redirectTo}
                    key={link.label}>{link.label}</NavLink>
                )
              ))}
            </div>

            {/* Navigation Links Desktop - END */}
          {/* User profile Info */}
          {user
            ? (
            <div
              className="items-center flex flex-row gap-4">
              <p>{user?.name}</p>
              <img src={user?.avatar} />
              <button>
                <p>Signout</p>
                {/* <Icon
                  onClick={signOut}
                  _hover={{ color: 'orange.200' }}
                  color='orange.400'
                  as={CgLogOut} /> */}
              </button>
            </div>
              )
            : <div
              className="flex flex-row gap-4 p-4">
              <RedirectLink to='/login'>
                <button
                  color='#02966a'>
                  Entrar
                </button>
              </RedirectLink>
              <RedirectLink to='/criar-usuario'>
                <button>
                  Cadastrar
                </button>
              </RedirectLink>
            </div>
          }

          {/* User profile Info - END */}

        </header>

        {/* {
          isOpen
            ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {activeLinks.map((link) => (
                  !link.auth && (
                    <NavLink
                    redirectTo={link.redirectTo}
                    key={link.label}>{link.label}</NavLink>
                  )
                ))}
              </Stack>
            </Box>
              )
            : null
        } */}
      </div>
    </>
  )
}

const NavLink = ({ children, redirectTo }: NavProps): JSX.Element => (
  <RedirectLink to={redirectTo} style={{ marginTop: '0.5rem' }}>
    <Link
    to="/"
      color={'orange.400'}
    >
      {children}
    </Link>
  </RedirectLink >
)

interface NavProps {
  children: string
  redirectTo: string
}
const activeLinks = [
  {
    label: 'Meus interesses',
    redirectTo: '/criar-usuario',
    auth: true
  },
  {
    label: 'Quero Adotar',
    redirectTo: '/criar-usuario',
    auth: false
  },
  {
    label: 'Ajudar',
    redirectTo: '/criar-usuario',
    auth: false
  }
]
