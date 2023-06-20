import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Appbar, DataTable, Searchbar } from 'react-native-paper';
import supabase from '../../config/supabase';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function CzTableScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    
    //state for data
    const [dataList, setDataList] = useState([]);

    //initial function
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        });
    
        return unsubscribe;
    }, [navigation]);

    //get data
    const getData = async() => {
        const { data, error } = await supabase
                                    .from('city')
                                    .select('id, c_name, country(name), citizen')
                                    .order('c_name', {ascending:true});
        
        setDataList(data);
    }

    const onChangeSearch = async() => {
        const { data, error } = await supabase
                                    .from('city')
                                    .select('id, c_name, country(name), citizen')
                                    .like('c_name','%'+query+'%')
                                    .order('c_name', { ascending: true });
                                    

        setDataList(data);
    }

    //download data
    const downloadData = async() => {

        //create pdf content based on html (table)
        let html = `<html>
                    <body>
                      <table style="width:100%;border: 1px solid">
                        <tr>
                            <th align="left">City</th>
                            <th align="left">Country</th>
                            <th align="left">Citizen</th>
                        </tr>`;

                        //loop data from state
                        dataList.map((item) => {
                            html += `<tr>`;
                                html += `<td>`+item.c_name+`</td>`;
                                html += `<td>`+item.country.name+`</td>`;
                                html += `<td>`+item.citizen+`</td>`;
                            html += `</tr>`;
                        })

            html += `</table>
                    </body>
                    </html>`;

        //save data to pdf
        const { uri } = await Print.printToFileAsync({ html });
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Citizen Table" />
                <Appbar.Action icon="download" onPress={() => downloadData()} />
            </Appbar.Header>

            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>City</DataTable.Title>
                    <DataTable.Title>Country</DataTable.Title>
                    <DataTable.Title numeric>Citizen</DataTable.Title>
                </DataTable.Header>

                <FlatList
                    data={dataList}
                    renderItem={({item}) => 
                        <DataTable.Row>
                            <DataTable.Cell>{item.c_name}</DataTable.Cell>
                            <DataTable.Cell>{item.country.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.citizen}</DataTable.Cell>
                        </DataTable.Row>
                    }
                    keyExtractor={item => item.id}
                />
            </DataTable>
        </>
    )
}
    