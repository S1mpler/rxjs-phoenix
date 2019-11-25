import { Socket } from 'phoenix';
import { Observable } from 'rxjs';
import { RxChannel } from './rx-channel';
import { ChannelListItem } from './types';

export class RxSocket {
  private channels: Array<ChannelListItem>;

  constructor(private socket: Socket) {
    this.channels = new Array<ChannelListItem>();
  }

  public createChannel(topic: string, channelParams = {}): any {
    console.log(`${topic} works`);
    return null;

    // const channelItem = this.channels.find(c => c.channelName === topic);
    // if (channelItem) { return channelItem.channel; }

    // const channel = this.socket.channel(topic, channelParams);
    // const newChannelItem = {
    //   channelName: topic,
    //   channel: new RxChannel(channel)
    // };
    // this.channels.push(newChannelItem);
    // return newChannelItem.channel;
  }

  public removeChannel(topic: string): void {
    console.log(`${topic} removed`);
    // const channelItem = this.channels.find(c => c.channelName === topic);
    // this.socket.remove(channelItem.channel.originChannel);
    // this.channels = this.channels.slice(this.channels.indexOf(channelItem, 1));
  }

  public onError$(): Observable<void> {
    return new Observable(observer => {
      this.socket.onError(() => { observer.next(); });
    });
  }

  public onClose$(): Observable<void> {
    return new Observable(observer => {
      this.socket.onClose(() => { observer.next(); });
    });
  }

  public onMessage$(): Observable<void> {
    return new Observable(observer => {
      this.socket.onMessage(() => { observer.next(); });
    });
  }
}