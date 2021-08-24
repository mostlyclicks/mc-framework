import React from 'react'
import styled from 'styled-components'

const Content1 = () => {
  return (
    <Div>
      <h1>2022 Scott Addict</h1>
      <img src='../../../2022-Addict-RC-40.png' alt="bike" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas saepe omnis quam doloremque sit nam quisquam optio voluptatum unde quo error quidem modi quasi! Vero recusandae quibusdam illum totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vitae officia. Libero suscipit repudiandae adipisci doloribus similique perferendis dolores aperiam impedit quaerat ullam enim possimus, quas vero doloremque ex?</p>
    </Div>
  )
}

export default Content1

const Div = styled.div`

  img {
    max-width:100%;
    max-height:100%;
  }
  // h1 {
  //   text-transform:uppercase;
  //   line-height:1em;
  // }
  // p {
  //   line-height:1.55em;
  // }
`


