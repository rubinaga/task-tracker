import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomText } from '../components/CustomText'
import { BrainyFriend } from '../components/LoginComponents/BrainyFriend'
import { TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react'
import { COLORS } from '../helpers/constants'
import { useNavigation } from '@react-navigation/native'
import { useBoundStore } from '../store'
export const LoginScreen = () => {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const navigation = useNavigation()

  const store = useBoundStore()
  const accounts = store.accounts

  function isLogginSuccessful() {
    return accounts.find(account => account.email === email)
  }

  const mentors = [
    'johnsmith123@example.com',
    'emily.jones456@gmail.com',
    'david.brown789@hotmail.com',
    'sarahmiller234@yahoo.com',
    'jasonwilson321@outlook.com',
    'lisa.johnson567@gmail.com',
    'michaelthompson987@yahoo.com',
    'jenniferdavis345@hotmail.com',
    'robertmitchell876@outlook.com',
    'amandawalker654@gmail.com',
  ]
  const randomIndex = Math.floor(Math.random() * mentors.length)

  return (
    <SafeAreaView>
      <ScrollView>
        <BrainyFriend />
        <CustomText
          style={{
            fontSize: 20,
            color: 'black',
            alignSelf: 'center',
            marginTop: 60,
          }}
          weight="semi">
          Login Page
        </CustomText>

        <View
          style={{
            marginTop: 55,
            width: '70%',
            alignSelf: 'center',
          }}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={e => setEmail(e)}
            style={{
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 15,
            }}
          />

          <TextInput
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={e => setPassword(e)}
            style={{
              marginTop: 20,
              borderWidth: 1,
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 15,
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            marginTop: 40,
            alignSelf: 'center',
            backgroundColor: COLORS.themeColor,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 35,
          }}>
          <CustomText
            style={{ fontSize: 22 }}
            weight="semi"
            onPress={() => {
              const accountToFind = isLogginSuccessful()
              if (accountToFind === undefined) return
              store.currentAccount = accountToFind
              store.mentor = mentors[randomIndex]
              navigation.navigate('OGHome' as never)
            }}>
            Login
          </CustomText>
        </TouchableOpacity>

        <CustomText style={{ alignSelf: 'center', marginTop: 25 }}>
          Don't have an account? Register{' '}
          <CustomText
            weight="semi"
            onPress={() => {
              navigation.navigate('Register' as never)
            }}>
            here.
          </CustomText>
        </CustomText>
      </ScrollView>
    </SafeAreaView>
  )
}
