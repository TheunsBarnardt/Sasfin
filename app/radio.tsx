import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Input, InputField } from '@/components/ui/input';
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';


export default function RadioPage() {
  return (
    <HStack space="xl" reversed={false}>
      <VStack space="md" reversed={false}>
        <RadioGroup>
          <Radio value="change1" size="md" isInvalid={false} isDisabled={false}>
            <RadioIndicator>
              <RadioIcon as={CircleIcon}  stroke='0'/>
            </RadioIndicator>
            <RadioLabel>md-Label-1</RadioLabel>
          </Radio>

          <Radio value="change2" size="md" isInvalid={false} isDisabled={false}>
            <RadioIndicator>
              <RadioIcon as={CircleIcon} stroke='0'  />
            </RadioIndicator>
            <RadioLabel>md-Label-2</RadioLabel>
          </Radio>

          <Radio value="change3" size="md" isInvalid={true} isDisabled={false}>
            <RadioIndicator>
              <RadioIcon as={CircleIcon} stroke='0' />
            </RadioIndicator>
            <RadioLabel>md-invalid</RadioLabel>
          </Radio>

          <Radio value="change4" size="md" isInvalid={false} isDisabled={true}>
            <RadioIndicator>
              <RadioIcon as={CircleIcon} stroke='0' />
            </RadioIndicator>
            <RadioLabel>md-disabled</RadioLabel>
          </Radio>

          <Radio value="change1" size="md" isInvalid={false} isDisabled={true} >
            <RadioIndicator>
              <RadioIcon as={CircleIcon} stroke='0' />
            </RadioIndicator>
            <RadioLabel>md-disabled</RadioLabel>
          </Radio>

          
          <Radio value="change6" size="md" isInvalid={true} isDisabled={true}>
            <RadioIndicator>
              <RadioIcon as={CircleIcon}  stroke='0'/>
            </RadioIndicator>
            <RadioLabel>md-invalid-disabled</RadioLabel>
          </Radio>
        </RadioGroup>
      </VStack>
    </HStack>
  )
}

