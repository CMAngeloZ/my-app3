import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, HelperText } from 'react-native-paper';
import supabase from '../../config/supabase';
import { Picker } from '@react-native-picker/picker';

export default function CityInsertScreen({ navigation }) {
    //state for picker data
    const [listCountry, setListCountry] = useState([]);

    //state for picker & input
    const [inputCountry, setInputCountry] = useState(0);
    const [inputName, setInputName] = useState('');

    //initial function (first function will run in this page)
    useEffect(() => {
        getCountry();
    }, []);

    //get data country
    const getCountry = async() => {
        const { data, error } = await supabase
                                    .from('country')
                                    .select('id, name')
                                    .order('name', {ascending:true});
        
        setListCountry(data);
    }

    //insert data to supabase
    const onSave = async() => {
        const { data, error } = await supabase
                                    .from('city')
                                    .insert({ country_id:inputCountry, name:inputName });

        //display notif then move to list screen
        if(error) {
            Alert.alert('Alert', error.message, [
                {text: 'OK'},
            ]);
        } else {
            Alert.alert('Message', 'Data Inserted', [
                {text: 'OK', onPress: () => navigation.goBack()},
            ]);
        }
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Insert" />
            </Appbar.Header>

            <HelperText>Country</HelperText>
            <Picker
                selectedValue={inputCountry}
                onValueChange={(itemValue, itemIndex) => setInputCountry(itemValue)}
            >
                {listCountry.map(country => 
                    <Picker.Item label={country.name} value={country.id} key={country.id} />
                )}
            </Picker>

            <TextInput
                label="Name"
                value={inputName}
                onChangeText={text => setInputName(text)}
                style={{ margin:5 }}
            />

            <Button 
                icon="content-save" 
                mode="contained" 
                onPress={() => onSave()} 
                style={{ margin:5 }}
            >
                Save
            </Button>
        </>
    )
}