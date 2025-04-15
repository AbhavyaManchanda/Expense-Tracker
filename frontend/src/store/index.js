import { create } from "zustand";

const useStore = create((set) => ({
  theme: localStorage.getItem("theme") ?? "light",
  user: JSON.parse(localStorage.getItem("user")) ?? null,
  loading: false, // ✅ This line was missing

  setTheme: (value) => set({ theme: value }),
  setCredentials: (user) => set({ user }),
  signOut: () => set({ user: null }),
  setLoading: (loading) => set({ loading }),
}));

export default useStore;
