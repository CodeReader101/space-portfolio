import { create } from "zustand";

export const useProjectLock = create((set) => ({
  projectLock: false,
  setProjectLock: (value) => set((state) => ({ projectLock: value })),
}));

export const useListStatus = create((set) => ({
  listOn: false,
  setListOn: (value) => set((state) => ({ listOn: value })),
}));

export const useTouchControls = create((set) => ({
  touchForward: false,
  touchBackward: false,
  touchRightward: false,
  touchLeftward: false,
  setTouchForward: (value) => set((state) => ({ touchForward: value })),
  setTouchBackward: (value) => set((state) => ({ touchBackward: value })),
  setTouchRightward: (value) => set((state) => ({ touchRightward: value })),
  setTouchLeftward: (value) => set((state) => ({ touchLeftward: value })),
}));
