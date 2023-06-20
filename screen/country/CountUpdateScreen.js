import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, RadioButton } from 'react-native-paper';
import supabase from '../../config/supabase';

export default function CountUpdateScreen({ navigation, route }) {
    //state
    const [inputName, setInputName] = useState('');
    const [inputContinent, setInputContinent] = useState('');

    //selected data (from previous screen)
    const id = route.params.id;

    //initial function (first function will run in this page)
    useEffect(() => {
        getDataDetail();
    }, []);

    //get data detail based on selected data (using ID)
    const getDataDetail = async() => {
        const { data, error } = await supabase
                                    .from('country')
                                    .select('name, continent')
                                    .eq('id', id)
                                    .single();
        setInputName(data.name);
        setInputContinent(data.continent);
    }

    //update data to supabase
    const onSave = async() => {
        const { data, error } = await supabase
                                    .from('country')
                                    .update({ name:inputName, continent:inputContinent})
                                    .eq('id', id)

        //display notif then move to list screen
        Alert.alert('Message', 'Data Updated', [
            {text: 'OK', onPress: () => navigation.push('CountListScreen')},
        ]);
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
                                    .from('country')
                                    .delete()
                                    .eq('id', id)

        //display notif then move to list screen
        Alert.alert('Message', 'Data Deleted', [
            {text: 'OK', onPress: () => navigation.push('CountListScreen')},
        ]);
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Update" />
                <Appbar.Action icon="delete" onPress={() => onDeleteConfirm()} size={26} />
            </Appbar.Header>

            <TextInput
                label="Name"
                value={inputName}
                onChangeText={text => setInputName(text)}
                style={{ margin:5 }}
            />
            <RadioButton.Group onValueChange={value => setInputContinent(value)} value={inputContinent}>
                <RadioButton.Item label="Asia" value="Asia" />
                <RadioButton.Item label="Africa" value="Africa"/>
                <RadioButton.Item label="Europe" value="Europe"/>
                <RadioButton.Item label="America" value="America"/>
                <RadioButton.Item label="Australia" value="Australia"/>
                <RadioButton.Item label="Antartica" value="Antartica"/>
            </RadioButton.Group>

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