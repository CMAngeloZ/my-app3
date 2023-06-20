import * as React from 'react';
import { List } from 'react-native-paper';

export default function ContactScreen({ navigation }) {
    
    return(
        <><><>
            <List.Item
                title="mr bimo clothes are ready"
                description="mr bimo clothes are ready to be picked up at 24 may 2019"
                left={props => <List.Icon {...props} icon="charity"  color='green'/>}
             />
        </>
        <List.Item
        title="ms sinta clothes are ready"
        description="ms sinta clothes are ready to be picked up at 31 may 2019"
        left={props => <List.Icon {...props} icon="charity"  color='green'/>}
     />
        </>
        <List.Item
                title="mr fred clothes are ready"
                description="mr fred clothes are ready to be picked up at 1 june 2019"
                left={props => <List.Icon {...props} icon="charity"  color='green'/>}
             />
        </>
    )
}
    