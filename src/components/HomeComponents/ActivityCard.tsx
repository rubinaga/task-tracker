import { Linking, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../helpers/constants'
import { CustomText } from '../CustomText'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const ActivityCard = ({
  displayString,
  iconName,
}: {
  displayString: string
  iconName: any
}) => {
  const handleOpenLink = () => {
    let url = ''
    if (displayString.includes('Brain')) {
      url = 'https://www.gamesforthebrain.com'
    } else if (displayString.includes('Podcasts')) {
      url =
        'https://www.hopkinsmedicine.org/psychiatry/specialty_areas/memory_center/patient_family_resources/podcasts-and-essays.html'
    } else if (displayString.includes('Youtube')) {
      url = 'https://www.youtube.com'
    }

    // Open the link using the Linking module
    Linking.openURL(url).catch(error => {
      // Handle error if the link cannot be opened
      console.log('Error opening link:', error)
    })
  }
  return (
    <TouchableOpacity
      onPress={handleOpenLink}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: COLORS.backgroundShade,
        height: 90,
        width: '30%',
        borderRadius: 15,
        borderWidth: 1,
      }}>
      <Ionicons name={iconName || 'airplane'} size={32} color={'black'} />

      <CustomText>{displayString}</CustomText>
    </TouchableOpacity>
  )
}

export default ActivityCard
