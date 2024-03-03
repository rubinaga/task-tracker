import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomText } from '../components/CustomText'
import { View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { AddNewReminderButton } from '../components/ReminderComponents/AddNewReminderButton'
import { useBoundStore } from '../store'
import Reminder from '../components/ReminderComponents/Reminder'
import { useNavigation } from '@react-navigation/native'
import { LeftArrowSvgComponent } from '../components/TabSvg'
import { ToDoTask } from '../components/ToDoComponents/ToDoTask'
import { ITask } from '../helpers/interfaces'
import { useState } from 'react'
export const ToDoList = () => {
  const store = useBoundStore()
  const navigation = useNavigation()
  const tasks = store.tasks
  const [showNew, setShowNew] = useState<boolean>(false)
  return (
    <SafeAreaView style={{ marginHorizontal: 25 }}>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Reminders1' as never)}
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <LeftArrowSvgComponent />
          <CustomText weight="medium">Back</CustomText>
        </TouchableOpacity>
        <CustomText style={{ marginTop: 10, fontSize: 28 }} weight="semi">
          My Lists
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <CustomText style={{ marginTop: 15, fontSize: 18 }} weight="medium">
            To Do List
          </CustomText>
          <AddNewReminderButton type={'todo'} setVisible={setShowNew} />
        </View>

        {tasks.map((task: ITask, index: number) => (
          <ToDoTask title={task.title} checked={task.checked} key={index} />
        ))}
        {showNew && (
          <ToDoTask
            title={''}
            setVisible={setShowNew}
            checked={false}
            key={1231}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
