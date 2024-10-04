import React, { type FunctionComponent } from "react"
import { View, ScrollView, } from "react-native"
import useBenchmarks from "../stores/Benchmarks"
import { styles } from "../styles/common"
import { Benchmark } from "../components/Benchmark"
import { measure, smallSize, mediumSize, maxSize, largeSize } from "../utils/benchmarks"

export const JSI: FunctionComponent = () => {
  const setSmallArrayJsiMeasurements = useBenchmarks.use.setSmallArrayJsiMeasurements()
  const setMediumArrayJsiMeasurements = useBenchmarks.use.setMediumArrayJsiMeasurements()
  const setLargeArrayJsiMeasurements = useBenchmarks.use.setLargeArrayJsiMeasurements()
  const setMaxArrayJsiMeasurements = useBenchmarks.use.setMaxArrayJsiMeasurements()

  const smallArrayJsiMeasurements = useBenchmarks.use.smallArrayJsiMeasurements()
  const mediumArrayJsiMeasurements = useBenchmarks.use.mediumArrayJsiMeasurements()
  const largeArrayJsiMeasurements = useBenchmarks.use.largeArrayJsiMeasurements()
  const maxArrayJsiMeasurements = useBenchmarks.use.maxArrayJsiMeasurements()


  return (
    <ScrollView>
      <View style={[styles.container, styles.benchmarkContainer]}>
        <Benchmark
          benchmarkFn={() => measure(smallSize)}
          setResult={setSmallArrayJsiMeasurements}
          result={smallArrayJsiMeasurements}
          title={`10k loops on Small Array JSI ${smallSize} bytes`}
        />

        <Benchmark
          benchmarkFn={() => measure(mediumSize)}
          setResult={setMediumArrayJsiMeasurements}
          result={mediumArrayJsiMeasurements}
          title={`10k loops on Medium Array JSI ${mediumSize} bytes`}
        />

        <Benchmark
          benchmarkFn={() => measure(largeSize)}
          setResult={setLargeArrayJsiMeasurements}
          result={largeArrayJsiMeasurements}
          title={`10k loops on Large Array JSI ${mediumSize} bytes`}
        />

        <Benchmark
          benchmarkFn={() => measure(maxSize)}
          setResult={setMaxArrayJsiMeasurements}
          result={maxArrayJsiMeasurements}
          title={`10k loops on Max Array JSI ${maxSize} bytes`}
        />

      </View>
    </ScrollView>
  )
}
