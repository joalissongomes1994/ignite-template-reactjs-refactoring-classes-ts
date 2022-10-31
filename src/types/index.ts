export type TFood = {
  id: number,
  image: string,
  name: string,
  available: boolean,
  description: string,
  price: string
}

export type TFormData = Omit<TFood, "id" | "available">

type TModal = {
  isOpen: boolean,
  setIsOpen: () => void,
}

export interface TModalAddFoodProps extends TModal  {
  handleAddFood: (data: TFormData) => void
}

export interface TModalEditFoodProps extends TModal  {
  handleUpdateFood: (data: TFormData) => void
  editingFood: TFood
}