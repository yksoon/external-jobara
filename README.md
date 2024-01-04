# 제주 Jobara 페스티벌
- 제주 주관 직업 박람회

링크 : [jejujobara.com]((http://jejujobara.com/)

## 특징
- 퍼블리싱을 적용하기 편하도록 하기 위해 custom 작업을 진행 한 프로젝트
- 상태 관리 라이브러리인 Redux의 불편한 사용성을 개선한 Recoil 라이브러리로 교체

## 개발 환경 및 사용 툴
- 백엔드 : JAVA
- 백엔드 프레임워크 : Springboot
- 프론트엔드 : Javascript
- 프론트엔드 프레임워크 : ReactJS, Webpack (컴파일러)
- Server : Linux (CentOS), Apache
- 상태관리 라이브러리 : Redux -> Recoil

## 작업기간
- 2023.08 ~ 2023.09

## 구현 설명
- 행사 기간이 존재하여 행사 기간을 DB화 하여 첫 렌더링시 행사 기간을 확인하는 로직 구현.
- 기존 사용하던 Redux 라이브러리의 사용성을 고려하여 Recoil 라이브러리로 교체 함.
- 상태를 관리하기 쉬워졌고 getter, setter 의 사용성이 훨씬 간편해졌다.
- env 환경변수를 사용하여 dev / prd 분기처리를 구현 함.

## 느낀점
- 배포 시 SPA특성 상 router 이동 및 새로고침 시 404 에러가 발생하는 현상이 나타남. 웹서버 세팅을 index.html 로 redirect를 해주는 옵션과, rewriteRule을 적용하여 관련 현상을 해결 함. SPA 프로젝트의 웹서버 세팅에 대하여 다른 차이점을 알아갈 수 있었던 좋은 기회였다.
- Jenkins를 이용하여 자동 배포시 필요한 Shell Script를 작성 했고, Jenkins 에서 이 스크립트를 실행 함으로서 분기처리하여 자동 배포되도록 세팅을 진행하였다. 자동 배포되는 과정을 알수 있는 기회였다.
