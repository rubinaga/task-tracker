import { View, Text } from 'react-native'
import { COLORS } from '../../helpers/constants'
import { CustomText } from '../CustomText'

const AffirmationCard = ({ displayString }: { displayString: string }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: COLORS.backgroundShade,
        height: 105,
        borderRadius: 20,
        paddingHorizontal: 30,
      }}>
      <CustomText>{displayString}</CustomText>
    </View>
  )
}

export default AffirmationCard
