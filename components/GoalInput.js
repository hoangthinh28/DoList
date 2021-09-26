import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal } from 'react-native';
import { Button, Text } from 'react-native-elements';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType = "slide">            
            <View style={styles.inputContainer}>
                <Text h3 style={{ textAlign: 'center', color: 'red' }}>Add Goal</Text>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <Button title="Cancel" type='clear' style={{marginTop: 5}} onPress= {props.onCancel}  />
                    <Button title="Add" type="clear" style={{marginTop: 5}} onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "60%"
    }

});
export default GoalInput;