---
title: "Multinomial classification"
path: "/multinomial_classification"
tags: ["Machine Learning"]
featuredImage: "../image/main_image/ml.jpeg"
excerpt: ''
created: 2021-06-30
updated: 2021-06-30
---

## Multinomial classification이란?

class가 여러개일 때 이를 분류하는 기법이다. 즉, 2개의 class로 분류하는 방법인 binary classification보다 더 다양한 분류를 할 수 있는 기법이다. 예를들어 시험 공부 시간에 따라 예측할 수 있는 범위는 binary classification에서는 합격 / 불합격이지만, Multinomial classification은 A,B,C,D,F 학점으로 나눌 수 있다. 우리는 이러한 Multinomial classification 중 가장 보편적인 Softmax classification에 대해서 이해 및 학습을 진행할 것이다.

## Multinomial classification의 개념

### binary classification을 응용

우리가 어떠한 것을 A, B, C라는 class 중 하나로 분류를 해야한다고 가정을 해보자. 이를 어떻게 진행하면 될까? 막연하게 3개 중 하나로 분류를 하는 방법을 찾아보려고 생각을 한다면 어려울 수 있다. 그러면 binary classification을 응용하여 3개 중 하나로 분류하는 방법을 생각을 해보자. 즉, 우리는 현재 2가지 중 하나로 분류하는 기법을 알고 있으니, 이것을 응용하여 3가지 중 하나로 분류하는 기법을 생각해보자는 것이다. 우리는 binary classification을 통해 아래와 같이 나눌 수 있다.

|  |  |
|:---:|:----:|
| (A) | (B, C) | 
| (B) | (A, C) |
| (C) | (A, B) |

위와 같이 처음부터 3가지 중 하나로 분류를 진행을 할 수는 없지만, A class에 속하는지 아닌지, B class에 속하는지 아닌지, C class에 속하는지 아닌지는 알 수 있는 것이다. 그러므로 위 3개의 binary classification을 융합하여 우리는 Multinomial classification을 수행할 수 있다. 

### 행렬식을 통한 합산

위 세 가지 분류를 행렬식으로 나타낸다면 아래와 같이 나온다. 

<img src="https://latex.codecogs.com/svg.image?\begin{array}{lcr}\begin{bmatrix}w_{\alpha&space;_{1}}&space;&&space;w_{\alpha&space;_{2}}&space;&&space;w_{\alpha_{3}}&space;\\\end{bmatrix}&space;*\begin{bmatrix}&space;x_1\\&space;x_2\\&space;x_3\\\end{bmatrix}&space;&plus;&space;b_\alpha&space;=&space;[w_{\alpha&space;_{1}}x_1&space;&plus;&space;w_{\alpha&space;_{2}}x_2&space;&plus;&space;w_{\alpha_{3}}x_3]&space;&plus;&space;b_\alpha&space;\\&space;\\\begin{bmatrix}w_{\beta&space;_{1}}&space;&&space;w_{\beta&space;_{2}}&space;&&space;w_{\beta_{3}}&space;\\\end{bmatrix}&space;*\begin{bmatrix}&space;x_1\\&space;x_2\\&space;x_3\\\end{array}&space;&plus;&space;b_\beta&space;=&space;[w_{\beta&space;_{1}}x_1&space;&plus;&space;w_{\beta_{2}}x_2&space;&plus;&space;w_{\beta_{3}}x_3]&space;&plus;&space;b_\beta&space;\\&space;\\\begin{bmatrix}w_{\gamma&space;&space;_{1}}&space;&&space;w_{\gamma&space;_{2}}&space;&&space;w_{\gamma_{3}}&space;\\\end{bmatrix}&space;*\begin{bmatrix}&space;x_1\\&space;x_2\\&space;x_3\\\end{bmatrix}&space;&plus;&space;b_\gamma&space;=&space;[w_{\gamma&space;_{1}}x_1&space;&plus;&space;w_{\gamma_{2}}x_2&space;&plus;&space;w_{\gamma_{3}}x_3]&space;&plus;&space;b_\gamma\end{array}&space;" title="\begin{array}{lcr}\begin{bmatrix}w_{\alpha _{1}} & w_{\alpha _{2}} & w_{\alpha_{3}} \\\end{bmatrix} *\begin{bmatrix} x_1\\ x_2\\ x_3\\\end{bmatrix} + b_\alpha = [w_{\alpha _{1}}x_1 + w_{\alpha _{2}}x_2 + w_{\alpha_{3}}x_3] + b_\alpha \\ \\\begin{bmatrix}w_{\beta _{1}} & w_{\beta _{2}} & w_{\beta_{3}} \\\end{bmatrix} *\begin{bmatrix} x_1\\ x_2\\ x_3\\\end{array} + b_\beta = [w_{\beta _{1}}x_1 + w_{\beta_{2}}x_2 + w_{\beta_{3}}x_3] + b_\beta \\ \\\begin{bmatrix}w_{\gamma _{1}} & w_{\gamma _{2}} & w_{\gamma_{3}} \\\end{bmatrix} *\begin{bmatrix} x_1\\ x_2\\ x_3\\\end{bmatrix} + b_\gamma = [w_{\gamma _{1}}x_1 + w_{\gamma_{2}}x_2 + w_{\gamma_{3}}x_3] + b_\gamma\end{array} " />

그리고 위 3개의 식은 아래와 같이 합칠 수 있다.

<img src="https://latex.codecogs.com/svg.image?\begin{bmatrix}w_{\alpha_{1}}&space;&&space;w_{\alpha_{2}}&space;&&space;w_{\alpha_{3}}&space;\\w_{\beta_{1}}&space;&&space;w_{\beta_{2}}&space;&&space;w_{\beta_{3}}&space;\\w_{\gamma_{1}}&space;&&space;w_{\gamma_{2}}&space;&&space;w_{\gamma_{3}}&space;\\\end{bmatrix}&space;*&space;\begin{bmatrix}x_1&space;\\x_2&space;\\x_3\end{bmatrix}&space;&plus;&space;\begin{bmatrix}b_\alpha&space;\\b_\beta&space;\\b_\gamma\end{bmatrix}&space;=&space;\begin{bmatrix}\bar{y_\alpha}&space;\\\bar{y_\beta}&space;\\\bar{y_\gamma}\end{bmatrix}" title="\begin{bmatrix}w_{\alpha_{1}} & w_{\alpha_{2}} & w_{\alpha_{3}} \\w_{\beta_{1}} & w_{\beta_{2}} & w_{\beta_{3}} \\w_{\gamma_{1}} & w_{\gamma_{2}} & w_{\gamma_{3}} \\\end{bmatrix} * \begin{bmatrix}x_1 \\x_2 \\x_3\end{bmatrix} + \begin{bmatrix}b_\alpha \\b_\beta \\b_\gamma\end{bmatrix} = \begin{bmatrix}\bar{y_\alpha} \\\bar{y_\beta} \\\bar{y_\gamma}\end{bmatrix}" />

위는 단순히 linear regression을 응용한 것이다. 우리는 이외에도 0 ~ 1사이의 수로, 그리고 합이 1이 되는 확률과 같이 나타낼 필요가 있다. 그리고 우리는 여기서 Softmax를 활용할 수 있다. Softmax에 대한 정의는 아래와 같다.

<img src="https://latex.codecogs.com/svg.image?S(y_i)&space;=&space;\frac{e^{y_i}}{\sum_{j}&space;e^{y_j}}&space;" title="S(y_i) = \frac{e^{y_i}}{\sum_{j} e^{y_j}} " />

위의 정의를 살펴보면, 단지 e에 각각 도출된 y의 값을 제곱하고, 이에 대해서 차지하는 비율을 나타내는 식이다. 이로써 우리는 각각의 class에 속할 수 있는 확률을 구할 수 있다.

### loss function

Multinomial classification에서 우리는 loss function으로써 Cross-entropy를 사용한다. Cross-entropy에 대한 정의는 아래와 같다.

<img src="https://latex.codecogs.com/svg.image?D(\bar{y},&space;y)&space;=&space;-\sum&space;y_i&space;log&space;\bar{y_i}" title="D(\bar{y}, y) = -\sum y_i log \bar{y_i}" />

이전과 마찬가지로 우리는 위 loss function을 이용하여 가장 최소가 되는 지점을 찾으면 된다.

- logistic loss function과 차이점?

이전에 binary classification에서의 loss function과 왠지 닮은 것 같은 느낌을 받을 수 있다. 결론적으로 말하자면 같은 함수이다. binary classification에서의 loss function에 대한 정의는 다음과 같았다.

<img src="https://latex.codecogs.com/svg.image?c(H(x),&space;y)&space;=&space;-y*log(H(x))&space;-&space;(1&space;-&space;y)*log(1&space;-&space;H(x))" title="c(H(x), y) = -y*log(H(x)) - (1 - y)*log(1 - H(x))" />

Cross-entropy에서의 각 파라미터는 binary classification에서는 각각 2개의 변수를 갖는다. 그리고 각각의 변수들의 특이사항을 써보면 아래와 같다.

<img src="https://latex.codecogs.com/svg.image?\begin{array}{lcr}\bar&space;{y_2}&space;=&space;1&space;-&space;\bar{y_1}&space;\\y_2&space;=&space;1&space;-&space;y_1\end{array}" title="\begin{array}{lcr}\bar {y_2} = 1 - \bar{y_1} \\y_2 = 1 - y_1\end{array}" />

결과값이던 예측값이던 확률이기에 합이 1이 나와야 하기 때문이다. 즉, 위의 특별한 식을 Cross-entropy에 대입하여보면 binary classification에서의 loss function과 같음을 알 수 있다. 