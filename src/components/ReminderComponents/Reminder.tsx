import { View, Switch, TouchableOpacity } from 'react-native'
import { memo } from 'react'
import { CustomText } from '../CustomText'
import { IRem } from '../../helpers/interfaces'
import { FlagSvgComponent } from '../TabSvg'
import { COLORS } from '../../helpers/constants'
import { useBoundStore } from '../../store'
import { formatDate } from '../../helpers/helperFunctions'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

const Reminder = ({
  reminderName,
  dateSet,
  switched,
  important,
  notes,
}: IRem) => {
  const boundStore = useBoundStore()
  console.log(reminderName, dateSet, switched, important, notes)
  function handleSwitch() {
    boundStore.modifyReminder({
      reminderName: reminderName,
      dateSet: dateSet,
      switched: !switched,
      important: important,
      notes: notes,
    })
  }

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(
          'NewReminder' as never,
          {
            reminder: {
              reminderName: reminderName,
              dateSet: dateSet,
              switched: switched,
              important: important,
              notes: notes,
            },
          } as never,
        )
      }}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.37)',
      }}>
      <View
        style={{ flexDirection: 'column', paddingBottom: 10, marginTop: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 5,
            alignItems: 'center',
          }}>
          <CustomText weight="medium" style={{ fontSize: 16 }}>
            {reminderName}
          </CustomText>
          {important && <FlagSvgComponent />}
        </View>

        <CustomText
          weight="medium"
          style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.53)' }}>
          {formatDate(dateSet)}
        </CustomText>
      </View>
      <Switch
        style={{
          marginRight: 8,
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
        onValueChange={handleSwitch}
        value={switched}
        trackColor={{
          false: 'rgba(217, 217, 217, 0.62)',
          true: COLORS.themeColor,
        }}
        thumbColor={'#FFFFFF'}
      />
    </TouchableOpacity>
  )
}

export default memo(Reminder)
