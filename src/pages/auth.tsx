import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "../assets/css/tailwind.css";
const AuthPage = () => {
  return (
    <>
      <header className="container mx-auto">
        <div className="flex flex-row items-center justify-between pt-8 pb-8">
          <span>Логотип</span>
          <a href="#">Перейти на сайт</a>
        </div>
      </header>
      <main className="container">
        <div className="w-full max-w-xs">
          <h1 className="text-base mb-4 font-bold">Введите имя и пароль</h1>
          <div className="mb-4">
            <Input type="email" placeholder="E-mail" />
          </div>
          <div className="mb-4">
            <Input type="password" placeholder="Пароль" />
          </div>
          <div className="mb-4">
            <Button>Войти</Button>
          </div>
        </div>
      </main>
    </>
  );
};

export { AuthPage };
