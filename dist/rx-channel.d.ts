import { Observable } from 'rxjs';
import { Channel } from 'phoenix';
export declare class RxChannel {
    private channel;
    constructor(channel: Channel);
    get originChannel(): Channel;
    join(timeout?: number): Observable<any>;
    leave(timeout?: number): Observable<any>;
    push(eventName: string, payload: object, timeout?: number): Observable<any>;
    on$(eventName: string): Observable<any>;
    onError$(): Observable<any>;
    off(eventName: string, ref?: number): void;
}
