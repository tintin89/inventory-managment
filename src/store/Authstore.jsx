import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((get, set) => ({
  signInWithEmail: async (p) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: p.email,
      password: p.password,
    });
    if (error) {
      console.log("error", error);
      return null;
    }
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("error", error);
      throw new Error("logout error", error);
    }
  },
}));
