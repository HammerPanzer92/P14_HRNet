import { create } from "zustand";

export const useBearStore = create((set) => ({
  listEmployee: [],
  addEmployee: (newEmployee) =>
    set((state) => ({
      listEmployee: [...state.listEmployee, newEmployee],
    })),
}));
