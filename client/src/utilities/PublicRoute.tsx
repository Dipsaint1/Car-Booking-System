import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { ReactElement, useContext } from "react";

type ChildrenType = {  children: ReactElement | ReactElement[] }

const PublicRoute = ({children}: ChildrenType) => {
  const { currentUser } = useContext(UserContext);
  
  return (
    <>
      { currentUser ? <Navigate to='/' /> : children }
    </>
  )
}

export default PublicRoute;