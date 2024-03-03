import { View } from 'react-native'
import { CustomText } from '../CustomText'
import ContentSeparatorTitle from '../ContentSeparatorTitle'
import ActivityCard from './ActivityCard'
export const Activities = () => {
  const arr1 = [1, 2, 3, 14, 5, 6]

  const activitiesArr = [
    {
      title: 'Brain Games',
      icon: 'game-controller-outline',
    },
    {
      title: 'Podcasts',
      icon: 'mic-outline',
    },
    {
      title: 'Youtube',
      icon: 'ios-logo-youtube',
    },
    {
      title: 'Brain Games',
      icon: 'game-controller-outline',
    },
    {
      title: 'Podcasts',
      icon: 'mic-outline',
    },
    {
      title: 'Youtube',
      icon: 'ios-logo-youtube',
    },
  ]

  return (
    <View style={{ marginTop: 25 }}>
      <ContentSeparatorTitle title="Activities" />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {activitiesArr.map((e, idx) => (
          <ActivityCard displayString={e.title} iconName={e.icon} key={idx} />
        ))}
      </View>
    </View>
  )
}
