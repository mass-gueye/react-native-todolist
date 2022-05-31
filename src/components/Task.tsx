import * as React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TaskTypes } from '../types';


interface ITaskProps {
    task: TaskTypes,
    tasks: TaskTypes[],
    setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>
}

const Task: React.FunctionComponent<ITaskProps> = ({ task, tasks, setTasks }) => {
    const handlePresse = (id: string) => {
        const currentTask = tasks.filter(task => task.id !== id)
        setTasks(currentTask)
        Alert.alert("Task deleted")
    }
    return (
        <TouchableOpacity onPress={() => handlePresse(task.id)}>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{task.text}</Text>
                </View>
                <View style={styles.circular}>

                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Task;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#55BCF6",
        borderRadius: 5,
        borderWidth: 2,
    }

})