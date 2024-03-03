import React, { useState } from 'react'
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
import { CustomText } from '../components/CustomText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../helpers/constants'
import { useBoundStore } from '../store'
import { useNavigation } from '@react-navigation/native'
//@ts-ignore
import alertImage from '../assets/images/alert.png'
const DeleteReminderModal = ({
  modalVisible,
  setModalVisible,
  reminderName,
  dateChosen,
  flagChosen,
  noteText,
}: any) => {
  const navigation = useNavigation()
  const [affirmationText, setAffirmationText] = useState<any>()
  const store = useBoundStore()
  return (
    <View style={styles.centeredView}>
      <Modal
        // animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.insideCenteredView}>
          <View style={styles.modalView}>
            <Image
              source={alertImage}
              style={{ width: 110, marginBottom: 10 }}
            />
            <CustomText
              weight="semi"
              style={{
                width: '90%',
                fontSize: 16,
                textAlign: 'center',
                marginBottom: 3,
              }}>
              You are about to delete{' '}
              {reminderName === '' ? `"${reminderName}"` : 'this reminder'}
            </CustomText>
            <CustomText weight="semi" style={{ fontSize: 14, width: '80%' }}>
              Do you want to proceed with the deletion of the reminder?
            </CustomText>
            <View
              style={{
                alignSelf: 'flex-end',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: 7,
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  marginTop: 22,
                  backgroundColor: 'white',
                  paddingVertical: 7,
                  paddingHorizontal: 25,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#EE5F5F',
                }}
                onPress={() => {
                  setModalVisible(false)
                }}>
                <CustomText style={{ color: '#EE5F5F' }} weight="semi">
                  NO
                </CustomText>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  marginTop: 22,
                  backgroundColor: '#EE5F5F',
                  paddingVertical: 7,
                  paddingHorizontal: 25,
                  borderRadius: 20,
                }}
                onPress={() => {
                  store.deleteReminder({
                    reminderName: reminderName,
                    dateSet: dateChosen,
                    switched: true,
                    important: flagChosen,
                    notes: noteText,
                  })
                  setModalVisible(false)
                  navigation.goBack()
                }}>
                <CustomText style={{ color: 'white' }} weight="semi">
                  YES
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 40,
    borderColor: '#EE5F5F',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    width: 300,
    height: 250,
  },
})

export default DeleteReminderModal
