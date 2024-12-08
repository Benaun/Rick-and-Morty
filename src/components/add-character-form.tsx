import { useAppDispatch } from "@/store/store"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import Field from "./ui/feild"
import { Heading } from "./ui/heading"
import { Character } from "@/model/character/interfaces"
import { addCharacter } from "@/model/character/characte.slice"


export default function CharacterForm() {
  const { register, reset, handleSubmit } = useForm<Character>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = (data: Character) => {
    const newCharacter: Character = {
      id: Number(Date.now()),
      name: data.name,
      status: data.status,
      gender: data.gender,
      image: data.image,
      inFavorite: false,
    }
    dispatch(addCharacter(newCharacter))
    reset()
    navigate('/products')
    console.log(newCharacter)
  }

  const onCancel = () => {
    reset()
    navigate('/products')
  }

  return (
    <div className="flex relative">
      <form
        className="max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading title='Добавить персонажа' />
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
          placeholder={'Пол'}
          fieldName={'gender'}
          register={register}
        />
        <Field
          type={'text'}
          placeholder={'Изображение'}
          fieldName={'image'}
          register={register}
        />
        <div className="flex justify-between">
          <Button
            type='submit'
            className="w-5/12 bg-blue-700 hover:bg-blue-800"
          >
            Добавить
          </Button>
          <Button
            className="w-5/12 bg-red-400 hover:bg-red-500"
            onClick={onCancel}
          >
            Отменить
          </Button>
        </div>

      </form>
    </div>
  )
}