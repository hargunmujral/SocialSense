from flask import Flask, request
from random import randint
from cohereAPI import generateResponseFeedback

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def test():
    return {'message': "hello"}

@app.route('/api/challenge/generateFeedback', methods=['GET', 'POST'])
def generateFeedback():
    topic = request.form.get('topic')
    sentiment = request.form.get('sentiment')
    response = request.form.get('response')

    # Call cohere function for feedback
    feedback = ""

    return {'feedback': feedback}

@app.route('/api/challenge/generateChallenge', methods=['GET', 'POST'])
def generateChallenge():
    sentiments = [
        "sadness",
        "happiness",
        "joy",
        "worry",
        "anger",
        "fear",
        "love",
        "neutral",
        "surprise",
        "hate",
        "fun",
        "relief",
        "enthusiasm",
        "boredom",
        "depressed"
    ]

    topics = [
        "pets",
        "food",
        "politics",
        "friends",
        "sports",
        "work",
        "holidays",
        "games",
        "habits",
        "hobbies",
        "dreams"
    ]

    sentimentIndex = randint(0, 4)
    topicIndex = randint(0, 4)
    return {'sentiment': sentiments[sentimentIndex], 'topic': topics[topicIndex]}
