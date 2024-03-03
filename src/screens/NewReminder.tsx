import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomText } from '../components/CustomText'
import {
  TouchableOpacity,
  TextInput,
  View,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native'
import { useBoundStore } from '../store'
import { useRef, useState } from 'react'
import { FlagSvgComponent, LeftArrowSvgComponent } from '../components/TabSvg'
//@ts-ignore
import FlagWhite from '../assets/images/flag-white.png'
//@ts-ignore
import FlagYellow from '../assets/images/flag-yellow.png'
//@ts-ignore
import Garbage from '../assets/images/bin.png'

import { COLORS } from '../helpers/constants'
import DateTimePicker from '@react-native-community/datetimepicker'
import { formatDate, formatTime } from '../helpers/helperFunctions'
import { IRem } from '../helpers/interfaces'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-root-toast'
import DeleteReminderModal from '../modals/DeleteReminderModal'

export const NewReminders = ({ route }: any) => {
  const reminder: IRem = route.params?.reminder
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const store = useBoundStore()
  const reminders = store.reminders
  const [openKeyboardOnFocus, setOpenKeyboardOnFocus] = useState(false)
  const [dateChosen, setDateChosen] = useState<number | undefined>(
    reminder?.dateSet,
  )
  const [timeChosen, setTimeChosen] = useState<any>(reminder?.dateSet)
  const [dateOpen, setDateOpen] = useState<boolean>(false)
  const [timeOpen, setTimeOpen] = useState<boolean>(false)
  const dateNow = new Date()
  const inputRef = useRef<any>()
  const changeFocus = () => {
    inputRef?.current?.blur()
    setTimeout(() => {
      inputRef?.current?.focus()
    }, 0)

    setOpenKeyboardOnFocus(true)
  }
  const [flagChosen, setFlagChosen] = useState<boolean>(
    reminder ? reminder.important : false,
  )
  const [noteText, setNoteText] = useState<string | undefined>(reminder?.notes)
  const navigation = useNavigation()
  const [reminderName, setReminderName] = useState<string | undefined>(
    reminder?.reminderName,
  )

  return (
    <>
      <ScrollView>
        <SafeAreaView style={{ marginHorizontal: 35 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllReminders' as never)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <LeftArrowSvgComponent />
            <CustomText weight="medium">All reminders</CustomText>
          </TouchableOpacity>
          <TextInput
            value={reminderName}
            ref={inputRef}
            showSoftInputOnFocus={openKeyboardOnFocus}
            autoFocus={reminder ? false : true}
            onPressIn={changeFocus}
            style={{
              marginTop: 20,
              fontSize: 28,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(0, 0, 0, 0.37)',
              fontFamily: 'InterMedium',
            }}
            placeholder="New Reminder..."
            onChangeText={e => setReminderName(e)}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
              width: '80%',
            }}>
            <CustomText weight="semi" style={{ fontSize: 16 }}>
              Date
            </CustomText>
            <TouchableOpacity
              onPress={() => setDateOpen(true)}
              style={{
                backgroundColor: dateChosen === undefined ? 'black' : 'white',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 30,
              }}>
              {dateChosen === undefined ? (
                <CustomText style={{ color: 'white', fontSize: 14 }}>
                  Set Date
                </CustomText>
              ) : (
                <CustomText
                  style={{ color: 'rgba(0,0,0, 0.53)', fontSize: 14 }}>
                  {formatDate(dateChosen)}
                </CustomText>
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              width: '80%',
            }}>
            <CustomText weight="semi" style={{ fontSize: 16 }}>
              Time
            </CustomText>
            <TouchableOpacity
              onPress={() => setTimeOpen(true)}
              style={{
                backgroundColor: timeChosen === undefined ? 'black' : 'white',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 30,
              }}>
              {timeChosen === undefined ? (
                <CustomText style={{ color: 'white', fontSize: 14 }}>
                  Set Time
                </CustomText>
              ) : (
                <CustomText
                  style={{ color: 'rgba(0,0,0, 0.53)', fontSize: 14 }}>
                  {formatTime(timeChosen)}
                </CustomText>
              )}
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              width: '78%',
            }}>
            <CustomText weight="semi" style={{ fontSize: 16 }}>
              Mark as important
            </CustomText>
            <TouchableOpacity onPress={() => setFlagChosen(e => !e)}>
              {!flagChosen && (
                <Image source={FlagWhite} style={{ height: 30, width: 30 }} />
              )}
              {flagChosen && (
                <Image source={FlagYellow} style={{ height: 30, width: 30 }} />
              )}
            </TouchableOpacity>
          </View>

          <CustomText weight="semi" style={{ fontSize: 16, marginTop: 25 }}>
            Notes
          </CustomText>
          <TextInput
            style={{
              textAlignVertical: 'top',
              paddingTop: 15,
              marginTop: 20,
              backgroundColor: COLORS.backgroundShade,
              borderRadius: 25,
              paddingHorizontal: 20,
              fontSize: 16,
            }}
            placeholder={'Insert here...'}
            multiline={true}
            numberOfLines={8}
            onChangeText={text => {
              if (text.length <= 90) setNoteText(text)
            }}
            value={noteText}
          />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity
              onPress={() => {
                setIsDeleteModalVisible(true)
              }}
              style={{
                marginTop: 35,
                alignSelf: 'center',
                alignItems: 'center',
                gap: 7,
                flexDirection: 'row',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#EE5F5F',
                paddingVertical: 7,
                paddingHorizontal: 25,
              }}>
              <Image source={Garbage} />
              <CustomText
                style={{ color: '#EE5F5F', fontSize: 18 }}
                weight="medium">
                Delete
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (reminderName?.length === 0 || dateChosen === undefined) {
                  return
                }

                if (reminder !== undefined) {
                  store.modifyReminder({
                    reminderName: reminderName,
                    dateSet: dateChosen,
                    switched: true,
                    important: flagChosen,
                    notes: noteText,
                  })
                } else {
                  store.addReminder({
                    reminderName: reminderName,
                    dateSet: dateChosen,
                    switched: true,
                    important: flagChosen,
                    notes: noteText,
                  })
                }
                store.showToast = true
                navigation.goBack()
              }}
              style={{
                backgroundColor: COLORS.themeColor,
                marginTop: 35,
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 20,
                paddingVertical: 7,
                paddingHorizontal: 45,
              }}>
              <CustomText
                style={{ color: 'black', fontSize: 18 }}
                weight="semi">
                Save
              </CustomText>
            </TouchableOpacity>
          </View>

          {dateOpen && (
            <DateTimePicker
              mode="date"
              display="spinner"
              minimumDate={dateNow}
              value={dateNow}
              onChange={event => {
                if (event.type == 'set') {
                  setDateChosen(event.nativeEvent.timestamp!)
                }
                setDateOpen(false)
              }}
            />
          )}
          {timeOpen && (
            <DateTimePicker
              mode="time"
              display="spinner"
              minimumDate={dateNow}
              value={dateNow}
              onChange={event => {
                if (event.type == 'set') {
                  setTimeChosen(event.nativeEvent.timestamp!)
                }
                setTimeOpen(false)
              }}
            />
          )}
        </SafeAreaView>
      </ScrollView>
      <DeleteReminderModal
        modalVisible={isDeleteModalVisible}
        setModalVisible={setIsDeleteModalVisible}
        reminderName={reminderName}
        dateChosen={dateChosen}
        flagChosen={flagChosen}
        noteText={noteText}
      />
    </>
  )
}
