import BigNumber from "bignumber.js"

const oneSecond = BigNumber("1000")
const DECIMAL_PLACES = 5

BigNumber.config({
  DECIMAL_PLACES,
  ROUNDING_MODE: BigNumber.ROUND_DOWN
})

export const formatDuration = (time: number): string => {
  const bnTime = BigNumber(time)

  if (bnTime.isGreaterThan(oneSecond)) {
    return `${bnTime.dividedBy(oneSecond).toFixed(DECIMAL_PLACES)}s`
  }

  return `${bnTime.toFixed(DECIMAL_PLACES)}ms`
}

export const resultString = (time: number | undefined): string => {
  if (time === undefined) {
    return "N/A"
  }

  return formatDuration(time)
}
