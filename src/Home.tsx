import { useNavigate } from "react-router-dom";
import SS from "./assets/watch.jpeg";
import { Card, Image, Text, Badge, Button, Group, Center } from "@mantine/core";
import "./App.css";
import Slider from "./Carousel";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
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
            {/* <Image
              src={SS}
              // height={180}
              alt="Norway"
              style={{ width: "100%", height: "auto" }}
            /> */}
            <Slider />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>SKEMI 1868 Water Resistant Watch</Text>
            <Badge color="green" variant="light">
              On Sale
            </Badge>
          </Group>
          <Group mb="xs">
            <Text weight={800}>RWF 75,000</Text>
            <Text weight={400} size="xs" td="line-through">
              RWF 100,000
            </Text>
          </Group>

          <Text size="sm" color="dimmed">
            Your best option for the rugged periods. This 30M water resistant
            watch features a dual timing functionality (analogue and digital)
            with night vision lighting. The rectangular case is fabricated with
            quality Stainless Steel and faceted at 12 and 6 to give enhanced
            texture. To complete the classic sensibility of the design, a black
            leather strap frames the case and is secured with a buckle.
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
    </>
  );
}

export default Home;
