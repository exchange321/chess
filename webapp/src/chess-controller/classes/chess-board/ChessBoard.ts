/**
 * Created by Wayuki on 2017-07-01.
 */
import {initializeChessPiece} from '../../helper/';
import IChessBoard from '../../interfaces/chess-board/IChessBoard';
import IChessMoves from '../../interfaces/chess-piece/IChessMoves';
import IModePiece from '../../interfaces/mode/IModePiece';
import normalMode from '../../modes/normalMode.json';
import ChessPiece from '../chess-piece/ChessPiece';

class ChessBoard implements IChessBoard {
  public pieces: ChessPiece[];
  private readonly mode: 'normal';

  constructor(mode: 'normal') {
    this.mode = mode;
    this.pieces = this.initializeChessBoard();
  }

  public getPiecePossibleMoves(pieceId: string): IChessMoves {
    const target = this.pieces.filter((piece) => piece.id === pieceId)[0];
    return target.getPossibleMoves();
  }

  private initializeChessBoard(): ChessPiece[] {
    switch (this.mode) {
      case 'normal':
      default: {
        const rawPieces = normalMode as IModePiece[];
        return rawPieces.map((rawPiece) => initializeChessPiece(rawPiece));
      }
    }
  }

}

export default ChessBoard;
