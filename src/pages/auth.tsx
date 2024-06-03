import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../assets/css/tailwind.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {login} from "../store/authSlice";
const AuthPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>()
  const {isAuthentificated, user} = useSelector((state: RootState) => state.auth);
  const handleLogin = () => {
    dispatch(login({ username, password }));
  };
  return (
    <>
      <header className="container mx-auto">
        <div className="flex flex-row items-center justify-between pt-8 pb-8">
          <span>Логотип</span>
          <a href="#">Перейти на сайт</a>
        </div>
      </header>

      {isAuthentificated ? (
        <>
        <div>
            <span>Вы авторизованы как {user?.username}</span>
          </div>
          </>
      ): (
        
        <main className="container">
          
          <div className="w-full max-w-xs">
            <h1 className="text-base mb-4 font-bold">Введите имя и пароль</h1>
            <div className="mb-4">
              <Input type="text" placeholder="Логин" onChange={(e) => {setUsername(e.target.value)}} />
            </div>
            <div className="mb-4">
              <Input type="password" placeholder="Пароль" onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div className="mb-4">
              <Button onClick={handleLogin}>Войти</Button>
            </div>
          </div>
        </main>
      )}
     
    </>
  );
};

export { AuthPage };
