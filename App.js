import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  // when we write just goalInputHandler,
  //onChangeText works every keystroke.
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map((goal, index) => (
          <View style={styles.listItem}>
            <Text key={index}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Using a StyleSheet adds validation and potential performance improvements
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

// We can not see textinput component in display,we need to add some styling.

// FLEXBOX: A concept/ set of styling properties that allows you to structure content
// (create layout...)

/*FlatList is built to render a large list of items. You need to pass an array of data and then render each item in the array with the renderItem callback. It is optimized to have very good performances with very large arrays because it actually only renders the items that need to be displayed at the moment.

ScrollView is built to render a generic content in a way that it scrolls when the content is bigger than the ScrollView itself. You don't pass an array of data, but you put elements inside the ScrollView in the same way you would use a normal View. Be careful however, it does not provide the same optimization of the flat list for very long content.

As a rule of thumb:

Do you need to render a list of similar items from an array? Use FlatList

Do you need to render generic content in a scrollable container? Use ScrollView*/
