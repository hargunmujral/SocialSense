# SocialSense

## Description
The issue of people struggling with social challenges, whether it be from an underlying condition like autism or due to a lack of social learning at a young age is a growing problem that needs to be addressed directly. Ultimately, social aptitude comes down to best choosing your words to convey a message with a specific emotion,  taking the literalness and roboticness out of conversations. For many, the learning curve for this comes from a constant process of socializing, understanding social cues, and adjusting to become better at conveying and understanding the underlying emotion conveyed through words. 

But for those who struggle sensing these social queues, we created an educational software tool to practice socializing with real time feedback. Our app is simple: the user is given a common topic as well as a specific emotion, and their job is to convey a message on this topic in this emotion. They receive immediate feedback based on how well they conveyed this emotion on the given topic. This may sound trivial, but this forces the user to think about and learn a range of verbal strategies for conveying and understanding emotion. Essentially we are replacing social cues with more objective but equally effective verbal cues for learning how to socialize with emotion in a safe and risk-free environment.
 
## Tech Stack:
* React Native and TypeScript for frontend
* Cohere API for emotion and topic detection
* Python/Flask for backend development and interacting with the Cohere API
* CockroachDB for storing user information

## Task Distribution:
* Hargun - Built frontend UI with React Native and worked on system architecture
* Ross - Worked on frontend components, integration and set up Flask backend
* Matthew - Developed response feedback system with Cohere API
* Brian - Integrated CockroachDB and assisted with response feedback

## Example responses generated from NLP

|        Prompts        |User Responses               |Feedback            |
|----------------|-------------------------------|-----------------------------|
| `Write a response about friends using the emotion 'sadness'`        |When my friend moved away to go to university, I cried for a week because I would miss him so much.          |     This is a great response, as it conveys sadness for the loss of a friend.     |
| `Write a response about school using the emotion 'happiness'`   |     I can't wait to go back to school after the winter break!          |     This is a great response, because it shows happiness about going back to school.     |
| `Write a response about animals using the emotion 'fear'`        |Spiders are really cool!   |    This response needs work, as you are not expressing a fear of spiders. |


  
  
  
  
