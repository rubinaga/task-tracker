import { Text, View } from 'react-native'
import { CustomText } from '../components/CustomText'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LastEditedRemindersList } from '../components/ReminderComponents/LastEditedRemindersList'

const RemindersScreen = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 45 }}>
      <CustomText style={{ marginTop: 30, fontSize: 28 }} weight="semi">
        My Lists
      </CustomText>
      <LastEditedRemindersList />
    </SafeAreaView>
  )
}

export default RemindersScreen
