import { View, TouchableOpacity } from 'react-native'
import { CustomText } from '../CustomText'
import { BellSvgComponent, ListRemindersSvgComponent } from '../TabSvg'
import { useNavigation } from '@react-navigation/native'
export const RedirectAllReminders = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={{
        marginTop: 50,
        width: 125,
        height: 120,
        backgroundColor: '#334269',
        borderRadius: 10,
      }}
      onPress={() => {
        navigation.navigate('AllReminders' as never)
      }}>
      <View
        style={{
          marginTop: 15,
          marginRight: 15,
          //   flexDirection: 'row-reverse',
          alignItems: 'flex-end',
        }}>
        <BellSvgComponent />
      </View>

      <CustomText
        style={{ color: 'white', fontSize: 18, marginLeft: 12 }}
        weight="semi">
        All{'\n'}Reminders
      </CustomText>
    </TouchableOpacity>
  )
}
