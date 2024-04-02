import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AppInterceptor implements HttpInterceptor{
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       //interceptor logic
       console.log(req);
       return next.handle(req);
    }

    
}