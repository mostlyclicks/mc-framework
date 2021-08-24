import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Div>
      <h1>Header</h1>
      {/* <Logo />
      // <Nav />
      // <SubNav /> */}
    </Div>
  )
}

export default Header

const Div = styled.header`
  background-color:#e7e7e7;
  padding:1.25rem;
`

