import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import videoJoin from "../../assets/videos/video-join.mp4";
import imageJoin from "../../assets/images/join-poster.jpg";

type Inputs = {
  fio: string;
  category: string;
  phone: string;
};

const Join = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [sent, setSent] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setSent(true);
  };
  return (
    <div className="join" id="join">
      <div className="join__container">
        <div className="join__content">
          <div className="join__title">
            <div className="heading-1">Присоединяйтесь</div>
          </div>
          <div className="join__text">
            Укажите ФИО, категорию годности, телефон и время, удобное для звонка
          </div>
          <form className="join__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="join__form-row">
              <input
                type="text"
                placeholder="Ваше имя"
                {...register("fio", { required: true })}
              />
            </div>
            <div className="join__form-row">
              <input
                type="text"
                placeholder="Категория, как в военном билете (А, Б)"
                {...register("category", { required: true })}
              />
            </div>
            <div className="join__form-row">
              <input
                type="text"
                placeholder="Телефон"
                {...register("phone", { required: true })}
              />
            </div>
            <input className="btn" type="submit" value="Записаться на службу" />
          </form>
        </div>
        <div className="join__image">
          <video src={videoJoin} poster={imageJoin} autoPlay muted loop></video>
        </div>
      </div>
    </div>
  );
};

export { Join };
