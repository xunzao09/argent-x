import { AccountDeprecatedModal } from "@argent-x/extension/src/ui/features/accountTokens/warning/AccountDeprecatedModal"
import { AccountOwnerWarningScreen } from "@argent-x/extension/src/ui/features/accountTokens/warning/AccountOwnerWarningScreen"
import { BeforeYouContinueScreen } from "@argent-x/extension/src/ui/features/settings/securityAndPrivacy/BeforeYouContinueScreen"

import { Flex } from "@chakra-ui/react"
import { decorators } from "../../decorators/routerDecorators"

export default {
  component: Flex,
  decorators,
  parameters: {
    layout: "fullscreen",
  },
}

export const AccountDeprecated = {
  render: () => <AccountDeprecatedModal />,
}

export const BeforeYouContinue = {
  render: () => <BeforeYouContinueScreen />,
}

export const AccountOwnerWarning = {
  render: () => <AccountOwnerWarningScreen />,
}
