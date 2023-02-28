import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout({ asThemeToggler, asCurrentTheme }: any) {
  return (
    <LayoutContainer>
      <Header asThemeToggler={asThemeToggler} asCurrentTheme={asCurrentTheme} />
      <Outlet />
    </LayoutContainer>
  )
}
