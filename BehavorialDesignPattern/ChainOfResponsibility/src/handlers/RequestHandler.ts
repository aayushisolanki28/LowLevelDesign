import { UploadRequest } from "../models/UploadRequest";
export abstract class RequestHandler{

    private nextHandler ?: RequestHandler;
    setNext(handler: RequestHandler) : RequestHandler{
        this.nextHandler = handler
        return handler
    }

    protected async passToNext(
        request : UploadRequest
    ) : Promise<void>{
        if(!this.nextHandler){
            throw new Error("chain ended without storing the file ")
        }
        await this.nextHandler.handle(request)
    }

    abstract handle(request: UploadRequest) : Promise<void>

}
/* This is the base class. It connects handlers and provides a common way to pass the request forward. */