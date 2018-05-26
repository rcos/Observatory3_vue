
// Event Module Constants
export const URL_ROOT = '/api/events'

// Event Types
const TYPE_LARGE_GROUP = 'LARGE_GROUP'
const TYPE_CASUAL_CODING = 'CASUAL_CODING'
const TYPE_TECH_TALK = 'TECH_TALK'
const TYPE_CODE_JAM = 'CODE_JAM'
const TYPE_HACKATHON = 'HACKATHON'
const TYPE_EXPO = 'EXPO'

// Event Type dropdown
export const TYPE_DROPDOWN = [
  { value: TYPE_CASUAL_CODING, label: 'Casual Coding Session' },
  { value: TYPE_TECH_TALK, label: 'Tech Talk' },
  { value: TYPE_CODE_JAM, label: 'Code Jam' },
  { value: TYPE_HACKATHON, label: 'Hackathon' },
  { value: TYPE_EXPO, label: 'RCOS Expo' }
]

export const NEW_EVENT = {
  label: '',
  type: TYPE_CASUAL_CODING,
  errors: {}
}

export const NEW_LARGE_GROUP = {
  label: 'Large Group Meeting',
  type: TYPE_LARGE_GROUP,
  start_time: '17:00',
  end_time: '18:00',
  location: 'DCC 318',
  errors: {}
}
