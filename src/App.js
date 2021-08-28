import React from 'react'
import Layout from './components/Layout/Layout'
import './App.css';
import Content1 from './components/Sections/Content1'
import BikesList from './components/Sections/BikesList'

function App() {

  const bikes = [
    { title: 'Scott Addict RC', imgUrl: '../../../2022-Addict-RC-40.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas saepe omnis quam doloremque sit nam quisquam optio voluptatum unde quo error quidem modi quasi! Vero recusandae quibusdam illum totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vitae officia. Libero suscipit repudiandae adipisci doloribus similique perferendis dolores aperiam impedit quaerat ullam enim possimus, quas vero doloremque ex'  },
    { title: 'Scott Genius 910', imgUrl: '../../../2022-Addict-RC-40.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas saepe omnis quam doloremque sit nam quisquam optio voluptatum unde quo error quidem modi quasi! Vero recusandae quibusdam illum totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vitae officia. Libero suscipit repudiandae adipisci doloribus similique perferendis dolores aperiam impedit quaerat ullam enim possimus, quas vero doloremque ex'},
    { title: 'Scott Spark RC 920', imgUrl: '../../../2022-Addict-RC-40.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptas saepe omnis quam doloremque sit nam quisquam optio voluptatum unde quo error quidem modi quasi! Vero recusandae quibusdam illum totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est soluta vitae officia. Libero suscipit repudiandae adipisci doloribus similique perferendis dolores aperiam impedit quaerat ullam enim possimus, quas vero doloremque ex' }
  ]


  return (
    <>
      <Layout>
       
        <Content1 />
        <BikesList />

      </Layout>
    </>
  );
}

export default App;
