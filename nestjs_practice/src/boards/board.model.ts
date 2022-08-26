 export interface Board {     //게시판 모델 정의
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
 }

 export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE' 
 }