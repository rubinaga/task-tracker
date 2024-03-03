import { View, Text } from 'react-native'
import ContentSeparatorTitle from '../ContentSeparatorTitle'
import ReminderCard from './ImportantReminderCard'
import { useBoundStore } from '../../store'

const ImportantReminders = () => {
  const arr1 = ['Reminder 1', 'Reminder 2']

  const store = useBoundStore()
  const reminders = store.reminders
  const sortedReminders = reminders
    .sort((a, b) => Math.abs(a.dateSet) - Math.abs(b.dateSet))
    .slice(0, 2)

  return (
    <View style={{ marginTop: 50 }}>
      <ContentSeparatorTitle title="Important Reminders" />
      {sortedReminders.map((e, idx) => (
        <ReminderCard displayString={e.reminderName} key={idx} />
      ))}
    </View>
  )
}

export default ImportantReminders
