---
title: "Multi-variable Linear Regression에서의 행렬식을 통한 가설식"
path: "/Multi-variable_linear_regression"
tags: ["Machine Learning"]
featuredImage: "../image/main_image/ml.jpeg"
excerpt: ''
created: 2021-06-28
updated: 2021-06-28
---

## 한 개가 아닌 여러 개의 독립변수를 가지고 있을 때의 식 전개

Multi-variable Linear Regression은 이전에 살펴보았던 것과 같이 여러 개의 독립변수에 의해 종속변수의 상관관계가 모델링 되는 회귀분석이다. 즉, 건설사, 지역, 학군에 따른 아파트 가격 추론에 대한 가설은 독립변수가 3개이므로,

<img src="https://latex.codecogs.com/svg.image?H(x_1,&space;x_2,&space;x_3)&space;=&space;w_1x_1&space;&plus;&space;w_2x_2&space;&plus;&space;w_3x_3&space;&plus;&space;b&space;" title="H(x_1, x_2, x_3) = w_1x_1 + w_2x_2 + w_3x_3 + b " />

와 같이 나타낼 수 있을 것이다. 만약 독립변수가 n개라고 가정을 한다면, 

<img src="https://latex.codecogs.com/svg.image?H(x_1,&space;x_2,&space;x_3,&space;...,x_{n&space;-&space;1},&space;x_n)&space;=&space;w_1x_1&space;&plus;&space;w_2x_2&space;&plus;&space;w_3x_3&space;&plus;&space;...&space;&plus;&space;w_{n&space;-&space;1}x_{n&space;-&space;1}&space;&plus;&space;w_nx_n&space;&plus;&space;b&space;" title="H(x_1, x_2, x_3, ...,x_{n - 1}, x_n) = w_1x_1 + w_2x_2 + w_3x_3 + ... + w_{n - 1}x_{n - 1} + w_nx_n + b " />

와 같이 나타낼 수 있을 것이다. 맨 처음 언급한 예시처럼 3개의 독립변수를 가지는 상황에 대해서는 그래도 비교적 쉽게 수식으로 정리 및 표현을 하여 가설식을 세울 수 있다. 그러나 바로 위의 예시와 같이 극단적으로 수없이 클 수 있는 n개의 독립변수를 가지고 있다면, 이를 하나의 수식으로 표현하기에는 무엇인가 깔끔함 및 효율성이 없다. 그리고, 데이터셋은 매우 많을 것이고, 이 모든 것들을 위와 같이 표현 후 연립 방정식 형태로 나타낸다면, 이는 매우 비효율 적이다. 또한 위를 행렬식으로 나타낸다면, 행렬의 특성을 사용하여 더욱 쉽고, 코딩으로 구현이 가능하게 바라볼 수 있는 기회가 생길 것이다. 이러한 이유로 인해 우리는 행렬의 곱을 이용해 식을 더욱 단순화시키는 작업을 할 것이다.

## 행렬을 이용한 가설식

앞서 살펴 본 독립변수가 n개라고 가정할 시 도출되는 가설식은 아래와 같다.

<img src="https://latex.codecogs.com/svg.image?H(x_1,&space;x_2,&space;x_3,&space;...,x_{n&space;-&space;1},&space;x_n)&space;=&space;w_1x_1&space;&plus;&space;w_2x_2&space;&plus;&space;w_3x_3&space;&plus;&space;...&space;&plus;&space;w_{n&space;-&space;1}x_{n&space;-&space;1}&space;&plus;&space;w_nx_n&space;&plus;&space;b&space;" title="H(x_1, x_2, x_3, ...,x_{n - 1}, x_n) = w_1x_1 + w_2x_2 + w_3x_3 + ... + w_{n - 1}x_{n - 1} + w_nx_n + b " />

위 가설식에서 우리는 loss의 최소화가 이루어질 수 있는 변수의 값을 찾아야하고, 그 변수는 

<img src="https://latex.codecogs.com/svg.image?w_1,&space;w_2,&space;w_3,&space;...,&space;w_{n&space;-&space;1},&space;w_n,&space;b" title="w_1, w_2, w_3, ..., w_{n - 1}, w_n, b" />

이다. 학부 떄 배운 선형대수학의 기초를 조금만 다시 떠올려보면, 우리는 가설식을 아래와 같이 나타낼 수 있음을 알 수 있다.

<img src="https://latex.codecogs.com/svg.image?H(x_1,&space;x_2,&space;x_3,&space;...,&space;x_{n&space;-&space;1},&space;x_n)&space;=&space;\begin{bmatrix}&space;x_1&&space;x_2&space;&&space;x_3&space;&&space;...&space;&&space;x_{n&space;-&space;1}&space;&&space;x_n&space;\\\end{bmatrix}&space;*&space;\begin{bmatrix}w_1&space;\\w_2&space;\\w_3&space;\\.&space;\\.&space;\\.&space;\\w_{n&space;-&space;1}&space;\\w_n&space;&space;\\\end{bmatrix}&space;&plus;&space;b" title="H(x_1, x_2, x_3, ..., x_{n - 1}, x_n) = \begin{bmatrix} x_1& x_2 & x_3 & ... & x_{n - 1} & x_n \\\end{bmatrix} * \begin{bmatrix}w_1 \\w_2 \\w_3 \\. \\. \\. \\w_{n - 1} \\w_n \\\end{bmatrix} + b" />

더 나아가, weight와 독립변수 또한 행렬로 나타내어 본다면, 우리는 아래와 같은 식을 얻을 수 있을 것이다.

<img src="https://latex.codecogs.com/svg.image?\begin{array}{lcr}X&space;=&space;\begin{bmatrix}x_1&space;&&space;x_2&space;&&space;x_3&space;&&space;...&space;&&space;x_{n&space;-&space;1}&space;&&space;x_n&space;\\\end{bmatrix}&space;\\&space;\\W&space;=&space;\begin{bmatrix}w_1&space;&&space;w_2&space;&&space;w_3&space;&&space;...&space;&&space;w_{n&space;-&space;1}&space;&&space;w_n&space;\\\end{bmatrix}&space;\\&space;\\H(X)&space;=&space;X&space;*&space;W^T&space;&plus;&space;b\end{array}&space;&space;" title="\begin{array}{lcr}X = \begin{bmatrix}x_1 & x_2 & x_3 & ... & x_{n - 1} & x_n \\\end{bmatrix} \\ \\W = \begin{bmatrix}w_1 & w_2 & w_3 & ... & w_{n - 1} & w_n \\\end{bmatrix} \\ \\H(X) = X * W^T + b\end{array} " />

## theory hypothesis & implementation hypothesis

theory hypothesis는 이론 가설식이고, implementation hypothesis 구현 가설식이다. 앞서 설명했던 것들을 잘 이해하였다면, 위 용어의 정의를 유추할 수 있을 것이다. 단순히 쉽게 설명을 한다면 theory hypothesis는 방정식 꼴의 가설식, implementation hypothesis는 행렬식 꼴의 가설식이다. theory hypothesis와 implementation hypothesis를 각각 정의하여 본다면 아래와 같다.

* 이론 가설식

    <img src="https://latex.codecogs.com/svg.image?H(X)&space;=&space;W&space;*&space;X&space;&plus;&space;B" title="H(X) = W * X + B" />

* 구현 가설식 

    <img src="https://latex.codecogs.com/svg.image?H(X)&space;=&space;X&space;*&space;W^T&space;&plus;&space;B" title="H(X) = X * W^T + B" />
