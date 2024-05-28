import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



import videoJoin from "../../assets/videos/video-join.mp4";
import imageJoin from "../../assets/images/join-poster.jpg";

type Inputs = {
  fio: string;
  category: string;
  phone: string;
};

const Schema = yup.object().shape({
  fio: yup.string().required(),
  category: yup.string().required(),
  phone: yup.string().required(),
});

const Join = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(Schema),
  });

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
            <Controller
                name="fio"
                control={control}
                defaultValue=""
                render = {({field})=> <input {...field} />}  

              />
              {errors.fio && <p>{errors.fio.message}</p>}
              
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
