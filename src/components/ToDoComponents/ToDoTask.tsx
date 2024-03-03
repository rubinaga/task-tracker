import { ITask } from '../../helpers/interfaces'
import { TouchableOpacity, TextInput, View, Keyboard } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomText } from '../CustomText'
import { useBoundStore } from '../../store'
import { useState, useRef, useEffect } from 'react'
export const ToDoTask = ({ title, checked, setVisible }: any) => {
  const store = useBoundStore()
  const [taskTitle, setTaskTitle] = useState<string | undefined>(title)
  const [isChecked, setIsChecked] = useState<boolean>(checked)
  const inpRef = useRef<any>()

  useEffect(() => {
    Keyboard.addListener('keyboardWillHide', event => {
      if (inpRef.current) {
        inpRef.current.blur()
      }
    })
    Keyboard.addListener('keyboardDidHide', event => {
      if (inpRef.current) {
        inpRef.current.blur()
      }
    })
  }, [])

  return (
    <TouchableOpacity
      onPress={() => {
        store.modifyTask({
          title: title,
          checked: !checked,
        })
      }}
      style={{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          marginRight: 12,
          borderWidth: 1,
          height: 35,
          width: 35,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {checked && (
          <MaterialCommunityIcons name="check" size={32} color={'black'} />
        )}
      </View>
      <TextInput
        ref={inpRef}
        onBlur={() => {
          if (taskTitle && taskTitle?.length > 0) {
            if (setVisible) {
              store.addTask({
                title: taskTitle,
                checked: isChecked,
              })
            } else {
              store.modifyTask({
                title: taskTitle,
                checked: isChecked,
              })
            }
          } else {
            store.deleteTask({
              title: title,
              checked: isChecked,
            })
          }
          if (setVisible) setVisible(false)
        }}
        value={taskTitle}
        onChangeText={t => setTaskTitle(t)}
        style={{}}
        placeholder="Write here..."
      />
    </TouchableOpacity>
  )
}
