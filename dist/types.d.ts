import { RxChannel } from './rx-channel';
export interface SocketConfigModel {
    url: string;
}
export interface ChannelListItem {
    readonly channelName: string;
    readonly channel: RxChannel;
}
