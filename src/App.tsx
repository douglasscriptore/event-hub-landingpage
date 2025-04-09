import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, Divider, Image, Avatar, AvatarGroup } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import AppRoutes from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white ">
        {/* Navbar */}
        {/* Conteúdo da Hero Section com imagem e animação */}
        {/* Seção de Serviços */}
        {/* Seção Sobre */}
        {/* Seção de Contato */}
        {/* Footer */}
        <AppRoutes />
    </div>
  );
}