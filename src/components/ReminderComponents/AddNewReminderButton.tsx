import { useNavigation } from '@react-navigation/native'
import { CustomText } from '../CustomText'
import { TouchableOpacity } from 'react-native'
export const AddNewReminderButton = ({
  type,
  setVisible,
}: {
  type: string
  setVisible?: any
}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={{
        marginTop: 15,
        backgroundColor: 'black',
        height: 30,
        paddingHorizontal: 20,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => {
        if (type === 'reminder')
          navigation.navigate('NewReminder' as never, {} as never)
        else {
          setVisible(true)
        }
      }}>
      <CustomText
        style={{ fontSize: 20, color: 'white', marginBottom: 5 }}
        weight="semi">
        +
      </CustomText>
    </TouchableOpacity>
  )
}
