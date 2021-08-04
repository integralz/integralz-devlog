---
title: "OpenGL에서의 rendering pipeline"
path: "/rendering_pipeline"
tags: ["OpenGL"]
featuredImage: "../image/main_image/Opengl-logo.png"
excerpt: ''
created: 2021-06-12
updated: 2021-06-12
---

## Rendering Pipeline이란?

컴퓨터 그래픽스에서 3차원 이미지를 2차원 이미지로 표현하기 위한 단계적인 방법을 말한다. 이를 풀어서 설명하여 보자면 현실 세계에 있는 3차원 물체에 대해 우리는 이를 컴퓨터 모니터 등 출력 장치를 통하여 확인하고 싶다면 이를 평면(2D)로 변환하여야 한다. 그러므로 앞으로 설명할 단계에 걸쳐 변환 작업이 이루어져야 한다. rendering pipeline은 다른 용어로 graphics pipeline이라고도 불린다.

## Rendering Pipeline 단계

![rendering_pipeline](../image/rendering_pipeline/pipeline.png)
하단에 서술한 단계들을 그림으로 나타낸것이다. 엄밀하게 규정한다면, 단계를 더욱 세분화하여 표현을 할 수 있지만, 대표적으로 위와 같이 6가지의 단계로 크게 나눌 수 있다. 만약 추후에 공부를 진행할 때, 위 단계보다 더욱 세분화가 필요하다면 이에 대해 다시 업데이트할 예정이다.

### Vertex Shader

vertex는 말그대로 정점을 의미한다. 각각 입력 받은 vertex에 대해 view matrix에서 projection matrix로 변환하는 작업이다. 쉽게 말하자면 우리가 실제 현실의 물체를 화면을 통해 보기 위해 사영을 통해 2차원으로 vertex를 변환하는 것이다. 이러한 변환 과정은 모두 행렬의 곱셈을 통해 이루어진다. 그리고 이러한 변환은 크게 2가지로 나뉜다고 말할 수 있다. 단순히 일직선을 통한 정사형과 한점을 기준으로 그에 대해 모으는 사형이 존재한다. 이를 각각 Orthographic, Perspective라고 할 수 있다. 우리가 나타내고자 하는 방식에 적합한 방식을 골라 구현을 진행하면 된다. 

### Primitive Assembly

primitive란 vertex들에 대해 서로 관계를 형성하여 점, 선, 도형 등을 만들어낸 집합체라고 생각을 하면 편하다. 즉, 위 과정은 이전에 projection을 진행한 vertex에 대해 이러한 primitive들을 만들어내는 과정이라고 생각을 하면 된다.

### Geometry Shader

primitive assembly 단계를 통해 생성된 primitive는 geometry shader로 전달이 된다. 그리고 이를 바탕으로 vertex shader에서 생성되지 않은 임의의 점, 선, 도형을 생성 및 수정할 수 있다. 이러한 작업을 통하여 object를 임의로 변경한다거나, 새로운 모양을 만들 수 있다. 위 단계에 대한 설명을 들어보면 알 수 있겠지만, 위 과정은 필수적으로 진행을 하지 않아도 되는 과정이다. 즉, 선택사항이라는 것이다. 

### Rasterization

rasteriation 단게에서는 위의 과정에서 나온 최종 primitive들을 우리가 볼 화면에서의 픽셀에 mapping하는 과정이다. 각 vertex에 대한 pixel 맵핑 뿐만이 아니라 그 사이의 공간에 대해서도 pixel로의 맵핑이 일어난다. 픽셀은 연속적이지 않고 이산적인 구조를 가지고 있으므로 이를 표현하기 위해서 보간 과정을 거치게 된다. 그리고 fragment를 생성한다.

* fragment란?

    fragment는 화면의 픽셀에 대해서 어떻게 표현할지를 나타내는 데이터이다. rgba와 같은 데이터가 fragment에 속해있는 것이다.

### Fragment Shader

fragment shader는 위의 fragment의 정보와 여러가지 요소들을 통해 최종적으로 우리가 볼 화면을 그려주는 단계이다. vertex shader에서 보간된 데이터를 동해 색을 표현하거나, 텍스처 좌표(UV), Normal Mapping등을 이용하고, 여러가지 부가요소들(광원, 그림자, 빛의 색 등)을 고려하여 최종적인 픽셀의 상태를 규정하는 단계이다.

### Tests And Blending

위에서 도출된 결과가 과연 유효한지를 테스트하는 과정이라고 생각하면 된다. 예를들어 fragment가 다른 오브젝트 보다 뒤에 있다면, 이는 화면을 통해 나타나면 안되기 때문에 폐기하여야 한다. 위 단계에서는 이러한 유효성 검사를 진행하고, 그에 따라 scissor test, stencil test, depth test 등 여러가지 test를 진행한다. 