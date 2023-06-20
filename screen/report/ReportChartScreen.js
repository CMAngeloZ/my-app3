import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Appbar, DataTable } from 'react-native-paper';
import supabase from '../../config/supabase';

//chart library
import { VictoryPie } from "victory-native";

export default function ReportChartScreen({ navigation }) {
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
                    .rpc('city_recap');
        
        //table data
        setTableData(data)

        //chart data
        let chartValue = [];
        data.map(row => 
            chartValue.push({
                x: row.country_name,
                y: row.city_total,
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

            <VictoryPie
                // original data
                // data={[
                //     { x: "Cats", y: 35 },
                //     { x: "Dogs", y: 40 }
                // ]}
                data={chartData}
            />

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Country</DataTable.Title>
                    <DataTable.Title numeric>City Total</DataTable.Title>
                </DataTable.Header>

                <FlatList
                    data={tableData}
                    renderItem={({item}) => 
                        <DataTable.Row>
                            <DataTable.Cell>{item.country_name}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.city_total}</DataTable.Cell>
                        </DataTable.Row>
                    }
                    keyExtractor={item => item.id}
                />
            </DataTable>
        </>
    )
}
    