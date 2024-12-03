import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';


export default function ButtonPage() {
  return (
    <HStack space="xl" reversed={false}>

    <VStack space="md" reversed={false}>
      <Button action={"primary"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>primary-solid-md</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>primary-solid-lg</ButtonText>
      </Button>
      <Button action={"primary"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>primary-solid-xl</ButtonText>
      </Button> 
      <Button action={"primary"} variant={"solid"} size={"xl"} isDisabled={true}>
        <ButtonText>primary-disabled</ButtonText>
      </Button>   
    </VStack>

    <VStack space="md" reversed={false}>
      <Button action={"secondaryGray"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-outline-lg</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-link-lg</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-solid-lg</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>gray-solid-md</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>gray-solid-sm</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>gray-solid-sm</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>gray-solid-sm</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>gray-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>gray-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>gray-solid-lg-disabled</ButtonText>
      </Button>
    </VStack>

    <VStack space="md" reversed={false}>
      <Button action={"secondaryBrightBlue"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>BrightBlue-outline-lg</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>BrightBlue-link-lg</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>BrightBlue-solid-lg</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>BrightBlue-solid-md</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>BrightBlue-solid-sm</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>BrightBlue-solid-sm</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>BrightBlue-solid-sm</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>BrightBlue-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>BrightBlue-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>yBrightBlue-solid-lg-disabled</ButtonText>
      </Button>
    </VStack>

    <VStack space="md" reversed={false}>
      <Button action={"secondarySkyBlue"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>SkyBlue-outline-lg</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>SkyBlue-link-lg</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>SkyBlue-solid-lg</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>SkyBlue-solid-md</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>SkyBlue-solid-sm</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>SkyBlue-solid-sm</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>SkyBlue-solid-sm</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>SkyBlue-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"secondaryBrightBlue"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>SkyBlue-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"secondarySkyBlue"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>SkyBlue-solid-lg-disabled</ButtonText>
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
      <Button action={"success"} variant={"outline"} size={"lg"} isDisabled={false}>
        <ButtonText>success-outline-lg</ButtonText>
      </Button>
      <Button action={"success"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>success-link-lg</ButtonText>
      </Button>
      <Button action={"success"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>success-solid-lg</ButtonText>
      </Button>
      <Button action={"success"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>success-solid-md</ButtonText>
      </Button>
      <Button action={"success"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>success-solid-sm</ButtonText>
      </Button>
      <Button action={"success"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>success-solid-sm</ButtonText>
      </Button>
      <Button action={"success"} variant={"solid"} size={"sm"} isDisabled={false}>
        <ButtonText>success-solid-sm</ButtonText>
      </Button>
      <Button action={"success"} variant={"outline"} size={"lg"} isDisabled={true}>
        <ButtonText>success-outline-lg-disabled</ButtonText>
      </Button>
      <Button action={"success"} variant={"link"} size={"lg"} isDisabled={true}>
        <ButtonText>success-link-lg-disabled</ButtonText>
      </Button>
      <Button action={"success"} variant={"solid"} size={"lg"} isDisabled={true}>
        <ButtonText>success-solid-lg-disabled</ButtonText>
      </Button>
    </VStack>

  </HStack>
  )
}

