import Swal from "sweetalert2";
import { supabase } from "../supabase/supabase.config";

export const AddUser = async (p) => {
  const { data, error } = await supabase
    .from("users")
    .insert(p)
    .select()
    .maybeSingle();
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `An error has occurred: ${error.message}`,
    });
  }

  if (data) return data;
};
