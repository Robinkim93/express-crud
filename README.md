## 사용한 Package

- cors : cors 현상 완화를 위한 package
- dbmate : table log관리를 위한 package
- dotenv : env 파일을 전역에서 사용하기 위한 package
- express : 서버생성을 위한 express
- morgan : log관리를 위한 package
- mysql : RDBMS 중 가장 널리쓰이는 mysql 사용
- nodemon : 저장 시 자동으로 서버가 재실행되는 기능 통해 script를 짜서 사용하기 위한 package
- typeorm : 구현한 API와 MySQL을 이어줄 수 있는 package

## 구현한 기능

- 회원가입 기능 : email, password, username, profile_image 를 받아서 DB에 회원으로 추가하는 기능 성공 시 userCreated 반환
- 게시글 추가 기능 : title, content, user_id를 받아서 DB에 게시글을 추가하는 기능 성공 시 postCreated 반환

## 어려웠던 점
