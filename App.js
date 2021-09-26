import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0){
      return;
    }
    setCourseGoals(currentGoals => [...courseGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const removeGoalHander = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Text h3 style={{ textAlign: 'center', color: 'red' }}>Goals</Text>
      <Button title="Add New Goal" type="outline" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel = {cancelGoalAdditionHandler} />
      <View>
        <FlatList style={{ height: 300, marginTop: 10 }}
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem id={itemData.item.id} onDelete={removeGoalHander} title={itemData.item.value} />
          )}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
