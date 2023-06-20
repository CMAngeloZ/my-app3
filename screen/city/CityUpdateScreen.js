import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, HelperText } from 'react-native-paper';
import supabase from '../../config/supabase';
import { Picker } from '@react-native-picker/picker';

export default function CityUpdateScreen({ navigation, route }) {
    //state for picker data
    const [listCountry, setListCountry] = useState([]);

    //state for picker & input
    const [inputCountry, setInputCountry] = useState(0);
    const [inputName, setInputName] = useState('');

    //selected data (from previous screen)
    const id = route.params.id;

    //initial function (first function will run in this page)
    useEffect(() => {
        getCountry();
        getDataDetail();
    }, []);

    //get data country
    const getCountry = async() => {
        const { data, error } = await supabase
                                    .from('country')
                                    .select('id, name')
                                    .order('name', {ascending:true});
        
        setListCountry(data);
    }

    //get data detail based on selected data (using ID)
    const getDataDetail = async() => {
        const { data, error } = await supabase
                                    .from('city')
                                    .select('id, country_id, name')
                                    .eq('id', id)
                                    .single();
                                    
        //assign value to picker & input
        setInputCountry(data.country_id)
        setInputName(data.name)
    }

    //update data to supabase
    const onSave = async() => {
        const { data, error } = await supabase
                                    .from('city')
                                    .update({ 
                                        country_id: inputCountry,
                                        name: inputName,
                                    })
                                    .eq('id', id)

        //display notif then move to list screen
        if(error) {
            Alert.alert('Alert', error.message, [
                {text: 'OK'},
            ]);
        } else {
            Alert.alert('Message', 'Data Updated', [
                {text: 'OK', onPress: () => navigation.goBack()},
            ]);
        }
    }

    //delete confirmation
    const onDeleteConfirm = async() => {
        Alert.alert('Delete', 'Are you sure guys?', [
            {text: 'Cancel'},
            {text: 'OK', onPress: () => onDelete()},
        ]);
    }

    //delete data to supabase
    const onDelete = async() => {
        const { data, error } = await supabase
                                    .from('city')
                                    .delete()
                                    .eq('id', id)

        //display notif then move to list screen
        Alert.alert('Message', 'Data Deleted', [
            {text: 'OK', onPress: () => navigation.goBack()},
        ]);
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Update" />
                <Appbar.Action icon="delete" onPress={() => onDeleteConfirm()} size={26} />
            </Appbar.Header>

            <HelperText>Country</HelperText>
            <Picker
                selectedValue={inputCountry}
                onValueChange={(itemValue, itemIndex) => setInputCountry(itemValue)}
            >
                {listCountry.map(country => 
                    <Picker.Item key={country.id} label={country.name} value={country.id} />
                    )}
            </Picker>

            <TextInput
                label= "Name"
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