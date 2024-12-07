import { useForm, SubmitHandler } from "react-hook-form";

import { Heading } from "lucide-react";
import { Button } from "./ui/button";
import Field from "./ui/feild";
import { Character } from "@/model/character/interfaces";

export default function EditCharacterForm({ isHidden }: { isHidden: boolean }) {
  const { register, reset, handleSubmit } = useForm<Character>();

  const onSubmit: SubmitHandler<Character> = (data) => {

  }

  return (
    <div className="flex relative">
      <form
        className="max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading title='Обновить' />
        <Field
          type={'text'}
          placeholder={'Имя'}
          fieldName={'name'}
          register={register}
        />
        <Field
          type={'text'}
          placeholder={'Статус'}
          fieldName={'status'}
          register={register}
        />
        <Field
          type={'text'}
          placeholder={'Трасса'}
          fieldName={'track'}
          register={register}
        />
        <Field
          type={'text'}
          placeholder={'Др.Город'}
          fieldName={'otherCity'}
          register={register}
        />
        <div className="flex justify-between">
          <Button
            type='submit'
            className="w-5/12 bg-blue-700 hover:bg-blue-800"
          >
            Обновить
          </Button>
          <Button
            className="w-5/12 bg-red-400 hover:bg-red-500"
            onClick={() => isHidden(true)}
          >
            Отменить
          </Button>
        </div>

      </form>
    </div>
  )
}