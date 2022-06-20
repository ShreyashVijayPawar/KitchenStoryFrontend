import { ErrorEnum } from "./error-enum";

export class ResponseModel {
    
    constructor(
      public responseData: any,
      public errorCategory: ErrorEnum
    ) {}
}
