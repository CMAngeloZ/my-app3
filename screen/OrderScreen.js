import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Button, Text, Avatar, Card, IconButton } from 'react-native-paper';



export default function OrderScreen({ navigation, route }) {
    const [number1, setNumber1] = React.useState('Pending');
    const [number2, setNumber2] = React.useState('Pending');
    const [number3, setNumber3] = React.useState('Pending');
    const [number4, setNumber4] = React.useState('Pending');

    return(
            <>
            <Appbar.Header>
            <IconButton icon="arrow-left" mode="contained" style={{ margin: 10 }} onPress={() => navigation.goBack()}>
            </IconButton>
            <Appbar.Content title="Order" />
            </Appbar.Header>

            <Card style={{ margin: 10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Avatar.Icon size={50} icon="account" style={{ margin: 10 }} />
            <Text style={{ fontSize: 30 }}>Bimo</Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Button buttonColor= "green" icon="plus" mode="contained" onPress={() => setNumber1("Finished")} style={{ margin: 10 }}>
            </Button>
            <Button buttonColor= "red" icon="minus" mode="contained" onPress={() => setNumber1("Pending")} style={{ margin: 10 }}>
            </Button>
            <Text style={{ fontSize: 30 }}>{number1}</Text>
            </View>
            </Card>

            <Card style={{ margin: 10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Avatar.Icon size={50} icon="account" style={{ margin: 10 }} />
            <Text style={{ fontSize: 30 }}>Sinta</Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Button buttonColor= "green" icon="plus" mode="contained" onPress={() => setNumber2("Finished")} style={{ margin: 10 }}>
            </Button>
            <Button buttonColor= "red" icon="minus" mode="contained" onPress={() => setNumber2("Pending")} style={{ margin: 10 }}>
            </Button>
            <Text style={{ fontSize: 30 }}>{number2}</Text>
            </View>
            </Card>

            <Card style={{ margin: 10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Avatar.Icon size={50} icon="account" style={{ margin: 10 }} />
            <Text style={{ fontSize: 30 }}>Fred</Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Button buttonColor= "green" icon="plus" mode="contained" onPress={() => setNumber3("Finished")} style={{ margin: 10 }}>
            </Button>
            <Button buttonColor= "red" icon="minus" mode="contained" onPress={() => setNumber3("Pending")} style={{ margin: 10 }}>
            </Button>
            <Text style={{ fontSize: 30 }}>{number3}</Text>
            </View>
            </Card>

            <Card style={{ margin: 10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Avatar.Icon size={50} icon="account" style={{ margin: 10 }} />
            <Text style={{ fontSize: 30 }}>Johnson</Text>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row'  }}>
            <Button buttonColor= "green" icon="plus" mode="contained" onPress={() => setNumber4("Finished")} style={{ margin: 10 }}>
            </Button>
            <Button buttonColor= "red" icon="minus" mode="contained" onPress={() => setNumber4("Pending")} style={{ margin: 10 }}>
            </Button>
            <Text style={{ fontSize: 30 }}>{number4}</Text>
            </View>
            </Card>


            <Button mode="contained" style={{ margin: 10 }} onPress={() => navigation.navigate('ReportScreen', { icon: 'account', title: 'Account Button' })}>
                Report
            </Button>
            </>
            
        
    )
}
    