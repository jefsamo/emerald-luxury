import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import second_image from "./assets/second_image.png";
import first_image from "./assets/first_image.png";
import third_image from "./assets/third_image.png";
import last_image from "./assets/last_image.png";

export default function Slider() {
  return (
    <>
      <Carousel
        sx={{ maxWidth: 600 }}
        mx="auto"
        withIndicators
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        <Carousel.Slide sx={{ backgroundColor: "#eee" }}>
          <Image src={first_image} height={"100%"} alt="Norway" />
        </Carousel.Slide>
        <Carousel.Slide sx={{ backgroundColor: "#eee" }}>
          <Image src={second_image} height={"100%"} alt="Norway" />
        </Carousel.Slide>

        <Carousel.Slide sx={{ backgroundColor: "#eee" }}>
          <Image
            src={third_image}
            height={"100%"}
            alt="Norway"
            style={{ width: "100%", height: "320px" }}
          />
        </Carousel.Slide>
        <Carousel.Slide sx={{ backgroundColor: "#eee" }}>
          <Image src={last_image} height={"100%"} alt="Norway" />
        </Carousel.Slide>
      </Carousel>
    </>
  );
}
