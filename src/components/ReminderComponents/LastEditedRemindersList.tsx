import { View } from 'react-native'
import { CustomText } from '../CustomText'
import { MOCK_DATA } from '../../helpers/constants'
import { IRem } from '../../helpers/interfaces'
import Reminder from './Reminder'
import { useBoundStore } from '../../store'
import { RedirectToDo } from './RedirectToDo'
import { RedirectAllReminders } from './RedirectAllReminders'

export const LastEditedRemindersList = ({ navigation }: any) => {
  function getClosestReminders(reminders: Array<IRem>) {
    const currentDate = Date.now()
    const sortedReminders = reminders.sort(
      (a, b) =>
        Math.abs(a.dateSet - currentDate) - Math.abs(b.dateSet - currentDate),
    )
    return sortedReminders.slice(0, 3)
  }
  const store = useBoundStore()

  const closestReminders = getClosestReminders(store.reminders)
  return (
    <View style={{ marginTop: 15 }}>
      <CustomText style={{ fontSize: 18, marginBottom: 14 }} weight="medium">
        Last modified
      </CustomText>
      {closestReminders.map((rem, index) => (
        <Reminder
          dateSet={rem.dateSet}
          reminderName={rem.reminderName}
          switched={rem.switched}
          important={rem.important}
          notes={rem.notes}
          key={index}
        />
      ))}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <RedirectToDo />
        <RedirectAllReminders />
      </View>
    </View>
  )
}
