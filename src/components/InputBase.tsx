import { Box, IInputProps, Input, FormControl } from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function InputBase({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;
  return (
    <Box mt={5}>
      <FormControl isInvalid={invalid} mb={1}>
        <Input
          bg="purple.100"
          px={4}
          borderRadius={0}
          fontSize="md"
          color="gray"
          isInvalid={invalid}
          _invalid={{
            borderWidth: 1,
            borderColor: "red.500",
          }}
          _focus={{
            bg: "purple.50",
            borderWidth: 1,
            borderColor: "purple.700",
          }}
          {...rest}
        />
        <FormControl.ErrorMessage _text={{color: "red.500"}}>{errorMessage}</FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
}
