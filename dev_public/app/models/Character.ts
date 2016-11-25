import {BaseElement} from "./BaseElement";

export class Character {

    private _name: string;
    private _width: number;
    private _height: number;
    private _walkAnimation: [];
    private _jumpAnimation: [];
    private _hurtAnimation: [];
    private _dieAnimation: [];
    private _runAnimation: [];
    private _standAnimation: [];
    private _shootAnimation: [];
    private _speed: number;
    private _health: number;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get walkAnimation(): any {
        return this._walkAnimation;
    }

    set walkAnimation(value: any) {
        this._walkAnimation = value;
    }

    get jumpAnimation(): any {
        return this._jumpAnimation;
    }

    set jumpAnimation(value: any) {
        this._jumpAnimation = value;
    }

    get hurtAnimation(): any {
        return this._hurtAnimation;
    }

    set hurtAnimation(value: any) {
        this._hurtAnimation = value;
    }

    get dieAnimation(): any {
        return this._dieAnimation;
    }

    set dieAnimation(value: any) {
        this._dieAnimation = value;
    }

    get runAnimation(): any {
        return this._runAnimation;
    }

    set runAnimation(value: any) {
        this._runAnimation = value;
    }

    get standAnimation(): any {
        return this._standAnimation;
    }

    set standAnimation(value: any) {
        this._standAnimation = value;
    }

    get shootAnimation(): any {
        return this._shootAnimation;
    }

    set shootAnimation(value: any) {
        this._shootAnimation = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get health(): number {
        return this._health;
    }

    set health(value: number) {
        this._health = value;
    }
}
