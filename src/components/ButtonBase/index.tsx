import { Button, ButtonProps as ButtonPropsDefault } from '@chakra-ui/react'

interface ButtonProps extends ButtonPropsDefault {
  text: string
}

export function ButtonBase({ text, ...prop }: ButtonProps) {
  return (
    <div>
      <Button variant="solid" fontSize="md" p="0 32px" {...prop}>
        {text}
      </Button>
    </div>
  )
}
