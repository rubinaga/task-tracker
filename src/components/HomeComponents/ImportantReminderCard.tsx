import { View, Text } from 'react-native'
import { COLORS } from '../../helpers/constants'
import { CustomText } from '../CustomText'

const ImportantReminderCard = ({
  displayString,
}: {
  displayString: string
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: COLORS.backgroundShade,
        height: 45,
        borderRadius: 20,
      }}>
      <CustomText>{displayString}</CustomText>
    </View>
  )
}

export default ImportantReminderCard
