import { Socket } from 'phoenix';
import { Observable } from 'rxjs';
export declare class RxSocket {
    private socket;
    private channels;
    constructor(socket: Socket);
    createChannel(topic: string, channelParams?: {}): any;
    removeChannel(topic: string): void;
    onError$(): Observable<void>;
    onClose$(): Observable<void>;
    onMessage$(): Observable<void>;
}
