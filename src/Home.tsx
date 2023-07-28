import { useNavigate } from "react-router-dom";
import SS from "./assets/watch.jpeg";
import { Card, Image, Text, Badge, Button, Group, Center } from "@mantine/core";
import "./App.css";

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
            <Image
              src={SS}
              // height={180}
              alt="Norway"
              style={{ width: "100%", height: "auto" }}
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="green" variant="light">
              On Sale
            </Badge>
          </Group>
          <Group position="apart" mb="xs">
            <Text weight={300}>$100</Text>
          </Group>

          <Text size="sm" color="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
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
