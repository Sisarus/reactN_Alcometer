import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {
    const [weight, setWeight] = useState(0);
    const [bottles, setBottles] = useState(0);
    const [time, setTime] = useState(0);
    const [gender, setGender] = useState('male');
    const [promilles, setPromilles] = useState(0);

    const genders = [
        {label: 'Male', value: 'male'},
        {label: 'Female', value: 'female'}
    ];

    const bottlesList = [
        {label: '0 bottle', value: 0},
        {label: '1 bottle', value: 1},
        {label: '2 bottles', value: 2},
        {label: '3 bottles', value: 3},
        {label: '4 bottles', value: 4},
        {label: '5 bottles', value: 5},
        {label: '6 bottles', value: 6},
        {label: '7 bottles', value: 7},
        {label: '8 bottles', value: 8},
        {label: '9 bottles', value: 9},
        {label: '10 bottles', value: 10},
    ];

    const timeList = [
        {label: '0 hours', value: 0},
        {label: '1 hour', value: 1},
        {label: '2 hours', value: 2},
        {label: '3 hours', value: 3},
        {label: '4 hours', value: 4},
        {label: '5 hours', value: 5},
        {label: '6 hours', value: 6},
        {label: '7 hours', value: 7},
        {label: '8 hours', value: 8},
        {label: '9 hours', value: 9},
        {label: '10 hours', value: 10},
    ];

    return (
        <View style={styles.container}>
            <View style={styles.field}>
                <Text>Weight</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setWeight(text)}
                    placeholder={weight}
                    keyboardType='numeric'
                ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    radio: {
        marginTop: 10,
        marginBottom: 10,
    },
    button:{
      marginTop: 20
    },
    field: {
        margin: 10,
    },
    input:{
        marginLeft: 5,
    },
});
