import { useContext } from "react";
import { AuthContext } from "../context/ContextCreateComponent";

const useAuthH = () => {
   return useContext(AuthContext)
};

export default useAuthH;