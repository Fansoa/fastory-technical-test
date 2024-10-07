import { ReactNode, useEffect, useState } from "react";
import { API_BASE_URL } from "../../configs/constants";
import { Navigate } from "react-router-dom";

type Props = {
    children: ReactNode
}

type StatusType = "idle" | "pending" | "success" | "failure" 

const RouteGuard = ({ children }: Props) => {

    const [status, setStatus] = useState<StatusType>("idle")
    
    useEffect(() => {
      setStatus("pending")
      const checkAuth = async () => {
        await fetch(
            `${API_BASE_URL}check-auth`, 
            { 
                method: "GET",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
            }
        )
        .then(res => res.json())
        .then(res => {
          if (res.ok) {
            setStatus("success")
          } else {
            setStatus("failure")
          }
        })
      }
  
      checkAuth()
    }, [])
  
    if (status === "success") return children 
    if (status === "failure") return <Navigate to="login"/>
}

  export default RouteGuard
