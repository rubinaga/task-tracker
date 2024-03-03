import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigators/Navigator'
import { RootSiblingParent } from 'react-native-root-siblings'

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </RootSiblingParent>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
