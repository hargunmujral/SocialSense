from flask import Flask, request
from random import randint

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
        "happy",
        "sarcastic",
        "sad",
        "angry",
    ]

    topics = [
        "pets",
        "food",
        "politics",
        "friends"
    ]

    sentimentIndex = randint(0, 4)
    topicIndex = randint(0, 4)
    return {'sentiment': sentiments[sentimentIndex], 'topic': topics[topicIndex]}
