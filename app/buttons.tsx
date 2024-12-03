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
      <Button action={"secondaryGray"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>gray-solid-md</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-solid-lg</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>gray-solid-xl</ButtonText>
      </Button> 
      <Button action={"secondaryGray"} variant={"solid"} size={"xl"} isDisabled={true}>
        <ButtonText>gray-disabled</ButtonText>
      </Button>   
    </VStack>  

    <VStack space="md" reversed={false}>
      <Button action={"secondaryColour"} variant={"solid"} size={"md"} isDisabled={false}>
        <ButtonText>colour-solid-md</ButtonText>
      </Button>
      <Button action={"secondaryColour"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>colour-solid-lg</ButtonText>
      </Button>
      <Button action={"secondaryColour"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>colour-solid-xl</ButtonText>
      </Button> 
      <Button action={"secondaryColour"} variant={"solid"} size={"xl"} isDisabled={true}>
        <ButtonText>colour-disabled</ButtonText>
      </Button>   
    </VStack>  

    <VStack space="md" reversed={false}>
      <Button action={"destructive"} variant={"solid"} size={"md"} isDisabled={false} >
        <ButtonText>destructive-solid-md</ButtonText>
      </Button>
      <Button action={"destructive"} variant={"solid"} size={"lg"} isDisabled={false}>
        <ButtonText>destructive-solid-lg</ButtonText>
      </Button>
      <Button action={"destructive"} variant={"solid"} size={"xl"} isDisabled={false}>
        <ButtonText>destructive-solid-xl</ButtonText>
      </Button> 
      <Button action={"destructive"} variant={"solid"} size={"xl"} isDisabled={true}>
        <ButtonText>destructive-disabled</ButtonText>
      </Button>   
    </VStack>  

  </HStack>
  )
}

