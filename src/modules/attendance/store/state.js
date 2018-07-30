import { BUILD_COLLECTION_STATE } from '@/store/lib/mixins'

// Attendance Module State
export default {
  // ...COLLECTION_STATE
  ...BUILD_COLLECTION_STATE('collection'),
  ...BUILD_COLLECTION_STATE('unverifiedAttendance')
}
