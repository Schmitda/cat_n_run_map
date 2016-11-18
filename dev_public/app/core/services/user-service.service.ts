import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {User} from "../../models/User";
@Injectable()

export class UserService {
    private _currentUser: BehaviorSubject<User>;
    private _isLoggedIn: boolean = false;

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    constructor(private http: Http) {
        this._currentUser = new BehaviorSubject(undefined);
    }


    public checkIfSessionExists(): Observable<boolean> {
        let observable = this.http.get('/api/user/session')
            .map(
                (res: Response) => {
                    let body = res.json() || {};
                    return body
                }
            );
        observable.subscribe(
            (user) => {
                if (user._id !== undefined) {
                    console.log(this);
                    this._currentUser.next(user);
                    this._isLoggedIn = true;
                } else {
                    this._isLoggedIn = false;
                }
            }
        );
        return observable;
    }

    public logoff() {
        this.http.get('/api/user/logoff')
            .map(this.extractData)
            .subscribe((successfull) => {
                this._currentUser.next(null);
                this._isLoggedIn = false;
            });
    }

    public save(user: User): Observable<User> {
        return this.http.post('/api/user/', user)
            .map(this.extractData)
    }

    private extractData(res: Response) {
        return <User>res.json() || {};
    }

    public getAllUsers(): Observable<User[]> {
        return this.http.get('/api/user/')
            .map(this.extractData)
    }


    public getUserById(id: number): Observable<User> {
        return this.http.get('/api/user/' + id)
            .map(this.extractData);
    }

    public update(user: User): Observable<User> {
        return this.http.put('/api/user/' + user._id, user)
            .map(this.extractData);
    }


    public saveUserAndSetCurrentUser(user: User) {
        this.save(user)
            .subscribe((user: User) => {
                this._currentUser.next(user);
            })
    }


    get currentUser(): BehaviorSubject<User> {
        return this._currentUser;
    }

    public login(username: String, password: String): Observable<User> {
        let observable = this.http.post('/api/user/login', {
            username: username,
            password: password
        })
            .map(this.verifyLoginAndExtract);

        observable.subscribe((user) => {
            if (user._id !== undefined) {
                console.log(this);
                this._currentUser.next(user);
                this._isLoggedIn = true;
            } else {
                this._isLoggedIn = false;
            }
        });
        return observable;
    }

    private verifyLoginAndExtract(res: Response) {
        let user: User = res.json() || {};
        return user;
    }
}