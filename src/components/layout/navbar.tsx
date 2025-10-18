"use client";

import {
  IconClock,
  IconHome2,
  IconLogout,
  IconSwitchHorizontal,
  IconTransfer,
  IconX,
} from "@tabler/icons-react";
import { ActionIcon, Code, Group } from "@mantine/core";
import classes from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { link: "/", label: "Início", icon: IconHome2 },
  { link: "/history", label: "Histórico", icon: IconClock },
  { link: "/pix", label: "Área Pix", icon: IconTransfer },
];

interface NavbarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

export function Navbar({ onClose, isMobile }: NavbarProps) {
  const pathname = usePathname();

  const links = data.map((item) => {
    const isActive =
      pathname === item.link || pathname.startsWith(item.link + "/");
    return (
      <Link
        className={classes.link}
        data-active={isActive || undefined}
        href={item.link}
        key={item.label}
        onClick={() => onClose?.()}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </Link>
    );
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {!isMobile && (
          <Group className={classes.header} justify="space-between">
            <Group gap="xs">
              <>SVG</>
              <Code fw={700}>v3.1.2</Code>
            </Group>

            {isMobile && (
              <ActionIcon
                variant="subtle"
                color="gray"
                onClick={onClose}
                aria-label="Fechar menu"
              >
                <IconX size={20} stroke={1.5} />
              </ActionIcon>
            )}
          </Group>
        )}

        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
