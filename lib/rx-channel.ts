import { Observable } from 'rxjs';
import { Channel } from 'phoenix';

export class RxChannel {
  constructor(private channel: Channel) { }

  get originChannel(): Channel {
    return this.channel;
  }

  public join(timeout?: number): Observable<any> {
    return new Observable(observer => {
      this.channel.join(timeout)
        .receive('ok', (response) => observer.next(response))
        .receive('error', (error) => observer.error(error));
    });
  }

  public leave(timeout?: number): Observable<any> {
    return new Observable(observer => {
      this.channel.leave(timeout)
        .receive('ok', (response) => observer.next(response))
        .receive('error', (error) => observer.error(error));
    });
  }

  public push(eventName: string, payload: object, timeout?: number): Observable<any> {
    return new Observable(observer => {
      this.channel.push(eventName, payload, timeout)
        .receive('ok', (response) => observer.next(response))
        .receive('error', (error) => observer.error(error));
    });
  }

  public on$(eventName: string): Observable<any> {
    return new Observable(observer => {
      this.channel.on(eventName, (response) => {
        observer.next(response);
      });
    });
  }

  public onError$(): Observable<any> {
    return new Observable(observer => {
      this.channel.onError((error) => {
        observer.next(error);
      });
    });
  }

  public off(eventName: string, ref?: number): void {
    this.channel.off(eventName, ref);
  }
}
