/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  Paper,
  Text,
  TextInput,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
  Select,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import bg from "./bg.svg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

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

export default function PlaceOrder() {
  const { classes } = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [numberOfProducts, setNumberOfProducts] = useState<number>(0);
  const [value, setValue] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const { VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_ID } = import.meta.env;
  console.log(VITE_SERVICE_ID, VITE_ID, VITE_TEMPLATE_ID);

  const form = useRef<HTMLFormElement | null>(null);

  const notify = (message: string, icon: string) =>
    toast(message, {
      icon,
    });

  const send = async () => {
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        form.current!,
        VITE_ID
      );
      console.log(numberOfProducts, value);
      setIsLoading(false);
      notify("Order placed successfully", "✅");
      setName("");
      setEmail("");
      setStreetAddress("");
      setPhoneNumber("");
      setCity("");
      setProvince("");
      setNumberOfProducts(0);
    } catch (error) {
      console.log(error);
      notify("There was a problem placing your order", "❌");
      setIsLoading(false);
      setName("");
      setEmail("");
      setStreetAddress("");
      setPhoneNumber("");
      setCity("");
      setProvince("");
      setNumberOfProducts(0);
    }
  };
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (
      !email &&
      !name &&
      !streetAddress &&
      !phoneNumber &&
      !city &&
      !province &&
      !numberOfProducts
    )
      return;
    send();
  };

  return (
    <Paper shadow="md" radius="lg">
      <Toaster />
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList variant="white" />
        </div>

        <form className={classes.form} ref={form} onSubmit={sendEmail}>
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
                name="from_email"
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
                name="street_address"
                required
                style={{
                  textAlign: "left",
                }}
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <TextInput
                label="Phone Number"
                placeholder="Phone Number"
                name="phone_number"
                required
                style={{
                  textAlign: "left",
                }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                label="Region"
                placeholder="Region"
                name="province"
                required
                style={{
                  textAlign: "left",
                }}
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
              <TextInput
                label="Number of Products"
                placeholder="Number of Products"
                name="numberOfProducts"
                required
                style={{
                  textAlign: "left",
                }}
                max={120}
                min={0}
                value={numberOfProducts}
                onChange={(e) => setNumberOfProducts(+e.target.value)}
              />
              <Select
                label="Day of delivery"
                placeholder="Pick one"
                required
                name="deliveryDate"
                style={{
                  textAlign: "left",
                }}
                data={[
                  { value: "today", label: "Today" },
                  { value: "tomorrow", label: "Tomorrow" },
                  { value: "day after tomorrow", label: "Day after tomorrow" },
                ]}
                value={value}
                onChange={setValue}
              />
            </SimpleGrid>

            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                {isLoading ? "Sending..." : "Order Now"}
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
