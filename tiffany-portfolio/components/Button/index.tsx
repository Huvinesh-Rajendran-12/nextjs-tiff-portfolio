import React from 'react'
import { Button, Text } from '@chakra-ui/react'

type PrimaryButtonType =
{
    variant?: "link" | "solid";
    text: string
    className: string
}

export default function PrimaryButton({variant="solid", className, text }: PrimaryButtonType) {
  return <button className={className}><div >{text}</div></button>;
}
