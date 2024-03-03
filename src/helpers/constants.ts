import { IRem } from './interfaces'

export const COLORS = {
  themeColor: '#86E976',
  backgroundShade: '#F4F4F4',
}

export const MOCK_DATA = {
  MOCK_REMINDERS: [
    {
      reminderName: 'Dentist Appointment',
      dateSet: 1679424000000, // Set a future date and time in milliseconds
      switched: true,
      important: false,
      notes: 'testing random',
    },
    {
      reminderName: 'Grocery Shopping',
      dateSet: 1679510400000,
      switched: false,
      important: true,
      notes: 'testing random',
    },
    {
      reminderName: 'Pay Rent',
      dateSet: 1679773200000,
      switched: true,
      important: false,
      notes: 'testing random',
    },
    {
      reminderName: 'Meeting with Clients',
      dateSet: 1680028800000,
      switched: false,
      important: true,
      notes: 'testing random',
    },
    {
      reminderName: 'Gym Session',
      dateSet: 1680288000000,
      switched: true,
      important: false,
      notes: 'testing random',
    },
    {
      reminderName: 'Buy Birthday Gift',
      dateSet: 1680547200000,
      switched: false,
      important: true,
      notes: 'testing random',
    },
    {
      reminderName: 'Submit Report',
      dateSet: 1680806400000,
      switched: false,
      important: false,
      notes: 'testing random',
    },
    {
      reminderName: 'Book Flight Tickets',
      dateSet: 1681065600000,
      switched: false,
      important: true,
      notes: 'testing random',
    },
    {
      reminderName: 'Wash Car',
      dateSet: 1681065612400,
      switched: true,
      important: true,
      notes: 'testing random',
    },
  ],
  MOCK_TODO: [
    {
      title: 'Take out trash',
      checked: true,
    },
    {
      title: 'Clean room',
      checked: false,
    },
    {
      title: 'Feed pet',
      checked: true,
    },
    {
      title: 'Cook dinner',
      checked: false,
    },
    {
      title: 'Go to supermarket',
      checked: false,
    },
  ],
  MOCK_USERS: [
    {
      id: 1,
      email: 'rubinaga02@gmail.com',
      password: '123',
      name: 'Rubin',
      surname: 'Aga',
    },
  ],
  MOCK_AFFIRMATIONS: [
    { name: 'I am worthy of love, happiness, and success.' },
    { name: 'I embrace change and confidently step out of my comfort zone.' },
    { name: 'I am grateful for all the abundance in my life.' },
    { name: 'I believe in my abilities and trust in my own wisdom.' },
    { name: 'I radiate positivity and attract positive experiences.' },
    { name: 'I am in control of my thoughts and choose empowering beliefs.' },
    { name: 'I am surrounded by supportive and loving people.' },
    {
      name: 'I am resilient and can overcome any challenge that comes my way.',
    },
    {
      name: 'I am deserving of good health, and I take care of my body and mind.',
    },
    { name: 'I am capable of achieving my goals and fulfilling my dreams.' },
    { name: 'I embrace my uniqueness and let my authentic self shine.' },
    { name: 'I release all negativity and embrace a mindset of gratitude.' },
    {
      name: 'I am confident, capable, and worthy of success in all areas of my life.',
    },
    { name: 'I attract abundance and prosperity effortlessly.' },
    {
      name: 'I forgive myself and others, and I choose to let go of past hurts.',
    },
  ],
}
