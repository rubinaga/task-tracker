import React, { useState } from 'react'
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { CustomText } from '../components/CustomText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../helpers/constants'
import { useBoundStore } from '../store'

const AffirmationModal = ({ modalVisible, setModalVisible }: any) => {
  //   const [modalVisible, setModalVisible] = useState(false)
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
            <CustomText weight="semi" style={{ fontSize: 16 }}>
              Add Custom Affirmation
            </CustomText>
            <MaterialCommunityIcons
              name="close"
              size={32}
              color={'black'}
              style={{ position: 'absolute', top: 10, right: 10 }}
              onPress={() => setModalVisible(false)}
            />
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
              placeholder={'Write here...'}
              multiline={true}
              numberOfLines={5}
              onChangeText={text => {
                if (text.length <= 90) setAffirmationText(text)
              }}
              value={affirmationText}
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginTop: 22,
                backgroundColor: COLORS.themeColor,
                paddingVertical: 7,
                paddingHorizontal: 25,
                borderRadius: 20,
              }}
              onPress={() => {
                store.addAffirmations({ name: affirmationText })
                setModalVisible(false)
              }}>
              <CustomText weight="medium">Add</CustomText>
            </TouchableOpacity>
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
    backgroundColor: 'white',
    paddingTop: 30,
    paddingHorizontal: 20,
    width: 300,
    height: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default AffirmationModal
