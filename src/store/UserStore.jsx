import { create } from "zustand";
export const useUserStore = create((get, set) => ({
  adminRegister: async (p) => {
    await supabase.auth.signUp({
      email: p.email,
      password: p.password,
    });
  },
}));
