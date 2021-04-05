import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  // when we write just goalInputHandler,
  //onChangeText works every keystroke.

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

// Using a StyleSheet adds validation and potential performance improvements
const styles = StyleSheet.create({
  screen: {
    padding: 50,
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
