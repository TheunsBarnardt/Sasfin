import React from 'react'; import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel, Checkbox } from '@/components/ui/checkbox';
import { CheckIcon } from '@/components/ui/icon';



export default function CheckboxPage() {
  const [values, setValues] = React.useState(["Eng"])
  return (
    <HStack space="xl" reversed={false}>
      <VStack space="md" reversed={false}>
        <CheckboxGroup
          value={values}
          onChange={(keys) => {
            setValues(keys)
          }}
        >
          <Checkbox value="Eng">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Framer</CheckboxLabel>
          </Checkbox>
          <Checkbox value="invison">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Invision Studio</CheckboxLabel>
          </Checkbox>
          <Checkbox value="adobe">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Adobe XD</CheckboxLabel>
          </Checkbox>
        </CheckboxGroup>
      </VStack>
    </HStack>
  )
}

