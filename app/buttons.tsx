import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';


export default function ButtonPage() {
  return (
    <HStack space="xl" reversed={false}>
    <VStack space="md" reversed={false}>
      <Button action={"default"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>brand-outline-lg</ButtonText>
      </Button>
      <Button action={"default"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>brand-link-lg</ButtonText>
      </Button>
      <Button action={"default"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>brand-solid-lg</ButtonText>
      </Button>
      <Button action={"default"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>brand-solid-md</ButtonText>
      </Button>
      <Button action={"default"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>brand-solid-sm</ButtonText>
      </Button>
      <Button action={"default"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>brand-solid-sm</ButtonText>
      </Button>
      <Button action={"default"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>brand-solid-sm</ButtonText>
      </Button>
      <Button action={"default"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>brand-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"default"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>brand-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"default"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>brand-solid-lg-disabled</ButtonText>
      </Button>
    </VStack>
    <VStack space="md" reversed={false}>

      <Button action={"primary"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-outline-lg</ButtonText>
      </Button>
      <Button action={"primary"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-link-lg</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-solid-lg</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>gray-solid-md</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>gray-solid-sm</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>gray-solid-sm</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>gray-solid-sm</ButtonText>
      </Button>
      <Button action={"primary"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>gray-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"primary"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>gray-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>gray-solid-lg-disabled</ButtonText>
      </Button>
    </VStack>

    <VStack space="md" reversed={false}>

      <Button action={"negative"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>negative-outline-lg</ButtonText>
      </Button>
      <Button action={"negative"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>negative-link-lg</ButtonText>
      </Button>
      <Button action={"negative"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>negative-solid-lg</ButtonText>
      </Button>
      <Button action={"negative"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>negative-solid-md</ButtonText>
      </Button>
      <Button action={"negative"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>negative-solid-sm</ButtonText>
      </Button>
      <Button action={"negative"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>negative-solid-sm</ButtonText>
      </Button>
      <Button action={"negative"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>negative-solid-sm</ButtonText>
      </Button>
      <Button action={"negative"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>negative-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"negative"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>negative-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"negative"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>negative-solid-lg-disabled</ButtonText>
      </Button>
    </VStack>
    <VStack space="md" reversed={false}>
      <Button action={"positive"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>positive-outline-lg</ButtonText>
      </Button>
      <Button action={"positive"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>positive-link-lg</ButtonText>
      </Button>
      <Button action={"positive"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>positive-solid-lg</ButtonText>
      </Button>
      <Button action={"positive"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>positive-solid-md</ButtonText>
      </Button>
      <Button action={"positive"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>positive-solid-sm</ButtonText>
      </Button>
      <Button action={"positive"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>positive-solid-sm</ButtonText>
      </Button>
      <Button action={"positive"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>positive-solid-sm</ButtonText>
      </Button>
      <Button action={"positive"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>positive-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"positive"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>positive-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"positive"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>positive-solid-lg-disabled</ButtonText>
      </Button>
    </VStack>

  </HStack>
  )
}

