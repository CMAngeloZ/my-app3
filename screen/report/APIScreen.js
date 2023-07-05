import React, { useState } from 'react';
import { Appbar, TextInput, Button, List } from 'react-native-paper';
import * as Linking from 'expo-linking';

export default function APIScreen({ navigation }) {
    //state for data
    const [inputCity, setInputCity] = useState('');
    const [weatherCondition, setWeatherCondition] = useState('');
    const [weatherLink, setWeatherLink] = useState('');

    const getAPIData = async() => {
        const apikey = 'oVRPFSQYqJ7ON8K2ySUxJ2DQ1CW9AZqW';
        let cityKey = '';

        //API city
        let response = await fetch(
            'http://dataservice.accuweather.com/locations/v1/cities/search/?apikey='+apikey+'&q='+inputCity, { method: 'GET'}
        );
        
        let data = await response.json();
        cityKey = data[0].Key;

        //API weather
        let response2 = await fetch(
            'http://dataservice.accuweather.com/forecasts/v1/daily/1day/'+cityKey+"?apikey="+apikey, { method: 'GET'}
        );
        
        //API weather
        let response3 = await fetch(
            'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/'+cityKey+"?apikey="+apikey, { method: 'GET'}
        );

        let data2 = await response3.json();
        setWeatherCondition(data2[0].IconPhrase)
        setWeatherLink(data2[0].Link)
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="API" />
            </Appbar.Header>

            <TextInput
                label="City"
                value={inputCity}
                onChangeText={text => setInputCity(text)}
                style={{ margin:5 }}
            />

            <Button 
                icon="magnify" 
                mode="contained" 
                onPress={() => getAPIData()} 
                style={{ margin:5 }}
            >
                Search
            </Button>

            {/* if condition after API executed & display result */}
            {weatherCondition != '' &&
            <List.Item
                title={weatherCondition}
                right={() => <List.Icon icon="arrow-right" style={{marginLeft:10}} />}
                onPress={() => Linking.openURL(weatherLink)}
            />
            }
        </>
    )
}
    