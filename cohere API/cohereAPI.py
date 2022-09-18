from dotenv import load_dotenv
import cohere
import os

load_dotenv()

generationApiKey = os.getenv("TEXT_GENERATION_API_KEY")
co = cohere.Client(f'{generationApiKey}')


def handleUserInput(topic: str, emotion: str, response: str) -> list[str]:
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

    Prompt: "Write a response using the emotion 'hate'"
    Response: "I play the guitar daily, and absolutely love how it sounds!"
    Feedback: This is not a good response. While playing the guitar might be a hobby of yours, you are expressing love and happiness rather than hate.

    Prompt: "Write a response using the emotion 'fun'"
    Response: "Ever since I was a little kid, I dreamed of becoming a firefighter because their job looked so fun to do"
    Feedback: This is a good response, because you communicate a dream of yours, while also showing how you think it is fun.

    Prompt: "Write a response about friends using the emotion 'sadness'"
    Response: "When my friend moved away to go to university, I cried for a week because I would miss him so much."
    Feedback: This is a great response, as it conveys sadness for the loss of a friend.

    Prompt: "Write a response about """ + topic + " using the emotion '" + emotion + """'"
    Response: """ + response + """"
    Feedback:"""

    print(co.generate(prompt=prompt, max_tokens = 120, stop_sequences=['Topic:','#']))

handleUserInput("food","surprise","Tonight I opened a pickle jar and it has a spider in it!! I was shook!!")
    # sentiments = [
    #     "sadness",
    #     "happiness",
    #     "joy",
    #     "worry",
    #     "anger",
    #     "fear",
    #     "love",
    #     "neutral",
    #     "surprise",
    #     "hate",
    #     "fun",
    #     "relief",
    #     "enthusiasm",
    #     "boredom",
    #     "depressed"
    # ]

    # topics = [
    #     "pets",
    #     "food",
    #     "politics",
    #     "friends",
    #     "sports",
    #     "work",
    #     "holidays",
    #     "games",
    #     "habits",
    #     "hobbies",
    #     "dreams"
    # ]