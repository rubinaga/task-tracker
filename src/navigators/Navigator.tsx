import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import RemindersScreen from '../screens/RemindersScreen'
import CalendarScreen from '../screens/CalendarScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { COLORS } from '../helpers/constants'
import {
  CalendarSvgComponent,
  HomeTabSvg,
  ProfileSvgComponent,
  ReminderSvgComponent,
} from '../components/TabSvg'
import { CustomText } from '../components/CustomText'
import { createStackNavigator } from '@react-navigation/stack'
import { AllReminders } from '../screens/AllReminders'
import { NewReminders } from '../screens/NewReminder'
import { ToDoList } from '../screens/ToDoList'
import { LoginScreen } from '../screens/LoginScreen'
import { RegisterScreen } from '../screens/RegisterScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

const ReminderStack = createStackNavigator()

const ReminderStackScreen = () => {
  return (
    <ReminderStack.Navigator initialRouteName="Reminders1">
      <ReminderStack.Screen
        name="Reminders1"
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
        component={RemindersScreen}
      />
      <ReminderStack.Screen
        name="AllReminders"
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
        component={AllReminders}
      />
      <ReminderStack.Screen
        name="NewReminder"
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
        component={NewReminders}
      />
      <ReminderStack.Screen
        name="ToDoList"
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
        component={ToDoList}
      />
    </ReminderStack.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: {
          height: 73,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: COLORS.themeColor,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <CustomText
              style={{ color: color, fontSize: 14, marginTop: -15 }}
              weight="semi">
              Home
            </CustomText>
          ),
          tabBarIcon: ({ color }) => <HomeTabSvg color={color} />,
        }}
      />
      <Tab.Screen
        name="Reminders"
        component={ReminderStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <CustomText
              style={{ color: color, fontSize: 14, marginTop: -15 }}
              weight="semi">
              Reminder
            </CustomText>
          ),
          tabBarIcon: ({ color }) => <ReminderSvgComponent color={color} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <CustomText
              style={{ color: color, fontSize: 14, marginTop: -15 }}
              weight="semi">
              Calendar
            </CustomText>
          ),
          tabBarIcon: ({ color }) => <CalendarSvgComponent color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <CustomText
              style={{ color: color, fontSize: 14, marginTop: -15 }}
              weight="semi">
              Profile
            </CustomText>
          ),
          tabBarIcon: ({ color }) => <ProfileSvgComponent color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
const BigStack = createStackNavigator()

const Navigator = () => {
  return (
    <BigStack.Navigator initialRouteName="Login">
      <BigStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
      />
      <BigStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
      />
      <BigStack.Screen
        name="OGHome"
        component={TabNavigator}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
      />
    </BigStack.Navigator>
  )
}

export default Navigator
