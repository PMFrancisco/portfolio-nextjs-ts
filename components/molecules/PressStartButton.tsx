import { Text } from "../atoms/Text";
import { PressStartBox } from "../atoms/PressStartBox";

export const PressStartButton = () => {
  return (
    <PressStartBox>
      <Text variant="SRegular" className="text-inherit" >PRESS START</Text>
    </PressStartBox>
  );
};
