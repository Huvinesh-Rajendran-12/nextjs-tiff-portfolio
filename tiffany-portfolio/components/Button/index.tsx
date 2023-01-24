import React from 'react'
import { Button, Text } from '@chakra-ui/react'

type PrimaryButtonType =
{
    variant?: "link" | "solid";
    bg?: string;
    text?: string;
    weight?: number;
    font?: string;
    color?: string;
    border?: number;
    borderColor?: string;
}

export default function PrimaryButton({variant="solid",text="", weight=200, font="primary", color="secondary", bg="", border=0, borderColor="" }: PrimaryButtonType) {
  return <button className='rounded-md'><div >{text}</div></button>;
}
