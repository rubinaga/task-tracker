import { TouchableOpacity } from 'react-native'
import { CustomText } from '../CustomText'
import { COLORS } from '../../helpers/constants'

export const AddNewAffirmation = ({ setModalVisible }: any) => {
  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={{
        backgroundColor: COLORS.themeColor,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 20,
      }}>
      <CustomText weight="medium">Add New</CustomText>
    </TouchableOpacity>
  )
}
