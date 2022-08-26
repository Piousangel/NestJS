import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from '../dto/create-board.dto';
import { BoardStatus } from 'nestjs_practice/dist/boards/board.model';

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
        // @Body('title') title : string,
        // @Body('description') description : string,
        @Body() createBoardDto : CreateBoardDto
    ) : Board {
        return this.boardsService.createBoard(createBoardDto);
    }
       
    //?id= abc와 같이 쿼리스트링 데이터는 @Param으로 가져올 수 있습니다.
    // : board처럼 반환 타입을 명시할 수도 있습니당~~
    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }
    
    @Delete('/:id')
    deleteBoard(@Param('id') id: string) : void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus,
    ){
        return this.boardsService.updateBoardStatus(id, status)
    }
}
