import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { EditIcon } from '@/components/ui/icon';


export default function ButtonPage() {
  return (
    <HStack space="xl" reversed={false}>

      <VStack space="md" reversed={false}>
        <Button action={"primary"} size={"md"} isDisabled={false}>
          <ButtonText>primary-md</ButtonText>
        </Button>
        <Button action={"primary"} size={"lg"} isDisabled={false}>
          <ButtonText>primary-lg</ButtonText>
        </Button>
        <Button action={"primary"} size={"xl"} isDisabled={false}>
          <ButtonText>primary-xl</ButtonText>
        </Button>
        <Button action={"primary"} size={"xl"} isDisabled={true}>
          <ButtonText>primary-disabled</ButtonText>
        </Button>
        
        <Button size="lg" action={"primary"}>
          <ButtonIcon as={EditIcon} />
        </Button>
        <Button size="lg" action={"primary"} isDisabled={true}>
          <ButtonIcon as={EditIcon} />
        </Button>

      </VStack>

      <VStack space="md" reversed={false}>
        <Button action={"secondaryGray"} size={"md"} isDisabled={false}>
          <ButtonText>gray-md</ButtonText>
        </Button>
        <Button action={"secondaryGray"} size={"lg"} isDisabled={false}>
          <ButtonText>gray-lg</ButtonText>
        </Button>
        <Button action={"secondaryGray"} size={"xl"} isDisabled={false}>
          <ButtonText>gray-xl</ButtonText>
        </Button>
        <Button action={"secondaryGray"} size={"xl"} isDisabled={true}>
          <ButtonText>gray-disabled</ButtonText>
        </Button>

        <Button size="lg" action={"secondaryGray"}>
          <ButtonIcon as={EditIcon} />
        </Button>
        <Button size="lg" action={"secondaryGray"} isDisabled={true}>
          <ButtonIcon as={EditIcon} />
        </Button>
      </VStack>

      <VStack space="md" reversed={false}>
        <Button action={"secondaryColour"} size={"md"} isDisabled={false}>
          <ButtonText>colour-md</ButtonText>
        </Button>
        <Button action={"secondaryColour"} size={"lg"} isDisabled={false}>
          <ButtonText>colour-lg</ButtonText>
        </Button>
        <Button action={"secondaryColour"} size={"xl"} isDisabled={false}>
          <ButtonText>colour-xl</ButtonText>
        </Button>
        <Button action={"secondaryColour"} size={"xl"} isDisabled={true}>
          <ButtonText>colour-disabled</ButtonText>
        </Button>

        <Button size="lg" action={"secondaryColour"}>
          <ButtonIcon as={EditIcon} />
        </Button>
        <Button size="lg" action={"secondaryColour"} isDisabled={true}>
          <ButtonIcon as={EditIcon} />
        </Button>
      </VStack>

      <VStack space="md" reversed={false}>
        <Button action={"destructive"} size={"md"} isDisabled={false} >
          <ButtonText>destructive-md</ButtonText>
        </Button>
        <Button action={"destructive"} size={"lg"} isDisabled={false}>
          <ButtonText>destructive-lg</ButtonText>
        </Button>
        <Button action={"destructive"} size={"xl"} isDisabled={false}>
          <ButtonText>destructive-xl</ButtonText>
        </Button>
        <Button action={"destructive"} size={"xl"} isDisabled={true}>
          <ButtonText>destructive-disabled</ButtonText>
        </Button>

        <Button size="lg" action={"destructive"}>
          <ButtonIcon as={EditIcon} />
        </Button>
        <Button size="lg" action={"destructive"} isDisabled={true}>
          <ButtonIcon as={EditIcon} />
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

        <Button size="lg" action={"secondaryGray"} variant={"link"}>
          <ButtonIcon as={EditIcon} />
        </Button>
        <Button size="lg" action={"secondaryGray"} variant={"link"} isDisabled={true}>
          <ButtonIcon as={EditIcon} />
        </Button>
      </VStack>

      <VStack space="md" reversed={false}>
        <Button action={"secondaryColour"} variant={"link"} size={"md"} isDisabled={false}>
          <ButtonText>gray-link-md</ButtonText>
        </Button>
        <Button action={"secondaryColour"} variant={"link"} size={"lg"} isDisabled={false}>
          <ButtonText>gray-link-lg</ButtonText>
        </Button>
        <Button action={"secondaryColour"} variant={"link"} size={"xl"} isDisabled={false}>
          <ButtonText>gray-link-xl</ButtonText>
        </Button>
        <Button action={"secondaryColour"} variant={"link"} size={"xl"} isDisabled={true}>
          <ButtonText>gray-link-disabled</ButtonText>
        </Button>

        <Button size="lg" action={"secondaryColour"} variant={"link"}>
          <ButtonIcon as={EditIcon} />
        </Button>
        <Button size="lg" action={"secondaryColour"} variant={"link"} isDisabled={true}>
          <ButtonIcon as={EditIcon} />
        </Button>
      </VStack>

    </HStack>
  )
}

