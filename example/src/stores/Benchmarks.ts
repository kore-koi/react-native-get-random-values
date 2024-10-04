import { create } from "zustand"
import { createSelectors } from "../utils/zustand"

type BenchmarksStore  = {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void

  smallArrayJsiMeasurements: number | undefined
  smallArrayB64Measurements: number | undefined

  mediumArrayJsiMeasurements: number | undefined
  mediumArrayB64Measurements: number | undefined

  largeArrayJsiMeasurements: number | undefined
  largeArrayB64Measurements: number | undefined

  maxArrayJsiMeasurements: number | undefined
  maxArrayB64Measurements: number | undefined

  setSmallArrayJsiMeasurements: (smallArrayJsiMeasurements: number) => void
  setSmallArrayB64Measurements: (smallArrayB64Measurements: number) => void

  setMediumArrayJsiMeasurements: (mediumArrayJsiMeasurements: number) => void
  setMediumArrayB64Measurements: (mediumArrayB64Measurements: number) => void

  setLargeArrayJsiMeasurements: (largeArrayJsiMeasurements: number) => void
  setLargeArrayB64Measurements: (largeArrayB64Measurements: number) => void

  setMaxArrayJsiMeasurements: (maxArrayJsiMeasurements: number) => void
  setMaxArrayB64Measurements: (maxArrayB64Measurements: number) => void
}

export const useBenchmark = create<BenchmarksStore>((set) => ({
    isLoading: false,
    setIsLoading: (isLoading: boolean) => set({ isLoading }),

    smallArrayB64Measurements: undefined,
    smallArrayJsiMeasurements: undefined,

    mediumArrayJsiMeasurements: undefined,
    mediumArrayB64Measurements: undefined,

    largeArrayB64Measurements: undefined,
    largeArrayJsiMeasurements: undefined,

    maxArrayJsiMeasurements: undefined,
    maxArrayB64Measurements: undefined,

    setSmallArrayJsiMeasurements: (smallArrayJsiMeasurements: number) => {
      set({ smallArrayJsiMeasurements })
    },

    setSmallArrayB64Measurements: (smallArrayB64Measurements: number) => {
      set({ smallArrayB64Measurements })
    },

    setMediumArrayJsiMeasurements: (mediumArrayJsiMeasurements: number) => {
      set({ mediumArrayJsiMeasurements })
    },

    setMediumArrayB64Measurements: (mediumArrayB64Measurements: number) => {
      set({ mediumArrayB64Measurements })
    },

    setLargeArrayJsiMeasurements: (largeArrayJsiMeasurements: number) => {
      set({ largeArrayJsiMeasurements })
    },

    setLargeArrayB64Measurements: (largeArrayB64Measurements: number) => {
      set({ largeArrayB64Measurements })
    },

    setMaxArrayJsiMeasurements: (maxArrayJsiMeasurements: number) => {
      set({ maxArrayJsiMeasurements })
    },

    setMaxArrayB64Measurements: (maxArrayB64Measurements: number) => {
      set({ maxArrayB64Measurements })
    }
}))

export default createSelectors(useBenchmark)
