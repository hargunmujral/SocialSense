import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react';
import axios from "axios";

export default function HomeScreen() {
  const [topic, setTopic] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  const onNewTask = async () => {
    await axios
    .get("http://localhost:5000/api/challenge/generateChallenge", {})
    .then(function (response) {
      setTopic(response.data.topic);
      setSentiment(response.data.sentiment);
    })
    .catch(function (error) {
      console.log(error.message);
    });

    // fetch("http://127.0.0.1:5000/api/challenge/generateChallenge%22)
    // .then(response => console.log(response));
  };

  const handleSubmit = async () => {
    await axios
    .post("http://127.0.0.1:5000/api/challenge/generateChallenge", {
      topic: topic,
      sentiment: sentiment,
      response: response
    })
    .then(function (response) {
      setFeedback(response.data.feedback);
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Give me a task" onPress={onNewTask}> Give me a task </Button>
      <Text> {topic} </Text>
      <Text> {sentiment} </Text>

      <TextInput
        styles={styles.input}
        onChange={text => setResponse(text)}
      ></TextInput>
        <View style={styles.button}>
            <Button color='white' title='Submit' onPress={handleSubmit}/>
        </View>

      <Text> {feedback} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  wrapper: {
      width: '80%',
  },
  input: {
      marginBottom: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      paddingHorizontal: 15,
  },
  link: {
      color: 'blue',
  },
  header: {
		margin: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginBottom: 0,
        backgroundColor: 'orange',
	},
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: 'white',
    },

});