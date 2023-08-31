import { useNavigate } from "react-router-dom";
import { Card, Text, Badge, Button, Group, Center } from "@mantine/core";
import "./App.css";
import Slider from "./Carousel";
import { Image } from "@mantine/core";
import pod from "./assets/pod.png";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    // navigate
    navigate("/order");
  }
  return (
    <>
      <Center>
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ maxWidth: "500px" }}
        >
          <Card.Section>
            <Slider />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>BENYAR BY-5177 Water Resistant Watch</Text>
            <Badge color="green" variant="light">
              On Sale
            </Badge>
          </Group>
          <Group mb="xs">
            <Text weight={800}>RWF 80,000</Text>
            <Text weight={400} size="xs" td="line-through">
              RWF 100,000
            </Text>
          </Group>

          <Text size="sm" color="dimmed">
            The BENYAR 50M Water Resistant is your best option for all seasons
            (in the rain and in the Sun). It’s 50m water resistant watch makes
            it perfect to walk in the rain or take a deep shower. It’s perfect
            for all kinds of everyday water impacts with night-vision handle
            lightening. This watch has a 41mm dial which makes it the perfect
            size and weight for your hands to exude class and optimal
            performance. Made with pure and quality Stainless Steel to have the
            perfect feel on your skin without any skin irritation. Most
            importantly it comes with an ANTI-THEFT buckle that makes it
            difficult for a snatch and grab during your walks.
          </Text>

          <Group position="center">
            <Button
              onClick={handleClick}
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
            >
              Buy now
            </Button>
          </Group>
        </Card>
      </Center>
      <Center mt={20}>
        <Group position="center">
          <Image src={pod} width={300} height={180} />
        </Group>
      </Center>
    </>
  );
}

export default Home;
