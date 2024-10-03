import React, { type FunctionComponent } from "react"
import { View, ScrollView, } from "react-native"
import useBenchmarks from "../stores/Benchmarks"
import { styles } from "../styles/common"
import { Benchmark } from "../components/Benchmark"
import { measure, smallSize, mediumSize, maxSize } from "../utils/benchmarks"

export const JSI: FunctionComponent = () => {
  const setSmallArrayJsiMeasurements = useBenchmarks.use.setSmallArrayJsiMeasurements()
  const setMediumArrayJsiMeasurements = useBenchmarks.use.setMediumArrayJsiMeasurements()
  const setMaxArrayJsiMeasurements = useBenchmarks.use.setMaxArrayJsiMeasurements()

  const smallArrayJsiMeasurements = useBenchmarks.use.smallArrayJsiMeasurements()
  const mediumArrayJsiMeasurements = useBenchmarks.use.mediumArrayJsiMeasurements()
  const maxArrayJsiMeasurements = useBenchmarks.use.maxArrayJsiMeasurements()

  return (
    <ScrollView>
      <View style={[styles.container, styles.benchmarkContainer]}>
        <Benchmark
          benchmarkFn={() => {
            measure(smallSize)
          }}
          setResult={setSmallArrayJsiMeasurements}
          result={smallArrayJsiMeasurements}
          title={`Small Array JSI ${smallSize} bytes`}
        />

        <Benchmark
          benchmarkFn={() => {
            measure(mediumSize)
          }}
          setResult={setMediumArrayJsiMeasurements}
          result={mediumArrayJsiMeasurements}
          title={`Medium Array JSI ${mediumSize} bytes`}
        />

        <Benchmark
          benchmarkFn={() => {
            measure(maxSize)
          }}
          setResult={setMaxArrayJsiMeasurements}
          result={maxArrayJsiMeasurements}
          title={`Max Array JSI ${maxSize} bytes`}
        />

      </View>
    </ScrollView>
  )
}
