import * as React from 'react';
import { List } from 'react-native-paper';

export default function MessageScreen({ navigation}) {
    
    return(
        <><><>
            <List.Item onPress={() => navigation.navigate("ReportScreen")}
                title="incoming laundry from mr johnson"
                description="mr johnson send you a laundry request"
                left={props => <List.Icon {...props} icon="washing-machine-alert" color='red'/>}
             />
        </>
        <List.Item onPress={() => navigation.navigate("ReportScreen")}
        title="incoming laundry from mr robert"
        description="mr robert send you a laundry request"
        left={props => <List.Icon {...props} icon="washing-machine-alert" color='red' />}
     />
</>

        </>
        
        
    )
}
    