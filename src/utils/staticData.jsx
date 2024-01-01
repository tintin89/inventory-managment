import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "My profile",
    icon: <v.iconoUser/>,
    type: "myprofile",
  },
  {
    text: "Settings",
    icon: <v.iconoSettings/>,
    type: "settings",
  },
  {
    text: "Logout",
    icon: <v.iconoCerrarSesion/>,
    type: "logout",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Kardex",
    icon: <v.iconocategorias />,
    to: "/kardex",
  },
  {
    label: "Reports",
    icon: <v.iconoreportes />,
    to: "/reports",
  },
 
];
export const SecondarylinksArray = [
  {
    label: "Set up",
    icon: <AiOutlineSetting />,
    to: "/setup",
  },

];
//temas
export const DataThemes = [
  {
    icono: "🌞",
    descripcion: "light",
   
  },
  {
    icono: "🌚",
    descripcion: "dark",
    
  },
];

//data settings
export const DataSettingModules =[
  {
    title:"Products",
    subtitle:"add your products",
    icono:"https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link:"/setup/products",
   
  },
  {
    title:"Staff",
    subtitle:"have control of your staff",
    icono:"https://i.ibb.co/5vgZ0fX/hombre.png",
    link:"/setup/staff",
   
  },

  {
    title:"Your Company",
    subtitle:"set up your basics",
    icono:"https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link:"/setup/company",
    
  },
  {
    title:"Products Category",
    subtitle:"add category to your products",
    icono:"https://i.ibb.co/VYbMRLZ/categoria.png",
    link:"/setup/category",
    
  },
  {
    title:"Products Brands",
    subtitle:"manage your brands",
    icono:"https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link:"/setup/brand",
   
  },

]
//user type
export const DataUserType = [
  {
    description: "employee",
    icon: "🪖",
  },
  {
    description: "manager",
    icon: "👑",
  },
];
//docType
export const DocDataType = [
  {
    description: "ID",
    icon: "🪖",
  },
  {
    description: "Driver License",
    icon: "👑",
  },
  {
    description: "Others",
    icon: "👑",
  },
];