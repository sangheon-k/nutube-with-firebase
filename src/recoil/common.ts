import { atom, selector } from 'recoil';

interface ICommonState {
  isAsideOpen: boolean;
  isProfileOpen: boolean;
}

const commonState = atom({
  key: 'commonState',
  default: {
    isAsideOpen: false,
    isProfileOpen: false,
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
