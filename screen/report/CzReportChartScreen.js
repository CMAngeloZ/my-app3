import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Appbar, DataTable } from 'react-native-paper';
import supabase from '../../config/supabase';

//chart library
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default function CzReportChartScreen({ navigation }) {
    //state
    const [tableData, setTableData] = useState([]);
    const [chartData, setChartData] = useState([]);

    //initial function
    useEffect(() => {
        getData();
    }, []);

    //get data
    const getData = async() => {
        const { data, error } = await supabase
                    .rpc('citizen_recap');
        
        //table data
        setTableData(data)

        //chart data
        let chartValue = [];
        data.map(row => 
            chartValue.push({
                x: row.country_name,
                y: row.citizen_total,
            })
        )
        setChartData(chartValue);
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Report Chart" />
            </Appbar.Header>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={100}
            >
            <VictoryBar
                // original data
                // data={[
                //     { x: "Cats", y: 35 },
                //     { x: "Dogs", y: 40 }
                // ]}
                data={chartData}
            />
            </VictoryChart>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Country</DataTable.Title>
                    <DataTable.Title numeric>Citizen Total</DataTable.Title>
                </DataTable.Header>

                <FlatList
                    data={tableData}
                    renderItem={({item}) => 
                        <DataTable.Row>
                            <DataTable.Cell>{item.country_name}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.citizen_total}</DataTable.Cell>
                        </DataTable.Row>
                    }
                    keyExtractor={item => item.id}
                />
            </DataTable>
        </>
    )
}
    