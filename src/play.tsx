import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import bg from "./bg.svg";
import { useState } from "react";
import axios from "axios";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: rem(4),
      border: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg,
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export default function GetInTouch() {
  const { classes } = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const Email = window.Email;
  const handleOrder = (e) => {
    e.preventDefault();
    console.log(name, email, streetAddress, city, province);
    const config = {
      Username: "shopman@yopmail.com",
      Password: "0974E68C84B5F71E82B8CB254C34C753234B",
      Host: "smtp.elasticemail.com",
      Port: 2525,
      To: `shopman@yopmail.com`,
      From: `${email}`,
      Subject: `Order Confirmation!`,
      Body: `Street Address: ${streetAddress}\n City: ${city} `,
    };

    if (Email) {
      Email?.Send(config).then(() => alert("Order confirmed!"));
    }
  };

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList variant="white" />
        </div>

        <form
          className={classes.form}
          // onSubmit={(event) => event.preventDefault()}
          // onSubmit={handleOrder}
          // action="https://formsubmit.co/el/powuhe"
          method="POST"
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Fill your delivery details
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                required
                style={{
                  textAlign: "left",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                label="Email"
                placeholder="Email"
                name="email"
                required
                style={{
                  textAlign: "left",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextInput
                label="Street Address"
                placeholder="Street Address"
                name="street"
                required
                style={{
                  textAlign: "left",
                }}
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <TextInput
                label="City"
                placeholder="City"
                name="city"
                required
                style={{
                  textAlign: "left",
                }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <TextInput
                label="Province"
                placeholder="Province"
                name="province"
                required
                style={{
                  textAlign: "left",
                }}
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
            </SimpleGrid>

            <Group position="right" mt="md">
              <Button
                type="submit"
                className={classes.control}
                onClick={handleOrder}
              >
                Order Now
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}