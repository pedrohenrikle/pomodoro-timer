import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout({ asThemeToggler }: any) {
  return (
    <LayoutContainer>
      <Header asThemeToggler={asThemeToggler} />
      <Outlet />
    </LayoutContainer>
  )
}
