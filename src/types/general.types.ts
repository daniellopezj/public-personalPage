import { IconDefinition } from "@fortawesome/free-regular-svg-icons"

export type Skill = {
  icon: IconDefinition
  title: string
  description: string
  titleLanguage: string
  itemsLanguage: string
  titleTools: string
  itemsTools: string[]
}

export type Testimony = {
  id: number
  avatar: string
  description: string
  name: string
  profession: string
}

export type validationMessage = {
  key: string,
  message: string
}
