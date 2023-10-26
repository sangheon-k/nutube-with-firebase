import { atom, selector } from 'recoil';

interface ICommonState {
  isAsideOpen: boolean;
  isProfileOpen: boolean;
  isMyChannel: boolean;
}

const commonState = atom({
  key: 'commonState',
  default: {
    isAsideOpen: false,
    isProfileOpen: false,
    isMyChannel: false,
  },
});

export const toggleAsideState = selector({
  key: 'toggleAsideState',
  get: ({ get }) => get(commonState).isAsideOpen,
  set: ({ get, set }, isAsideOpen) => {
    set(commonState, { ...get(commonState), isAsideOpen } as ICommonState);
  },
});

export const toggleProfileState = selector({
  key: 'toggleProfileState',
  get: ({ get }) => get(commonState).isProfileOpen,
  set: ({ get, set }, isProfileOpen) => {
    set(commonState, { ...get(commonState), isProfileOpen } as ICommonState);
  },
});

export const toggleMyChannelState = selector({
  key: 'toggleMyChannelState',
  get: ({ get }) => get(commonState).isMyChannel,
  set: ({ get, set }, isMyChannel) => {
    set(commonState, { ...get(commonState), isMyChannel } as ICommonState);
  },
});
