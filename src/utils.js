import R from 'ramda'
import { AsyncStorage } from 'react-native'

const msPerDay = 24*60*60*1000
export const imageLabels = ['Awful', 'Poor', 'Average', 'Good', 'Great']

export const emojis = [
  {
    unselected: require('../assets/Emojis/Simple/Awful.png'),
    selected: require('../assets/Emojis/Color/Awful.png')
  },
  {
    unselected: require('../assets/Emojis/Simple/Poor.png'),
    selected: require('../assets/Emojis/Color/Poor.png')
  },
  {
    unselected: require('../assets/Emojis/Simple/Average.png'),
    selected: require('../assets/Emojis/Color/Average.png')
  },
  {
    unselected: require('../assets/Emojis/Simple/Good.png'),
    selected: require('../assets/Emojis/Color/Good.png')
  },
  {
    unselected: require('../assets/Emojis/Simple/Great.png'),
    selected: require('../assets/Emojis/Color/Great.png')
  }
]

export const stars = {
  unselected: require('../assets/Stars/simple.png'),
  selected: require('../assets/Stars/color.png')
}

export function setAlpha(color, alpha) {
  const alphaValue = (() => {
    const hex = Math.floor(R.clamp(0, 100, alpha) * (255 / 100)).toString(16)
    if (hex.length === 1) {
      return `0${hex}`
    }
    return hex
  })()
  return color.substring(0, 7) + alphaValue // Format: #rrggbbaa
}

export function setShowDate(ratings = 0, noOfDays) {
  const today = Date.now()
  const nextTime = today + noOfDays*msPerDay
  const neverShow = ratings === 5
  const showDate = { nextTime, neverShow }
  AsyncStorage.setItem('SHOW_DATE', JSON.stringify(showDate))
}

export default R.cond([
  [R.equals(1), R.always('awful')],
  [R.equals(2), R.always('poor')],
  [R.equals(3), R.always('average')],
  [R.equals(4), R.always('good')],
  [R.equals(5) , R.always('great')]
])