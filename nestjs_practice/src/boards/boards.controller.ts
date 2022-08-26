import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {

    //접근 제한자를 생성자 파라미터에 선언하면 접근제한자를 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언됩니다.
    //boardsService: BoardsService;

    constructor(private boardsService: BoardsService) {}
        //this.boardsService = boardsService

    @Get('/')
    getAllBoard() : Board[] {
        //service 로직에서 생성한 메서드 사용가능
        return this.boardsService.getAllBoards();
    }

    @Post('/')
    createBoard(
        @Body('title') title : string,
        @Body('description') description : string,
    ) : Board {
        return this.boardsService.createBoard(title, description);
    }
       
    
}
