---
title: "Linear Regression"
path: "/linear_regression"
tags: ["Machine Learning"]
featuredImage: "../image/main_image/ml.jpeg"
excerpt: ''
created: 2021-06-22
updated: 2021-06-22
---

## Linear Regression이란?

Linear Regression이란 종속 변수 y와 한 개 이상의 독립 변수 x와의 선형 상관관계를 모델링하는 회귀분석 기법을 말한다. 예를 들어, 공부한 시간을 통해 예상되는 시험 점수를 알아보고자 한다면, y는 시험 점수, x는 공부한 시간을 바탕으로 y = Wx + b 꼴로 상관관계를 추정하여 이에 대한 a, b의 값을 예측할 수 있다. 그리고 이는 Simple Linear Regression으로 불린다. 보편적으로 Linear Regression은 독립 변수를 기준으로 선형 결합으로 표현하는 방식을 일컫는다고 착각을 할 수 있다. 그러나 Linear Regression는 회귀 계수(regression coefficient)를 선형 결합으로 표현할 수 있는 방식을 의미한다. 예를 들어, 

<img src="https://latex.codecogs.com/svg.image?y&space;=&space;\beta_{0}&space;&plus;&space;\beta_{1}&space;*&space;x&space;&plus;&space;&space;\beta_{2}&space;*&space;x^2&space;&plus;&space;\beta_{3}&space;*&space;x^3" title="y = \beta_{0} + \beta_{1} * x + \beta_{2} * x^2 + \beta_{3} * x^3" />

와 같은 꼴 또한 회귀 계수를 바탕으로 고려가 되기 떄문에 Linear Regression equation인 것이다.

## Simple Linear Regression Analysis

Simple Linear Regression Analysis이란 Simple이란 단어에서 유추할 수 있듯이 하나의 독립변수에 의해 종속변수의 상관관계가 모델링되는 회귀 분석이다. 앞서 예를 들었던 공부한 시간을 통해 예상되는 시험 점수를 알아보고자 하는 문제처럼 독립변수 x는 공부한 시간 하나이고, 이를 y = Wx + b 꼴로 예측을 한다면, 이는 Simple Linear Regression Analysis에 속하는 것이다.

### y = Wx + b 에서의 변수 W, b의 의미

Machine Learning에서 W는 weight(가중치)의 약자로서 사용이 되고, b는 bias(편향치)의 약자로서 사용이 된다.


## Multiple Linear Regression Analysis

Multiple Linear Regression Analysis이란 Multiple이란 단어에서 유추할 수 있듯이 여러 개의 독립변수에 의해 종속변수의 상관관계가 모델링되는 회귀분석이다. 예를 들어 건설사, 지역, 크기, 학군에 의해 아파트 가격이 다르다는 추론을 하였고, 이에 대해 선형 회귀식으로 예측을 하여 본다면,

<img src="https://latex.codecogs.com/svg.image?y&space;=&space;W_{1}&space;*&space;x_{1}&space;&plus;&space;&space;W_{2}&space;*&space;x_{2}&space;&plus;&space;&space;W_{3}&space;*&space;x_{3}&space;&plus;&space;&space;W_{4}&space;*&space;x_{4}&space;&plus;&space;b&space;&space;" title="y = W_{1} * x_{1} + W_{2} * x_{2} + W_{3} * x_{3} + W_{4} * x_{4} + b " />

와 같은 꼴로 예측할 수 있을 것이다.

## Hypothesis

Hypothesis란 가설이란 뜻으로 Training data set의 x와 y의 값들을 통해 어떠한 상관관계를 가지는지 예측을 하는 행위라고 할 수 있다. 좀 더 전문적으로 말한다면 x와 y의 관계를 유추하기 위해서 이에 대한 수학적으로 식을 세워 보아야하고, 이러한 행위를 Hypothesis라고 말한다. 그리고 Hypothesis의 앞글자인 H를 따와 H(x)로 나타낸다. 즉, 앞서 언급한 공부 시간에 따른 시험 점수 예측 문제에서 우리가 세운 가설은

<img src="https://latex.codecogs.com/svg.image?H(x)&space;=&space;W&space;*&space;x&space;&plus;&space;b" title="H(x) = W * x + b" />

인 것이고, 건설사, 지역, 크기, 학군에 따른 아파트 가격 추론에 대한 가설은 

<img src="https://latex.codecogs.com/svg.image?H(x)&space;=&space;W_{1}&space;*&space;x_{1}&space;&plus;&space;&space;W_{2}&space;*&space;x_{2}&space;&plus;&space;&space;W_{3}&space;*&space;x_{3}&space;&plus;&space;&space;W_{4}&space;*&space;x_{4}&space;&plus;&space;b&space;&space;" title="H(x) = W_{1} * x_{1} + W_{2} * x_{2} + W_{3} * x_{3} + W_{4} * x_{4} + b " />

인 것이다. 이러한 가설로 나온 식을 바탕으로 우리는 가장 적절한 weight와 bias를 찾아야하고 이를 Machine Learning을 통해 진행한다.

## Loss(Cost)

그렇다면, 가장 적절한 weight와 bias를 찾는다는 것은 무엇을 뜻하는 것일까? 여기에서 나오는 것이 Loss이다.(Loss 혹은 Cost, 두 단어가 같은 의미를 가지면서 쓰인다. 필자를 Loss라고 부르겠다.) 처음 제시한 질문에 대한 해답을 먼저 말하자면, 가장 적합한 weight와 bias를 찾는다는 뜻은 Loss가 가장 최소로 나올 수 있는 weight와 bias를 찾는다는 뜻이다. 이러한 Loss를 계산하는 방식에는 다양한 공식이 있다. 그 중 가장 많이 사용되는 공식은 MSE(Mean Squared Error)이다.

<img src="https://latex.codecogs.com/svg.image?loss(W,&space;b)&space;=&space;1/m&space;*&space;\sum_{i&space;=&space;1}^{m}(H(X_{i})&space;-&space;y_{i})^2" title="loss(W, b) = 1/m * \sum_{i = 1}^{m}(H(X_{i}) - y_{i})^2" />

MSE의 공식은 위와 같이 나타난다. 즉, 실험식에서 Training data set의 독립 변수들을 대입하여 나오는 값에 그에 해당하는 상대변수의 차이의 제곱 값의 합의 평균을 구하는 것이다. MSE가 가장 많이 쓰이는 이유는 제곱을 함으로써 항상 양의 값이 가져지게 때문에 차이를 구할 수 있을 뿐만 아니라 너무 차이가 커지면 제곱으로 인해 penalty가 크게 나온다는 장점이 있기 때문이다.