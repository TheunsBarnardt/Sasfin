import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel, Checkbox } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';



export default function CheckboxPage() {
  return (
    <HStack space="xl" reversed={false}>
      <VStack space="md" reversed={false}>
      
          <Checkbox value='val1' size="md" isInvalid={false} isDisabled={false}>
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Label</CheckboxLabel>
          </Checkbox>

      </VStack>
    </HStack>
  )
}

