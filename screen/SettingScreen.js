import * as React from 'react';
import { Appbar, Button,List } from 'react-native-paper';


export default function SettingScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Setting" />
            </Appbar.Header>
            <><><>
            <List.Item onPress={() => navigation.navigate('SettingScreen')}
                title="Profile"
                left={props =><List.Icon {...props} icon="account" color=''/>}
             />
        </>
        <List.Item onPress={() => navigation.navigate("SettingScreen")}
        title="Notification"
        left={props => <List.Icon {...props} icon="bell" color=''/>}
     />
</>

        </>
        
        <><><>
            <List.Item onPress={() => navigation.navigate("SettingScreen")}
                title="Privacy"
                left={props => <List.Icon {...props} icon="lock" color=''/>}
             />
        </>
        <List.Item onPress={() => navigation.navigate("SettingScreen")}
        title="Help"
        left={props => <List.Icon {...props} icon="help-circle" color=''/>}
     />
</>

        </>
        
        <><><>
            <List.Item onPress={() => navigation.navigate("SettingScreen")}
                title="About"
                left={props => <List.Icon {...props} icon="information" color=''/>}
             />
        </>
        <List.Item onPress={() => navigation.navigate("SettingScreen")}
        title="Logout"
        left={props => <List.Icon {...props} icon="logout" color=''/>}
     />
</>

        </>
        
        
        </>
    )
}
    