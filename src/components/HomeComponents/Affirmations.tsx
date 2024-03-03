import { useEffect } from 'react'
import { View, Text } from 'react-native'
import ContentSeparatorTitle from '../ContentSeparatorTitle'
import ReminderCard from './ImportantReminderCard'
import { CustomText } from '../CustomText'
import { useRef, useState } from 'react'
import AffirmationCard from './AffirmationCard'
import { AddNewAffirmation } from './AddNewAffirmation'
import AffirmationModal from '../../modals/AffirmationModal'
import { useBoundStore } from '../../store'
const Affirmations = () => {
  const store = useBoundStore()
  const affirmationStrings = store.affirmations
  const [affirmation, setAffirmation] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAffirmation(
        Math.floor(Math.random() * (affirmationStrings.length - 1 - 0 + 1)) + 0,
      )
    }, 15000)

    return () => {
      clearInterval(interval) // Clear the interval when the component unmounts
    }
  }, [])

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <View style={{ marginTop: 25 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <ContentSeparatorTitle title="Affirmations" />
          <AddNewAffirmation setModalVisible={setShowModal} />
        </View>
        <AffirmationCard displayString={affirmationStrings[affirmation].name} />
      </View>

      <AffirmationModal
        modalVisible={showModal}
        setModalVisible={setShowModal}
      />
    </>
  )
}

export default Affirmations
