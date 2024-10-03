import React, { type FunctionComponent } from "react";
import { View, ScrollView, } from "react-native"
import useBenchmarks from "../stores/Benchmarks";
import { Card, DataTable, useTheme } from 'react-native-paper';
import { maxSize, mediumSize, smallSize } from "../utils/benchmarks";
import { styles } from "../styles/common";
import { resultString } from "../utils/time";

export const Results: FunctionComponent = () => {
  const theme = useTheme()

  const smallArrayB64Measurements = useBenchmarks.use.smallArrayB64Measurements()
  const mediumArrayB64Measurements = useBenchmarks.use.mediumArrayB64Measurements()
  const maxArrayB64Measurements = useBenchmarks.use.maxArrayB64Measurements()

  const smallArrayJsiMeasurements = useBenchmarks.use.smallArrayJsiMeasurements()
  const mediumArrayJsiMeasurements = useBenchmarks.use.mediumArrayJsiMeasurements()
  const maxArrayJsiMeasurements = useBenchmarks.use.maxArrayJsiMeasurements()

  return (
    <ScrollView>
      <View style={[styles.container, styles.benchmarkContainer]}>

        <Card>
          <Card.Title
            title={"JSI"}
            subtitle={"Benchmark results for JSI"}
            subtitleStyle={{ color: theme.colors.secondary }}
          />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Benchmark</DataTable.Title>
                <DataTable.Title numeric>Time</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>
                  {`${smallSize} bytes`}
                </DataTable.Cell>

                <DataTable.Cell numeric>
                  {resultString(smallArrayJsiMeasurements)}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>
                  {`${mediumSize} bytes`}
                </DataTable.Cell>

                <DataTable.Cell numeric>
                  {resultString(mediumArrayJsiMeasurements)}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>
                  {`${maxSize} bytes`}
                </DataTable.Cell>

                <DataTable.Cell numeric>
                  {resultString(maxArrayJsiMeasurements)}
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>

        <Card>
          <Card.Title
            title={"Base64"}
            subtitle={"Benchmark results for B64"}
            subtitleStyle={{ color: theme.colors.secondary }}
          />
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Benchmark</DataTable.Title>
                <DataTable.Title numeric>Time</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>
                  {`${smallSize} bytes`}
                </DataTable.Cell>

                <DataTable.Cell numeric>
                  {resultString(smallArrayB64Measurements)}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>
                  {`${mediumSize} bytes`}
                </DataTable.Cell>

                <DataTable.Cell numeric>
                  {resultString(mediumArrayB64Measurements)}
                </DataTable.Cell>

              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>
                  {`${maxSize} bytes`}
                </DataTable.Cell>

                <DataTable.Cell numeric>
                  {resultString(maxArrayB64Measurements)}
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </Card.Content>
        </Card>

      </View>
    </ScrollView>
  )
}
