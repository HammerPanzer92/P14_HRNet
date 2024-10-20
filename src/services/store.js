import { create } from "zustand";

export const useEmployeeStore = create((set) => ({
  listEmployee: [],
  addEmployee: (newEmployee) =>
    set((state) => ({
      listEmployee: [...state.listEmployee, newEmployee],
    })),
}));
