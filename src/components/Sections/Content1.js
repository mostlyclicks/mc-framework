import React from 'react'
import styled from 'styled-components'

const Content1 = () => {
  return (
    <Div>
      <div><h1>2022 Scott Addict</h1></div>
      <div><img src='../../../2022-Addict-RC-40.png' alt="bike" /></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas saepe omnis quam doloremque sit nam quisquam optio voluptatum unde quo error quidem modi quasi! Vero recusandae quibusdam illum totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vitae officia. Libero suscipit repudiandae adipisci doloribus similique perferendis dolores aperiam impedit quaerat ullam enim possimus, quas vero doloremque ex?</p></div>
      
    </Div>
  )
}

export default Content1

const Div = styled.div`

  display:flex;
  
  gap:1rem;
  align-content:center;
  

 div {
    flex:1 1 33%;
    outline:1px solid red;
    
    
    
  }

  img {
    width:100%;
    
    outline:1px solid green;
    
    
  }




`



