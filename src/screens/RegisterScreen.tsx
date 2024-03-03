import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomText } from '../components/CustomText'
import { BrainyFriend } from '../components/LoginComponents/BrainyFriend'
import { TextInput, View, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react'
import { COLORS } from '../helpers/constants'
import { useNavigation } from '@react-navigation/native'
import { useBoundStore } from '../store'
export const RegisterScreen = () => {
  const [email, setEmail] = useState<string>()
  const [name, setName] = useState<string>()
  const [surname, setSurname] = useState<string>()
  const store = useBoundStore()
  const [password, setPassword] = useState<string>()
  const navigation = useNavigation()
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
          Register Page
        </CustomText>

        <View
          style={{
            marginTop: 55,
            width: '70%',
            alignSelf: 'center',
          }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={e => setName(e)}
              style={{
                flex: 1,
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 15,
              }}
            />
            <TextInput
              placeholder="Surname"
              value={surname}
              onChangeText={e => setSurname(e)}
              style={{
                flex: 1,
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 15,
              }}
            />
          </View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={e => setEmail(e)}
            style={{
              marginTop: 20,

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
          onPress={() => {
            store.addAccount({
              id: Math.floor(Math.random() * 200),
              name: name,
              surname: surname,
              password: password,
              email: email,
            })
            navigation.navigate('Login' as never)
          }}
          style={{
            marginTop: 40,
            alignSelf: 'center',
            backgroundColor: COLORS.themeColor,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 35,
          }}>
          <CustomText style={{ fontSize: 22 }} weight="semi">
            Register{' '}
          </CustomText>
        </TouchableOpacity>

        <CustomText
          style={{
            alignSelf: 'center',
            marginTop: 25,
          }}>
          Already have an account? Login{' '}
          <CustomText
            weight="semi"
            onPress={() => navigation.navigate('Login' as never)}>
            here.
          </CustomText>
        </CustomText>
      </ScrollView>
    </SafeAreaView>
  )
}
