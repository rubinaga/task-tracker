import { View, Image } from 'react-native'
import { CustomText } from '../CustomText'

//@ts-ignore
import Brainy from '../../assets/images/brainy.png'

export const BrainyFriend = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 70,
        justifyContent: 'center',
      }}>
      <CustomText style={{ fontSize: 26 }} weight="semi">
        MemoryFriend
      </CustomText>
      <Image source={Brainy} />
    </View>
  )
}
