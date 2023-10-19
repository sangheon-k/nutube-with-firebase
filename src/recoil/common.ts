import { atom, selector } from 'recoil';

interface ICommonState {
  isAsideOpen: boolean;
}

const commonState = atom({
  key: 'commonState',
  default: {
    isAsideOpen: false,
  },
});

export const asideToggleState = selector({
  key: 'asideToggleState',
  get: ({ get }) => get(commonState).isAsideOpen,
  set: ({ get, set }, isAsideOpen) => {
    set(commonState, { ...get(commonState), isAsideOpen } as ICommonState);
  },
});
