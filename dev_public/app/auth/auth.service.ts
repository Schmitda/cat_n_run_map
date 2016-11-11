import {Injectable} from "@angular/core";
import {Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {UserService} from "../core/user-service.service";

@Injectable()

export class AuthGuard implements CanActivate{


    constructor(private userService: UserService, private router:Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> {
        if (this.userService.isLoggedIn) { return Observable.of(true); }
        return Observable.create((observer: Observer<any>) => {
            this.userService.checkIfSessionExists().
            subscribe(() => {
                if(this.userService.isLoggedIn){
                    observer.next(true);
                    observer.complete();
                }else{
                    // Store the attempted URL for redirecting
                    let redirectUrl = state.url;

                    // Navigate to the login page
                    this.router.navigate(['/login']);
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }
}