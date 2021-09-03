---
title: "RNN(Recurrent Neural Network)"
path: "/rnn"
tags: ["Machine Learning"]
featuredImage: "../image/main_image/ml.jpeg"
excerpt: ''
created: 2021-09-03
updated: 2021-09-03
---

## RNN이란?

CNN이란 sequence data를 처리하기 위한 모델이다. 이러한 sequence data를 처리하기 위해서 우리가 sequence를 나눈 단위(ex : 문장에서 단어 별로 나눔)들을 순차적으로 입력으로 받고, 이전에 처리한 입력에 대한 출력을 활용하여 sequence 모델로 처리하는 방식이다. 이러한 RNN모델의 대표적인 활용처는 자연어 처리(ex: 번역), 스팸메일 분류가 있다. 아래 그림은 RNN 모델을 나타낸 것으로 더욱 이해가 빠를 것이다.

![RNN](../image/RNN/rnn.png)

물론 위 또한 RNN의 대표적인 예시이고, 입력과 출력을 어떻게 대입하느냐, 어떻게 뽑아낼 것인가에 따라서 one-to-many, many-to-one, many-to-many 방식이 있다. 그러나 기본적인 베이스는 many-to-many, 위 그림과 같은 방식이기 때문에 위에 대해서 설명을 진행한다. 위 그림을 살펴보면 각각의 입력과 출력에 대해 형광의 초록 모델에 대입하는 sequence 모델임을 알 수 있다. 그리고 위의 모델은 모두 동일한 모델에 대한 대입으로서, 즉 같은 모델을 기반으로 판단을 진행한다. 이를 수식으로 나타내어 보면 아래와 같다.

<img src="https://latex.codecogs.com/svg.image?h_{t}&space;=&space;f_{w}(h_{t&space;-&space;1},&space;x_{t})" title="h_{t} = f_{w}(h_{t - 1}, x_{t})" />

여기서 h는 state(출력), f는 가설식, x는 입력, t는 시행 횟수이다. 즉, 앞서 말한 것과 같이 이전 state와 현재 진행할 과정에서의 입력값, 2가지를 고려하여 현재 state(출력)을 만들어 낸다.

## hidden state란?

앞의 설명을 읽어본다면, 위 그림에 있는 y, 즉 output이 위 수식의 h와 같은 것이라고 착각을 할 수가 있다. 그러나 둘은 다르다. 앞의 설명에서 이전 출력값과 현재 입력값을 바탕으로 새로운 출력값을 도출한다고 하였는데, 여기에서 말하는 출력값은 hidden state이다. 우리가 일반적으로 말하는 출력값(y)은 위 hidden state에서 추가적으로 가설식을 만들어 그에 대입해 만들어지는 값을 뱉는다. 즉, 우리가 직접적으로 받아들이는 출력값, output은 눈에 보이는 출력값이고, h는 우리가 실질적으로 확인하지 않는 출력값이므로 hidden을 붙인 hidden state이다. 그렇다면, 실질적인 output y에 대한 수식은 어떻게 될까?

<img src="https://latex.codecogs.com/svg.image?y_{t}&space;=&space;W_{hy}h_{t}" title="y_{t} = W_{hy}h_{t}" />

위의 식이 ouput y에 대한 수식이다. 앞서 설명한 것처럼 추가적인 가설식에 hidden state를 대입하여 출력을 내는 것을 알 수 있다.