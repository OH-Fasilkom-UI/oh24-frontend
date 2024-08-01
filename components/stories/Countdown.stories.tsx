import Countdown from '../elements/Countdown'

export default {
  title: 'Components/Countdown'
}

export const Main = () => <Countdown targetDate={new Date("2024-10-10")}  />

export const DisplayDate = () => <Countdown displayDate targetDate={new Date("2024-10-10")}  />
