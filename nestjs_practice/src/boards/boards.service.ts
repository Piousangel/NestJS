import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from '../dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards : Board[] = [];

    getAllBoards(): Board[]{
        return this.boards;
    }

    createBoard(createBoardDto : CreateBoardDto ) {
        // const title = createBoardDto.title;
        // const description = createBoardDto.description;ß
        const { title, description } = createBoardDto;
        const board: Board = { 
            id : uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    // id로 게시물을 찾는 service단 로직
    getBoardById(id: string) : Board {
        return this.boards.find( (board) => board.id === id);
    }

    // id로 게시물 삭제하는 로직
    // filter함수로 id가 다른 배열들만 따로 boards로 재 생성합니다.
    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    //id와 상태값으로 특정 게시물의 상태 업데이트하기
    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }

}
 