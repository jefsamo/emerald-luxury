import {
  createStyles,
  Image,
  Accordion,
  Grid,
  Col,
  Container,
  Title,
} from "@mantine/core";
import image from "./assets/image.svg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  },
}));

const accordionInfo = [
  {
    question: "Is this product original?",
    answer:
      "Yes! The product is original and with our pay on delivery service you can confirm before paying.",
  },
  {
    question: "How soon will the product be delivered to me?",
    answer: "All deliveries will be completed within the first 24 hour period",
  },
  {
    question: "Will I have to pay for delivery?",
    answer: "No! All deliveries are free.",
  },
  {
    question: "Can I order immediately?",
    answer: "Yes!, you can order immediately ",
  },
];

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export default function FAQ() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              {accordionInfo.map((accordion, i) => {
                return (
                  <Accordion.Item
                    className={classes.item}
                    value={`${accordion.answer}`}
                    key={i}
                  >
                    <Accordion.Control>
                      {accordion.question}
                      <Accordion.Panel>{accordion.answer}</Accordion.Panel>
                    </Accordion.Control>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
