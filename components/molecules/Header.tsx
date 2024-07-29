import { Text } from "../atoms/Text"

export const Header = () => {
  return (
    <header className="bg-black bg-opacity-50">
        <Text as="h1" variant="MSemiBold">Francisco Pérez</Text>
        <Text as="h2" variant="SSemiBold">Bienvenido a mi portfolio personal</Text>
    </header>
  )
}
