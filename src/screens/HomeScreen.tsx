import { SafeAreaView } from 'react-native-safe-area-context'
import Affirmations from '../components/HomeComponents/Affirmations'
import { Activities } from '../components/HomeComponents/Activities'
import ImportantReminders from '../components/HomeComponents/ImportantReminders'
import { ScrollView } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 25 }}>
      <ScrollView>
        <ImportantReminders />
        <Affirmations />
        <Activities />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
