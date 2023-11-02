import { atom, selector } from 'recoil';

export const channelState = atom({
  key: 'channelState',
  default: {
    id: '',
    channelBannerImg: '',
    channelName: '',
    createdAt: new Date(),
    description: '',
    ownerId: '',
    ownerName: '',
    ownerPhotoUrl: '',
  },
});

export const checkHasChannelState = selector({
  key: 'checkHasChannelState',
  get: ({ get }) => get(channelState).id !== '',
});
