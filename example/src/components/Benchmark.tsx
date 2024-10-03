import React, { useState, type FunctionComponent } from 'react'
import { Button, Card, useTheme } from 'react-native-paper'
import useBenchmark from '../stores/Benchmarks'
import { sleep } from '../utils/helpers'
import { formatDuration } from '../utils/time'

type Props = {
  title: string
  benchmarkFn: () => void
  setResult: (result: number) => void
  result: number | undefined
}

export const Benchmark: FunctionComponent<Props> = ({
  title = "BenchmarkName",
  benchmarkFn,
  setResult,
  result
}) => {
  const theme = useTheme()
  const isLoading = useBenchmark.use.isLoading()
  const setIsLoading = useBenchmark.use.setIsLoading()

  const [currentLoading, setCurrentLoading] = useState<boolean>(false)

  const handleStartBenchmark = async() => {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    setCurrentLoading(true)

    // workaround to show the loading state
    await sleep(100)

    const start = performance.now()
    benchmarkFn()
    const end = performance.now()

    setResult(end - start)

    setIsLoading(false)
    setCurrentLoading(false)
  }

  return (
    <Card>
      <Card.Title
        title={title}
        subtitle={typeof result === "undefined" ? "You still haven't done this benchmark" : `This benchmark took: ${formatDuration(result)}`}
        subtitleStyle={{ color: theme.colors.secondary }}
      />
      <Card.Content>
        <Button
          mode="contained-tonal"
          onPress={handleStartBenchmark}
          loading={currentLoading && isLoading}
          disabled={isLoading}
        >
          Start this benchmark
        </Button>
      </Card.Content>
    </Card>
  )
}
