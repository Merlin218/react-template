import LoginPanel from "@/components/LoginPanel";
import { FC } from "react";
import './index.less'

const Login:FC = ()=>{
  return (
    <div className="login__page">
      <LoginPanel></LoginPanel>
    </div>
  )
}

export default Login;
