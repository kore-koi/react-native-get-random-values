import React, { useMemo, type FunctionComponent } from 'react'
import { Text } from 'react-native-paper'

type Props = {
  jsiTime: number | undefined
  b64Time: number | undefined
}

export const Percentage: FunctionComponent<Props> = ({ jsiTime, b64Time }) => {
  const fasterPercentage = useMemo(() => {
    if (typeof jsiTime === 'undefined' || typeof b64Time === 'undefined') {
      return undefined
    }

    return ((b64Time - jsiTime) / b64Time) * 100
  }, [jsiTime, b64Time])

  return (
    <Text
      style={typeof fasterPercentage === "undefined" ? undefined : {
        color: fasterPercentage > 0 ? 'green' : 'red',
      }}
    >
      {fasterPercentage ? `${fasterPercentage.toFixed(2)}%` : 'N/A'}
    </Text>
  )
}
