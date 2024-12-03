import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Input, InputField } from '@/components/ui/input';


export default function InputPage() {
  return (
    <HStack space="xl" reversed={false}>
      <VStack space="md" reversed={false}>
        <Input
          size="md"
          
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField placeholder="Enter Text here..." />
        </Input>
      </VStack>
    </HStack>
  )
}

