import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  Keyboard
} from 'react-native';
import Task from './components/Task';
import { useState } from 'react'
import { TaskTypes } from './types';
export default function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([
    { id: "1", text: "Programming" },
    { id: "2", text: "Design" },
    { id: "3", text: "Hacking" },

  ]);

  const [text, setText] = useState<string>("")

  const handlePresse = () => {
    Keyboard.dismiss()
    if (tasks !== null) {
      const newTask: TaskTypes = {
        id: new Date().getMilliseconds().toLocaleString(),
        text
      }
      if (text.length >= 3) {
        setTasks([...tasks, newTask])
        Alert.alert("Success", "New Item Added successfully !")
        setText("")

      } else {
        Alert.alert("Warning", "Text must be at least 3 characters")
      }

    }
  }
  const handleChange = (text: string) => {
    setText(text)
  }


  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
      </View>
      <View style={styles.items}>
        {/* Tasks container */}
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <Task task={item} tasks={tasks} setTasks={setTasks} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* Writing tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input}
          placeholder={'Write a task'}
          value={text}
          onChangeText={handleChange}
        />
        <TouchableOpacity onPress={handlePresse}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderRadius: 60,
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {}
});
