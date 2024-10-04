import React, { type FunctionComponent } from "react";
import { View, ScrollView, } from "react-native"
import useBenchmarks from "../stores/Benchmarks";
import { Card, DataTable, Text, useTheme } from 'react-native-paper';
import { largeSize, maxSize, mediumSize, smallSize } from "../utils/benchmarks";
import { styles } from "../styles/common";
import { resultString } from "../utils/time";
import { Percentage } from "../components/Percentage";

export const Results: FunctionComponent = () => {
  const theme = useTheme()

  const smallArrayB64Measurements = useBenchmarks.use.smallArrayB64Measurements()
  const mediumArrayB64Measurements = useBenchmarks.use.mediumArrayB64Measurements()
  const largeArrayB64Measurements = useBenchmarks.use.largeArrayB64Measurements()
  const maxArrayB64Measurements = useBenchmarks.use.maxArrayB64Measurements()

  const smallArrayJsiMeasurements = useBenchmarks.use.smallArrayJsiMeasurements()
  const mediumArrayJsiMeasurements = useBenchmarks.use.mediumArrayJsiMeasurements()
  const largeArrayJsiMeasurements = useBenchmarks.use.largeArrayJsiMeasurements()
  const maxArrayJsiMeasurements = useBenchmarks.use.maxArrayJsiMeasurements()

  return (
    <ScrollView>
      <View style={[styles.container, styles.benchmarkContainer]}>
        <Card.Title
          title={"Comparison table"}
          subtitle={"Comparing performance for different array sizes"}
          subtitleNumberOfLines={2}
          subtitleStyle={{ color: theme.colors.secondary }}
        />

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Array size</DataTable.Title>
            <DataTable.Title numeric>JSI Time</DataTable.Title>
            <DataTable.Title numeric>B64 Time</DataTable.Title>
            <DataTable.Title numeric>%</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>
              {`${smallSize} bytes`}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(smallArrayJsiMeasurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(smallArrayB64Measurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              <Percentage jsiTime={smallArrayJsiMeasurements} b64Time={smallArrayB64Measurements} />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>
              {`${mediumSize} bytes`}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(mediumArrayJsiMeasurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(mediumArrayB64Measurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              <Percentage jsiTime={mediumArrayJsiMeasurements} b64Time={mediumArrayB64Measurements} />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>
              {`${largeSize} bytes`}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(largeArrayJsiMeasurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(largeArrayB64Measurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              <Percentage jsiTime={largeArrayJsiMeasurements} b64Time={largeArrayB64Measurements} />
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>
              {`${maxSize} bytes`}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(maxArrayJsiMeasurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              {resultString(maxArrayB64Measurements)}
            </DataTable.Cell>

            <DataTable.Cell numeric>
              <Percentage jsiTime={maxArrayJsiMeasurements} b64Time={maxArrayB64Measurements} />
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </ScrollView>
  )
}
