import { Box, IInputProps, Input } from "native-base";

export function InputBase({ ...rest }: IInputProps) {
  return (
    <Box px={10} mt={5}>
      <Input
        bg="purple.100"
        px={4}
        borderRadius={0}
        fontSize="md"
        color="white"
        mb={1}
        _focus={{
          bg: "purple.50",
          borderWidth: 1,
          borderColor: "purple.700",
        }}
        {...rest}
      />
    </Box>
  );
}
