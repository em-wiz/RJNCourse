import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";



function GoalInput( props ) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Enter your course goal' value={enteredGoalText} />
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        borderRadius: 6,
        padding: 16,
    },
    buttonContainer: {
       flexDirection: 'row',
       marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },

})