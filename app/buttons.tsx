import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';


export default function ButtonPage() {
  return (
    <HStack space="xl" reversed={false}>

    <VStack space="md" reversed={false}>
      <Button action={"primary"}  size={"md"} isDisabled={false}>
        <ButtonText>primary-md</ButtonText>
      </Button>
      <Button action={"primary"} size={"lg"} isDisabled={false}>
        <ButtonText>primary-lg</ButtonText>
      </Button>
      <Button action={"primary"}  size={"xl"} isDisabled={false}>
        <ButtonText>primary-xl</ButtonText>
      </Button> 
      <Button action={"primary"}  size={"xl"} isDisabled={true}>
        <ButtonText>primary-disabled</ButtonText>
      </Button>   
    </VStack>

    <VStack space="md" reversed={false}>
      <Button action={"secondaryGray"}  size={"md"} isDisabled={false}>
        <ButtonText>gray-md</ButtonText>
      </Button>
      <Button action={"secondaryGray"}  size={"lg"} isDisabled={false}>
        <ButtonText>gray-lg</ButtonText>
      </Button>
      <Button action={"secondaryGray"}  size={"xl"} isDisabled={false}>
        <ButtonText>gray-xl</ButtonText>
      </Button> 
      <Button action={"secondaryGray"}  size={"xl"} isDisabled={true}>
        <ButtonText>gray-disabled</ButtonText>
      </Button>   
    </VStack>  

    <VStack space="md" reversed={false}>
      <Button action={"secondaryColour"}  size={"md"} isDisabled={false}>
        <ButtonText>colour-md</ButtonText>
      </Button>
      <Button action={"secondaryColour"}  size={"lg"} isDisabled={false}>
        <ButtonText>colour-lg</ButtonText>
      </Button>
      <Button action={"secondaryColour"}  size={"xl"} isDisabled={false}>
        <ButtonText>colour-xl</ButtonText>
      </Button> 
      <Button action={"secondaryColour"}  size={"xl"} isDisabled={true}>
        <ButtonText>colour-disabled</ButtonText>
      </Button>   
    </VStack>  

    <VStack space="md" reversed={false}>
      <Button action={"destructive"} size={"md"} isDisabled={false} >
        <ButtonText>destructive-md</ButtonText>
      </Button>
      <Button action={"destructive"}  size={"lg"} isDisabled={false}>
        <ButtonText>destructive-lg</ButtonText>
      </Button>
      <Button action={"destructive"}  size={"xl"} isDisabled={false}>
        <ButtonText>destructive-xl</ButtonText>
      </Button> 
      <Button action={"destructive"} size={"xl"} isDisabled={true}>
        <ButtonText>destructive-disabled</ButtonText>
      </Button>   
    </VStack>  

    <VStack space="md" reversed={false}>
      <Button action={"secondaryGray"} variant={"link"} size={"md"} isDisabled={false}>
        <ButtonText>gray-link-md</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"link"} size={"lg"} isDisabled={false}>
        <ButtonText>gray-link-lg</ButtonText>
      </Button>
      <Button action={"secondaryGray"} variant={"link"} size={"xl"} isDisabled={false}>
        <ButtonText>gray-link-xl</ButtonText>
      </Button> 
      <Button action={"secondaryGray"} variant={"link"} size={"xl"} isDisabled={true}>
        <ButtonText>gray-link-disabled</ButtonText>
      </Button>   
    </VStack>  

  </HStack>
  )
}
