import { Card, CardBody, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MenuList = ({ product }) => {
  const t = useTranslations("ServicePage.Menu");
  return (
    product && (
      <Card key={product.id} spacing={3} padding={"15px"}>
        <CardHeader p={0}>
          <Image
            src={product.imgLink}
            alt={product.title}
            width={50}
            height={50}
            style={{
              borderRadius: "5px",
              width: "100%",
              height: 150,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </CardHeader>
        <CardBody p={"20px 0"}>
          <Text as="b">{product.title}</Text>
        </CardBody>
        <CardFooter p={0}>
          <Text as={"span"} color={"purple"}>
            {product.price.toLocaleString("ru-Ru")} {t("Sum")}
          </Text>
        </CardFooter>
      </Card>
    )
  );
};

export default MenuList;
