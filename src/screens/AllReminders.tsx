import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomText } from '../components/CustomText'
import { View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { AddNewReminderButton } from '../components/ReminderComponents/AddNewReminderButton'
import { useBoundStore } from '../store'
import Reminder from '../components/ReminderComponents/Reminder'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { LeftArrowSvgComponent } from '../components/TabSvg'
import { useEffect, useState } from 'react'
import Toast from 'react-native-root-toast'

export const AllReminders = () => {
  const store = useBoundStore()
  const navigation = useNavigation()
  const reminders = store.reminders
  const showToast = store.showToast
  console.log(showToast)
  const [isVisibleToast, setIsVisibleToast] = useState(store.showToast)

  const isFocused = useIsFocused()

  useEffect(() => {
    if (showToast && isFocused) {
      setIsVisibleToast(true)
      setTimeout(() => {
        setIsVisibleToast(false)
        store.showToast = false
      }, 2500)
    }
  }, [isFocused])

  return (
    <SafeAreaView style={{ marginHorizontal: 25 }}>
      <Toast
        visible={isVisibleToast}
        position={120}
        shadow={false}
        animation={true}
        hideOnPress={true}
        backgroundColor="#C1FFBC"
        // duration={4500}
        textColor="black">
        <View>
          <CustomText weight="semi" style={{ fontSize: 22 }}>
            Success!
          </CustomText>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'black',
              marginVertical: 5,
            }}
          />
          <CustomText>Reminder added to the list</CustomText>
        </View>
      </Toast>
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
          }}>
          <CustomText style={{ marginTop: 15, fontSize: 18 }} weight="medium">
            All reminders
          </CustomText>
          <AddNewReminderButton type={'reminder'} />
        </View>

        {reminders.map((rem, index) => (
          <Reminder
            dateSet={rem.dateSet}
            reminderName={rem.reminderName}
            switched={rem.switched}
            important={rem.important}
            notes={rem.notes}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
