import requests
import json
import pandas as pd
import numpy as np
import matplotlib

matplotlib.use('Agg') # CUI環境でmatplotlib使いたい場合、指定する
import matplotlib.pyplot as plt

TOKEN = "xoxb-601182269414-666552786946-xMrwkwfWqWcU8yfpFqTfLCoW";
CHANNEL = "CHN6K4S9K";

###############
# 画像送信ここから
###############
files = {'file': open("../img/test.png", 'rb')}
param = {
    'token':TOKEN, 
    'channels':CHANNEL,
    'filename':"my_draw",
    'initial_comment': "たのしいね！",
    'title': "私のおえかき"
}
requests.post(url="https://slack.com/api/files.upload",params=param, files=files)