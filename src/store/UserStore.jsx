import { create } from "zustand";
import { AddUser } from "../supabase/CrudUser";
import { supabase } from "../supabase/supabase.config";

export const useUserStore = create((get, set) => ({
  adminRegister: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.email,
      password: p.password,
    });
    if (error) return;
    console.log("data del admin register auth", data);
    const dataUser = await AddUser({ id_auth: data.user.id, register_date: new Date(), rol: 0 });
    console.log('data del user added', dataUser);
    return dataUser;
  },
}));
