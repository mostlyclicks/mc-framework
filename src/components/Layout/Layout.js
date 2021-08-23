import React from 'react'
import styled from 'styled-components'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <Div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Div>
  )
}

export default Layout

const Div = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
`

const Main = styled.main`
  padding:1.25rem;
  flex-basis:100%;
`