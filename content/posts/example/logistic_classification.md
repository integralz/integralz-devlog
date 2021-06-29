---
title: "Logistic classification"
path: "/logistic_classification"
tags: ["Machine Learning"]
featuredImage: "../image/main_image/ml.jpeg"
excerpt: ''
created: 2021-06-29
updated: 2021-06-29
---

## Logistic classification이란?

Logistic classification이란 classification의 한 갈래로 어떠한 문제가 주어졌을 때, 해당하는 데이터가 일정 기준을 만족하는지, 혹은 불만족하는지를 판별하는 방식으로 즉, Binary classification이다. classification model 중에서 정확도가 높은 모델로 알려져 있고, 실제 문제에 적용이 가능한 모델이고, neural network와 deep learning의 중요한 뼈대가 되는 모델이므로 상당히 중요하다고 할 수 있다. Logistic classification은 스팸 메일 판별, 이전에 사용하였던 결제 내역을 기반으로 한 신용카드 비정상 거래 탐지, 그리고 영상의학 분야에서 어떠한 영상을 보여주었을 때, 활성화되는 시냅스를 통해 종양인지 아닌지를 판별하는 등 다양한 분야에서 사용이 되고 있다. 

## Logistic classification의 개념

### linear regression과의 차이점

Logistic classification에서의 종속변수 y의 값은 binary한 값 0, 1을 가질 수 있다. 이러한 점으로 인해 만약 Logistic classification 모델을 linear regression만으로 구현을 한다면 문제가 발생할 수 있다. 위 문제점은 크게 2가지로 생각할 수 있다. 우선 첫 번째를 생각하여 보자. 공부한 시간을 바탕으로 합격(1), 불합격(0)을 예측이 가능한 모델을 구현한다고 가정하여 보았을 때, 우리가 학습시킬 데이터 셋이 다음과 같다고 가정하여 보자.

|X|Y|
|:---|:---:|
|1|0|
|2|0|
|3|0|
|4|1|
|5|1|
|500|1|

만약 위 데이터 셋에서 상위 5개만으로 학습을 진행한다고 가정하여 보면, 완성된 모델에 학습하였던 데이테 셋 x를 집어넣어도 정확한 정답이 나올 수 있다. 그러나, 만약 (500, 1)을 포함한 모든 데이터 셋에 대해서 학습을 진행하여 완성된 모델에 데이터 셋의 x들을 집어넣어 검증을 진행한다면, 틀린 답이 도출된다. 두 번째로 구한 hypothesis가 0 ~ 1 사이의 값이 아닌 0보다 작거나, 1보다 큰 값을 뱉을 수도 있다. 위의 데이터 셋에서 상위 5개만으로 학습을 진행한 모델에 마지막 데이터 셋의 절대변수 x = 500을 넣어본다면 이는 1보다 큰 값이 나올 것이다. 

### Logistic Function

그러면, linear regression을 기반으로 Logistic classification의 hypothesis equation을 나타낼 수는 없을까? 물론 linear regression의 가설식만으로는 이를 나타낼 수 없다. 하지만 function을 하나 추가하면 얘기가 달라질 수 있다.

<img src="https://latex.codecogs.com/svg.image?\begin{array}{lcr}g(x)&space;=&space;wx&space;&plus;&space;b&space;\\&space;\\H(x)&space;=&space;(f&space;\circ&space;g)(x)\end{array}&space;" title="\begin{array}{lcr}g(x) = wx + b \\ \\H(x) = (f \circ g)(x)\end{array} " />

위와 같은 생각을 해보는 것이다. 즉, 우리는 f 함수를 추가하여 linear regression 가설식의 값을 0과 1 사이 값으로 변환해주면 되는 것이다. 그리고 우리는 위 함수를 아래와 같이 정의하면 된다.

<img src="https://latex.codecogs.com/svg.image?f(x)&space;=&space;1/(1&space;&plus;&space;e^{-x}))" title="f(x) = 1/(1 + e^{-x}))" />

마지막으로 위와 같은 결과를 바탕으로 우리는 가설식을 위와 같이 나타낼 수 있을 것이다.

<img src="https://latex.codecogs.com/svg.image?H(x)&space;=&space;\frac{1}{1&space;&plus;&space;e^{-(W^TX&space;&plus;&space;B)}}" title="H(x) = \frac{1}{1 + e^{-(W^TX + B)}}" />

### loss function

기존에 linear regression에서 쓰인 MSE를 살펴보자. MSE는 아래와 같이 정의 되어있다. 

<img src="https://latex.codecogs.com/svg.image?loss(W,&space;b)&space;=&space;1/m&space;*&space;\sum_{i&space;=&space;1}^{m}(H(X_{i})&space;-&space;y_{i})^2" title="loss(W, b) = 1/m * \sum_{i = 1}^{m}(H(X_{i}) - y_{i})^2" />

linear regression에서는 MSE를 바탕으로 loss function을 설정하면 gradient descent algorithm(경사하강법)을 통해 loss가 최소가 되는 지점을 찾을 수 있다. 
그러나 Logistic classification의 가설식을 기반으로 MSE를 loss function으로 설정하면 gradient descent algorithm(경사하강법)을 통해 loss가 최소가 되는 지점을 찾을 수 없다. 그러면 우리는 새로운 loss function을 찾아보아야 한다. Logistic classification에서의 loss function은 아래와 같이 정의 된다.

<img src="https://latex.codecogs.com/svg.image?\begin{array}{lcr}loss(W)&space;=&space;\frac{1}{m}\sum&space;c(H(x),&space;y)&space;\\&space;\\c(H(x),&space;y)&space;=&space;\begin{cases}-log(H(x))\quad\quad\;\;\:&space;(y&space;=&space;1)&space;\\-log(1&space;-&space;H(x))\quad&space;(y&space;=&space;0)\end{cases}&space;\end{array}&space;" title="\begin{array}{lcr}loss(W) = \frac{1}{m}\sum c(H(x), y) \\ \\c(H(x), y) = \begin{cases}-log(H(x))\quad\quad\;\;\: (y = 1) \\-log(1 - H(x))\quad (y = 0)\end{cases} \end{array} " />

그런데 위는 조건에 따라 함수를 각기 다르게 가지고 있다. 이를 합치는 것이 더욱 효율적이다. 따라서 아래와 같이 도출이 된다.

<img src="https://latex.codecogs.com/svg.image?c(H(x),&space;y)&space;=&space;-y*log(H(x))&space;-&space;(1&space;-&space;y)*log(1&space;-&space;H(x))" title="c(H(x), y) = -y*log(H(x)) - (1 - y)*log(1 - H(x))" />

검토 삼아 y에 0, 1을 대입하여 보면 위의 조건에 따른 함수식과 똑같이 나오는 것을 알 수 있다.