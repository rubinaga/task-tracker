import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { Agenda } from 'react-native-calendars'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomText } from '../components/CustomText'

const timeToString = (time: string | number | Date) => {
  const date = new Date(time)
  return date.toISOString().split('T')[0]
}

const CalendarScreen = () => {
  const [items, setItems] = React.useState<any>({})
  const loadItems = (day: { timestamp: number }) => {
    setTimeout(() => {
      const startDate = day.timestamp - 15 * 24 * 60 * 60 * 1000 // Start 15 days before the selected day
      const endDate = day.timestamp + 85 * 24 * 60 * 60 * 1000 // End 85 days after the selected day
      const newItems = {}

      for (let time = startDate; time <= endDate; time += 24 * 60 * 60 * 1000) {
        const strTime = timeToString(time)
        if (!items[strTime]) {
          // Generate items for a random subset of dates
          if (Math.random() < 0.2) {
            items[strTime] = []
            const numItems = Math.floor(Math.random() * 3 + 1)
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                name: 'Item for ' + strTime + ' #' + j,
                height: Math.max(10, Math.floor(Math.random() * 150)),
                day: strTime,
              })
            }
          }
        }
      }

      Object.keys(items).forEach(key => {
        newItems[key] = items[key]
      })

      setItems(newItems)
    }, 1000)
  }

  const renderItem = (item: {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
  }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomText style={{ fontSize: 22, marginBottom: 10 }} weight="semi">
        Calendar
      </CustomText>
      <CustomText style={{ marginBottom: 10 }}>
        All your reminders in one place
      </CustomText>
      <CustomText style={{ marginBottom: 10 }}>
        Where there is a dot, there is a special reminder waiting for you
      </CustomText>

      <Agenda
        // style={{ marginBottom: 5 }}
        items={items}
        theme={{}}
        loadItemsForMonth={loadItems}
        selected={'2022-07-07'}
        // refreshControl={null}
        showClosingKnob={true}
        refreshing={false}
        renderItem={renderItem}
      />

      {/* <StatusBar /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 45,
    flex: 1,
  },

  item: {
    flex: 1,

    borderRadius: 5,

    padding: 10,

    marginRight: 10,

    marginTop: 17,
  },
})
export default CalendarScreen
