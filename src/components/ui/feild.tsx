import { UseFormRegister } from "react-hook-form";
import { Character } from "@/model/character/interfaces";

interface IProps {
  type: string,
  fieldName: keyof Character,
  placeholder: string,
  register: UseFormRegister<Character>
}

export default function Field({ type, fieldName, placeholder, register }: IProps) {
  return (
    <div className="mb-5">
      <input type={type}
        className="bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5"
        placeholder={placeholder}
        {...register(fieldName,
          {
            required: `${fieldName} is reqired`

          }
        )}
      />
    </div>
  )
}