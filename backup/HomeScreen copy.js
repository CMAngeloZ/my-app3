import * as React from 'react';
import { Appbar, Button, Card } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Laundry" style={{ alignItems: 'center' }}/>
            </Appbar.Header>
            <Card style={{ alignItems: 'center' }}>
      <Card.Cover source={require('../assets/londry.png')} style={{width: 400, height: 400, borderRadius: 400/ 2 }} onPress={() => navigation.navigate('OrderScreen', {icon:'account', title:'Account Button'})} />
          <Button mode="contained" style={{ margin: 10 }} onPress={() => navigation.navigate('OrderScreen', {icon:'shoppingcart', title:'Account Button'})}>
          Order List
          </Button>
      </Card>
        </>
    )
}
    