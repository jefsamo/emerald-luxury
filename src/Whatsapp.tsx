import { Group, Button, rem, Text } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function SocialButton() {
  return (
    <Group position="center">
      <Text size="xl" color="dimmed">
        For further enquiries
      </Text>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="http://wa.me/+2348159508357"
        leftIcon={<IconBrandWhatsapp size={rem(18)} />}
        styles={(theme) => ({
          root: {
            backgroundColor: "#25D366",
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(20),
            "&:not([data-disabled])": theme.fn.hover({
              backgroundColor: theme.fn.darken("#fff", 0.05),
              color: "#25D366",
            }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
      >
        Contact us on Whatsapp
      </Button>
    </Group>
  );
}
