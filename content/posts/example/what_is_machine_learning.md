---
title: "Machine Learning이란?"
path: "/what_is_machine_learning"
tags: ["Machine Learning"]
featuredImage: "../image/main_image/ml.jpeg"
excerpt: ''
created: 2021-06-19
updated: 2021-06-19
---

## Machine Learning이란?

대부분의 프로그램은 explicit programming(명시적 프로그래밍)을 통해 구현이 된다. 즉, 개발자가 논리적인 코드를 작성하면, 그 조건에 따라 프로그램이 움직이는 것이다. 그러나 이러한 explicit programming에서는 한계점이 존재한다. 예를 들어, 스팸 메일을 처리한다거나 자율주행 프로그램을 개발할 때, explicit programming을 통해서는 너무 많은 변수들에 대한 처리 및 고려를 하여야하고, 사실상 완벽한 프로그램을 만들기에는 한계점이 명확하다. 그리하여 대두된 것이 Machine Learning이다. Machine Learning이란 explicit programming 방식을 탈피하여 컴퓨터에게 학습할 수 있는 능력을 주어 프로그램을 만드는 것이다.

## Supervised/Unsupervised learning

이러한 Machine Learning은 Supervised learning 과 Unsupervised learning으로 나누어진다.

### Supervised learning

명시적인, 즉 답을 정해주고 학습을 시키는 방식이다. 예를 들어 어떠한 사진이 주어졌을 떄, 이것이 사람인지, 강아지인지를 구별할 수 있는 프로그램을 개발한다면, 개라는 답을 가진 사진들과 사람이라는 답을 가진 사진들을 각각 학습을 시켜야할 것이고, 이러한 방식을 Supervised learning이라고 말한다. 이러한 답이 정해져 있는 데이터를 labeled data라고 한다. Supervised learning은 보통 x, y로 나누어 표현을 하는데, y는 정답, x는 그것에 해당하는 데이터, 즉, labeled data를 의미한다.

### Unsupervised learning

Supervised learning과 반대의 개념으로 답을 정해주고 학습시키는 것이 아닌, 데이터를 통해 스스로 학습을 진행하여 답을 도출하는 방식이다. 예를 들어, 어떠한 뉴스를 읽었을 떄, 이와 관련된 연관 뉴스를 알려주는 서비스를 제공하고 싶다면, 이는 답이 정해져 있는 것이 아니기 떄문에 Unsupervised learning 방식을 통해서 구현을 하여야 할 것이다.

## Training data set

Maching Learning을 통해 프로그램을 개발하려면 컴퓨터에게 학습을 할 수 있게 데이터를 제공하여야 한다. 학습을 할 수 있게 제공하는 데이터를 Training data set이라고 부른다.

## Supervised learning의 종류

Supervised learning은 크게 3가지로 나누어 말할 수 있다.

### regression

통계학에서 나온 용어이다. 통계학에서 회귀란 여러개의 독립 변수를 통하여 단일의 종속변수와의 상관 관계를 살펴보는 것을 뜻한다. 즉, 여러개의 독립 변수를 기반으로 답을 도출하는 것을 의미한다. 예를 들어 건설사, 지역, 크기, 학군이라는 독립변수를 기반으로 아파트 가격이라는 종속 변수를 추정하는 것을 regression이라고 할 수 있다.

### binary classification

binary, 이진적인 방식으로 분류하는 기법이다. 예를 들어 사람 사진을 주고, 위 사진의 인물이 사람인지 아닌지(이진적 방식)를 분류하는 방식이다.

### multi-label classification

binary classification과 다르게 여러가지로 분류하는 방식이다. 예를 들어 사진을 주고, 이것이 사람인지, 개인지, 고양이인지 등 우리가 분류한 기준에서 무엇에 속하는지에 대한 정답을 도출하는 기법이다.