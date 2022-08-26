Nest JS란?
- 효율적이고 확장 가능한 Node.js 서버 측 애플리케이션을 구축하기위한
  프로엠 워크. 프로그레시브 JavaScript를 사용하고 TypeScript로 빌드되고
  완벽하게 지원하며 OOP, FP, FRP 요소를 사용할 수 있게 해줍니다.

Nest JS의 내부
- 내부적으로 Next는 Express와 같은 강력한 HTTP 서버 프레임 워크를 사용하며
  선택적으로 Fastify를 구성할 수 있습니다

1. Node.js 설치하기
2. Nest JS CLI로 Nest JS 시작하기
    - NestJS를 이용해서 프로젝트를 시작할 때 Nest CLI를 이용하면 간단히 프로젝트를
      시작할 수 있습니다.
    - Nest CLI를 이용해서 아래의 명령어를 작성하면 
      새 프로젝트 디렉토리가 생성되고 초기 핵심 Nest 파일 및 지원 모듈로 디렉터리가 채워져 
      프로젝트의 기존 기본 구조가 생성됩니다.

- $ sudo npm i -g @nestjs/cli
- $ sudo nest new 생성할 프로젝트 이름

<div align="center">
 <img width="500" alt="스크린샷 2022-08-25 오후 10 57 28" src="https://user-images.githubusercontent.com/55525574/186684650-28fb9723-3c98-44ef-977a-a94c9931fc06.png">
  <br>
  <br><br>
</div>

1. 제일 처음 main.ts에서 비동기로 NestFactory.create(AppModule)로 AppModule을 생성합니다.
2. @Module 어노테이션으로 등록된 AppModule에 가보면 controller와 provider가 등록되어 있는데
3. app.controller에서 @Get 매핑 되어있는 엔드포인트가 @get('/')로 매핑되어있는 getHello 메서드에서 this.appService.getHello()를
   호출하고, app.service의 getHello() 메서드가 실행되면서 브라우저에 Hello World! 가 찍힙니다.
