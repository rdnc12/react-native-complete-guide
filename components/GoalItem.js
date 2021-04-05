import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ title, id, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;

// bind this to set a default argument when this gets called and the default argument
//would be ID, so the id we're also getting so that this id is passed to onDelete
// when it is getting called upon a press.