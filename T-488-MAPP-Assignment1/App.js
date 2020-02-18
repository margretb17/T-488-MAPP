import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredNote, setEnteredNote] = useState('');
  const [noteList, setNoteList] = useState([]);

  const noteInputHandler = (enteredNote) => {
    setEnteredNote(enteredNote);
  }

  const addNoteHandler = () => {
    setNoteList(currentNotes => [...currentNotes, enteredNote]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="Notes"
        style={styles.input}
        onChangeText={noteInputHandler}
        value={enteredNote}
        />
        <Button title="ADD" onPress={addNoteHandler} />
      </View>
      <ScrollView>
        {noteList.map((list)=>
          <View key={list} style={styles.listItem}>
          <Text> {list} </Text>
          </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
