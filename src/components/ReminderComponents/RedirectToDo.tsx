import { View, TouchableOpacity } from 'react-native'
import { CustomText } from '../CustomText'
import { ListRemindersSvgComponent } from '../TabSvg'
import { useNavigation } from '@react-navigation/native'
export const RedirectToDo = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ToDoList' as never)
      }}
      style={{
        marginTop: 50,
        width: 125,
        height: 120,
        backgroundColor: '#FB9449',
        borderRadius: 10,
      }}>
      <View
        style={{
          marginTop: 15,
          marginRight: 10,
          alignItems: 'flex-end',
        }}>
        <ListRemindersSvgComponent />
      </View>

      <CustomText
        style={{ color: 'white', fontSize: 18, marginLeft: 12 }}
        weight="semi">
        To Do{'\n'}List
      </CustomText>
    </TouchableOpacity>
  )
}
