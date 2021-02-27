import { ErrorDto } from "./ErrorDto";

export class ResponseDto {

    constructor(public Errors: ErrorDto[], public data: any | null) { }

}