
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Badge, BadgeIcon, BadgeText } from '@/components/ui/badge';
import { GlobeIcon } from '@/components/ui/icon';


export default function BadgePage() {
  return (
    <HStack space="xl" reversed={false}>
      <VStack space="md" reversed={false}>
        <Badge size="md" variant="outline" action="muted">
          <BadgeText>muted</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="error">
          <BadgeText>error</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="warning">
          <BadgeText>warning</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="success">
          <BadgeText>success</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="info">
          <BadgeText>info</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="primary">
          <BadgeText>primary</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="yellow">
          <BadgeText>yellow</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="brightBlue">
          <BadgeText>brightBlue</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="skyBlue">
          <BadgeText>skyBlue</BadgeText>
          <BadgeIcon as={GlobeIcon} className="ml-2" />
        </Badge>

        <Badge size="md" variant="outline" action="skyBlue">
          <BadgeText>skyBlue</BadgeText>         
        </Badge>
      </VStack>
    </HStack>
  )
}

