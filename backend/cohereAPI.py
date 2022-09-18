from urllib import response
from dotenv import load_dotenv
import cohere
import os

load_dotenv()

generationApiKey = os.getenv("TEXT_GENERATION_API_KEY")
co = cohere.Client(f'{generationApiKey}')


def generateResponseFeedback(topic: str, emotion: str, response: str) -> list[str]:

    # The following contains training data for the prompt. Using Cohere's API, it will extend the prompt with feedback 
    # which will be collected and passed to the user so that they can reflect on their response.

    prompt = """The user is practicing responding to prompts about ${topic} and must respond to them using ${emotion} emotion.
    A good response from the user should clearly use the emotion specified.
    A bad response from the user would not use the emotion required and would be confusing
    
    Provide useful feeback to each of the user's responses to the different topics
    Prompt: "Write a sentence using the emotion 'sadness'"
    Response: "All dogs eventually die, which cause their owners to cry."
    Feedback: This is a great response because it relates to death and crying.

    Prompt: "Write a response using the emotion 'happy'"
    Response: "When I eat food, I feel a warm glow in my belly which puts a smile on my face."
    Feedback: This response is good, as it mentions how it makes you feel good and makes you smile.
    
    Prompt: "Write a response using the emotion 'joy'"
    Response: "Last year, my favourite politician lost the election. Nooooo!"
    Feedback: This response is not very good because your response does not convey joy.

    Prompt: "Write a response using the emotion 'worry'"
    Response: "Last weekend, my friend was sent to the hospital for an injury. I hope they are alright."
    Feedback: This is a great resopnse, as you expressed your worry for their wellbeing.

    Prompt: "Write a response using the emotion 'anger'"
    Response: "I absolutely hate my enighbour!"
    Feedback: Your response definitely shows anger!

    Prompt: "Write a response using the emotion 'fear'"
    Response: "I really am scared about my upcoming performance review."
    Feedback: This is a very good response, as it showcases your fear of it.

    Prompt: "Write a response using the emotion 'love'"
    Response: "Last year I went on vacation on a cruise ship and found someone who I want to marry some day."
    Feedback: This is a great response, as you expressed your love for someone.

    Prompt: "Write a response using the emotion 'neutral'"
    Response: "I often play games with friends every day after school, but I really hate doing it."
    Feedback: This is not a very good response because you are expressing anger instead of neutrality.

    Prompt: "Write a response using the emotion 'surprise'"
    Response: "I never wash my hands after going to the bathroom, yet I am surprised to get sick often."
    Feedback: This is not a good resopnse because you are not actually showing surprise, as it reads to be sarcastic.

    Prompt: "Write a response about your family using the emotion 'depression'"
    Response: "My family was recently killed by a drunk driver, so I don't know what to do with my life any more."
    Feedback: This is a great response because it clearly shows depression.

    Prompt: "Write a response using the emotion 'hate'"
    Response: "I play the guitar daily, and absolutely love how it sounds!"
    Feedback: This is not a good response. While playing the guitar might be a hobby of yours, you are expressing love and happiness rather than hate.

    Prompt: "Write a response using the emotion 'fun'"
    Response: "Ever since I was a little kid, I dreamed of becoming a firefighter because their job looked so fun to do"
    Feedback: This is a good response, because you communicate a dream of yours, while also showing how you think it is fun.

    Prompt: "Write a response about friends using the emotion 'sadness'"
    Response: "When my friend moved away to go to university, I cried for a week because I would miss him so much."
    Feedback: This is a great response, as it conveys sadness for the loss of a friend.

    Prompt: "Write a response about school using the emotion 'happiness'"
    Response: "I can't wait to go back to school after the winter break!"
    Feedback: This is a great response, because it shows happiness about going back to school.

    Prompt: "Write a response about life using the emotion 'joy'"
    Response: "Everyday I am hate being alive because I wish I was dead!"
    Feedback: This is a bad response, as you are far away from sounding like you are joyful.

    Prompt: "Write a response about pizza using the emotion 'sadness'"
    Response: "Pizza is so good, yet it is bad for you."
    Feedback: This is a good response, because you are clearly lamenting about the health effects of pizza.

    Prompt: "Write a response about animals using the emotion 'fear'"
    Response: "Spiders are freaky!"
    Feedback: This is a good response, as you are expressing fear of spiders.

    Prompt: "Write a response about pigeons using the emotion 'relief'"
    Response: "While I was eating a sandwich, I was swarmed by pigeons. Luckily, they went away soon.
    Feedback: This is a good response, as you are clearly showing how you felt relieved after they went away.

    Prompt: "Write a response about trains using the emotion 'enthusiasm'"
    Response: "I am so pumped to ride the GO train tonight!"
    Feedback: This is a great response because you talk about how you are enthusiastic for riding trains tonight.

    Prompt: "Write a response about coding using the emotion 'boredom'"
    Response: "My parents keep trying to get me to take programming classes, but I don't find them interesting."
    Feedback: This is an amazing response because you show how you don't have an interest in programming.

    Prompt: "Write a response about Waterloo using the emotion 'depression'"
    Response: "I stayed up all night to do homework but I still am not done."
    Feedback: This is a great response, as Waterloo is known for depression and having too much homework.

    Prompt: "Write a response about love using the emotion 'neutral'"
    Response: "It was very hot today and I just wanted to stay in the air conditioning."
    Feedback: This is not a good response, as you are not expressing love.

    Prompt: "Write a response about movies using the emotion 'love'"
    Response: "My favorite movie is the one where the two kids go to Hogwarts."
    Feedback: This is a pretty good response, as you are talking about something that you probably love.

    Prompt: "Write a response about 'a home renovation' using the emotion 'anger'"
    Response: "This home renovation is was such a good idea. I love how my house looks now."
    Feedback: This is a poor response, because you are happy about the renovation instead of sad.

    Prompt: "Write a response about """ + topic + " using the emotion '" + emotion + """'"
    Response: """ + response + """"
    Feedback:"""

    entireTextGeneration = co.generate(prompt=prompt, max_tokens = 100, stop_sequences=['Prompt:','#'])
    userFeedback = str(entireTextGeneration).replace("Prompt:", "text:").split("text:")[1]
    return userFeedback.strip()

# Example Usage:
# print(handleUserInput("Waterloo","Depression","I love waterloo so much! I love getting sooooo much homework....."))
print(handleUserInput("bananas","depressed","I eat bananas 5 times a day and it's great"))

