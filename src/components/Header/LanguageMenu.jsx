"use client";
import { Box, Select } from "@chakra-ui/react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/config/navigations";

const LanguageMenu = () => {
  const locale = useLocale();
  const params = useParams();

  const router = useRouter();
  const pathname = usePathname();
  const [isPending, setTranslation] = useTransition();

  const changeLocale = (e) => {
    const nextLocale = e.target.value;
    setTranslation(() => {
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  };

  return (
    <Box maxW={"120px"}>
      <Select defaultValue={locale} onChange={changeLocale}>
        <option value="uz">uz</option>
        <option value="ru">ru</option>
      </Select>
    </Box>
  );
};

export default LanguageMenu;
