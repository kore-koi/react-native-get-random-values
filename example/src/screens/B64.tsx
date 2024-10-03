import React, { type FunctionComponent } from "react"
import { View, ScrollView } from "react-native"
import { measureB64, maxSize, mediumSize, smallSize } from "../utils/benchmarks"
import { Benchmark } from "../components/Benchmark"
import { styles } from "../styles/common"
import useBenchmarks from "../stores/Benchmarks"

export const B64: FunctionComponent = () => {
  const setSmallArrayB64Measurements = useBenchmarks.use.setSmallArrayB64Measurements()
  const setMediumArrayB64Measurements = useBenchmarks.use.setMediumArrayB64Measurements()
  const setMaxArrayB64Measurements = useBenchmarks.use.setMaxArrayB64Measurements()

  const smallArrayB64Measurements = useBenchmarks.use.smallArrayB64Measurements()
  const mediumArrayB64Measurements = useBenchmarks.use.mediumArrayB64Measurements()
  const maxArrayB64Measurements = useBenchmarks.use.maxArrayB64Measurements()

  return (
    <ScrollView>
      <View style={[styles.container, styles.benchmarkContainer]}>
        <Benchmark
          benchmarkFn={() => {
            measureB64(smallSize)
          }}
          setResult={setSmallArrayB64Measurements}
          result={smallArrayB64Measurements}
          title={`Small Array B64 ${smallSize} bytes`}
        />

        <Benchmark
          benchmarkFn={() => {
            measureB64(mediumSize)
          }}
          setResult={setMediumArrayB64Measurements}
          result={mediumArrayB64Measurements}
          title={`Medium Array B64 ${mediumSize} bytes`}
        />

        <Benchmark
          benchmarkFn={() => {
            measureB64(maxSize)
          }}
          setResult={setMaxArrayB64Measurements}
          result={maxArrayB64Measurements}
          title={`Max Array B64 ${maxSize} bytes`}
        />

      </View>
    </ScrollView>
  )
}