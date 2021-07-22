import * as React from "react";

type TimeProps = {
  remainingTime?: number
  elapsedTime?: number
}

type ChildAsFunc = {
  (props: TimeProps): number | string | React.ReactNode
}

type Props = {
  children?: ChildAsFunc
  duration: number,
  isPlaying?: boolean
  onComplete?: (totalElapsedTime: number) => void | [boolean, number] // [shouldRepeat: boolean, delay: number]
  ariaLabel?: string,
  // stylesFlag?: StyleProp<ImageStyle>,
}

export default Props;
