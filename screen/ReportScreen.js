import * as React from 'react';
import { Appbar, Button, IconButton, DataTable } from 'react-native-paper';

export default function ReportScreen({ navigation, route }) {
   
    return(        
        <><>
        
            <Appbar.Header>
                <IconButton icon="arrow-left" mode="contained" style={{ margin: 10 }} onPress={() => navigation.goBack()}>
                </IconButton>
                <Appbar.Content title="Report" />
            </Appbar.Header>
            </>
            <DataTable>
            <DataTable.Header>
                <DataTable.Title> Date</DataTable.Title>
                <DataTable.Title> Status</DataTable.Title>
                <DataTable.Title> Amount Rp.</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell numeric>2022/03/13</DataTable.Cell>
                <DataTable.Cell numeric>Finished</DataTable.Cell>
                <DataTable.Cell numeric>35.000</DataTable.Cell>
                
            </DataTable.Row>
            
            <DataTable.Row>
                <DataTable.Cell numeric>2022/03/23</DataTable.Cell>
                <DataTable.Cell numeric>Finished</DataTable.Cell>
                <DataTable.Cell numeric>56.000</DataTable.Cell>
                
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell numeric>2022/04/6</DataTable.Cell>
                <DataTable.Cell numeric>Pending</DataTable.Cell>
                <DataTable.Cell numeric>24.000</DataTable.Cell>
                
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell numeric>2022/04/17</DataTable.Cell>
                <DataTable.Cell numeric>Pending</DataTable.Cell>
                <DataTable.Cell numeric>42.000</DataTable.Cell>
                
            </DataTable.Row>
            
            
        
            </DataTable>
            <Button mode="contained" style={{ margin: 10 }} onPress={() => navigation.navigate('HomeScreen', { icon: 'account', title: 'Account Button' })}>
                Back to Home
            </Button>
            </>
        
    )
}