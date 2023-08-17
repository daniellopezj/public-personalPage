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
  idTestimony: number
  avatar: string
  description: string
  name: string
  profession: string
}

export type Company = {
  logo: string
  link: string
  title?: string
  description?: string
}

export type validationMessage = {
  key: string,
  message: string
}
