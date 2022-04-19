import * as React from 'react'
import Link from 'next/link'
import { UnstyledButton, Navbar } from '@mantine/core'
import Pages from '../data/pages'

const AppNavBar = ({ expanded }: { expanded: boolean }) => {
  return (
    <Navbar
      className={
        (expanded ? 'w-screen' : 'w-0') + ' sm:w-48 lg:w-64 overflow-hidden'
      }
      width={{ base: 200 }}
      height={'100vh'}
    >
      {Object.entries(Pages).map(([k, v], key) => (
        <Navbar.Section key={key}>
          <Link href={v} passHref>
            <UnstyledButton className="hover:bg-gray-100 rounded w-full px-2 py-2">
              {k}
            </UnstyledButton>
          </Link>
        </Navbar.Section>
      ))}
    </Navbar>
  )
}

export default AppNavBar