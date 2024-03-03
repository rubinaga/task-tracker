import { createStackNavigator } from '@react-navigation/stack'
import { AllReminders } from '../screens/AllReminders'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllReminders" component={AllReminders} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  )
}
