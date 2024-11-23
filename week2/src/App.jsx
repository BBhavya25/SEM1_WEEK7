import React from 'react'
import GroceryList from './components/GroceryList'
import UserCards from './components/UserCards'
import UserDetailsTable from './components/UserDetailsTable'
import NestedCategories from './components/NestedCategories'
import ColorList from './components/ColorList'
import ConditionalRenderingExamples from './components/ConditionalRenderingExamples'
import EventHandlingDemo from './components/EventHandlingDemo'
import UseStateDemo from './components/UseStateDemo'
import UseRefDemo from './components/UseRefDemo'
import ImageHandlingApp from './components/ImageHandlingApp'


const App = () => {
  return (
    <div>
      <h1>Task1</h1>
      <GroceryList/>
      <h1>Task2</h1>
      <UserCards/>
      <h1>Task3</h1>
      <UserDetailsTable/>
      <h1>Task4</h1>
      <NestedCategories/>
      <h1>Task5</h1>
      <ColorList/>
      <ConditionalRenderingExamples/>
      <EventHandlingDemo/>
      <UseStateDemo/>
      <UseRefDemo/>
      <ImageHandlingApp/>
    </div>
  )
}

export default App