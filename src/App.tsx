import { AddNewItem } from './AddNewItem'
import { Column } from './Column'
import { AppContainer } from './styles'

export const App = () => {
  return (
    <AppContainer>
      <Column text="ToDo:" />
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={() => console.log('item created')}
      />
    </AppContainer>
  )
}

export default App
