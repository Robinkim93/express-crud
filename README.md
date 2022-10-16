## 사용한 Package

- cors : cors 현상 완화를 위한 package
- dbmate : table log관리를 위한 package
- dotenv : env 파일을 전역에서 사용하기 위한 package
- express : 서버생성을 위한 express
- morgan : log관리를 위한 package
- mysql : RDBMS 중 가장 널리쓰이는 mysql 사용
- nodemon : 저장 시 자동으로 서버가 재실행되는 기능 통해 script를 짜서 사용하기 위한 package
- typeorm : 구현한 API와 MySQL을 이어줄 수 있는 package

## 사용한 Tool

- postman : http 통신 시 프론트엔드의 역할을 대신해 통신을 보내주고 결과값 반환에 대한 것을 확인 할 수 있는 Tool

## 구현한 기능

- 회원가입 기능 : email, password, username, profile_image 를 받아서 DB에 회원으로 추가하는 기능 성공 시 userCreated 반환
- 게시글 추가 기능 : title, content, user_id를 받아서 DB에 게시글을 추가하는 기능 성공 시 postCreated 반환
- 특정 유저가 작성한 게시글 불러오는 기능 : Query Parameter 이용해서 userid를 받아오고, SQL Inner join 및 where 절 적용하여 userid가 작성한 게시글을 불러와 데이터를 반환할 수 있다.
- 게시글 수정 기능 : Query Parameter와 body를 동시에 사용해서 글에 대한 정보는 Query로 수정 될 content의 내용은 body 를 통해 받아와서 Dao단에서 하나의 함수 안에 쿼리문 두 번을 사용해서 수정할 글을 찾아 수정하고, 다시 그 수정된 글을 불러올 수 있게 처리함.

## 어려웠던 점과 깨닫게 된 점

- Inner join문이 헷갈렸으나 평소에 select 문 뒤에 from 에 2개를 써주는 부분에서 약간의 변형이 있는것으로 이해함.
- 실제로 where절을 처음사용한 것이라 생소했으나 반복적으로 보다보니 눈에 익숙해짐.
- Query Parameter를 쓸 때는 routing 시 값을 비워주는 부분에 들어갈 수 있게 url을 작성해야된다.
- Unknown column '' in 'field list'의 오류가 SQL Query문에서 났을 때 해결하는 방법을 찾을 수 있었음.
