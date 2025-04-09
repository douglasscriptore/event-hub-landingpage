import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, Divider, Image, Avatar, AvatarGroup } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";




export default function Home() {

    const [currentImage, setCurrentImage] = useState(0);


    const images = [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
        "https://s2-g1.glbimg.com/fSCuXRfV97sXz-V1VAG6HAVn7K8=/0x0:740x555/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/6/S/Kf39JWRESa0Vbpv84r2Q/expoparanavai.jpeg",
        "https://blog.soap.com.br/wp-content/uploads/2024/01/2-OUTUBRO_C-1024x683.png",

      ]

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div className="min-h-screen bg-black text-white ">
         
         {/* <div className="container mx-auto py-6 sticky top-0 z-999"> */}
       <Navbar 
        
        classNames={{
            base: "bg-black/70 backdrop-blur-lg border border-white/20 rounded-full max-w-[90%] md:max-w-[50rem] mx-auto sticky top-4 flex items-center justify-between",
            // content: "bg-red-500 flex-row items-center justify-end", 
            brand: "",
            wrapper: "px-4"
        }}
        >
            <NavbarBrand className=" items-center gap-2 justify-start">
              <Icon icon="lucide:zap" className="text-2xl text-primary" />
              <p className="font-bold text-lg text-white hidden sm:block">EventHubs</p>
            </NavbarBrand>
            <NavbarContent justify="center">
              <NavbarItem>
                <Link color="foreground" href="#services" className="text-sm font-medium text-gray-300 hover:text-white">
                  Serviços
                </Link>
              </NavbarItem>
              <NavbarItem className="hidden sm:flex">
                <Link color="foreground" href="#about" className="text-sm font-medium text-gray-300 hover:text-white">
                  Sobre
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#contact" className="text-sm font-medium text-gray-300 hover:text-white">
                  Contato
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" >
              <NavbarItem>
                <Button color="primary" variant="shadow" className="rounded-full px-4 py-2 text-sm font-medium">
                  Orçamento
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>

        {/* </div> */}


      <div>
        <div className="absolute inset-0 z-0">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt="Event Infrastructure"
              className="w-[100vw] h-[100vh] object-cover"
            />
          </motion.div>
          <div className="absolute z-10 inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90"></div>
        </div>

        <div className="relative z-10">
  
          {/* <Navbar className="bg-black/20 backdrop-blur-sm border-b border-white/10">
            <NavbarBrand>
              <Icon icon="lucide:zap" className="text-2xl text-primary" />
              <p className="font-bold text-inherit ml-2">EventHubs</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="#services">
                  Serviços
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#about">
                  Sobre
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#contact">
                  Contato
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button color="primary" variant="shadow">
                  Solicitar Orçamento
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar> */}

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative container mx-auto px-6 min-h-[calc(100vh-76px)] flex items-center justify-center"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-[#FF3D9A] to-secondary bg-clip-text text-transparent">
                  Infraestrutura Completa para Seus Eventos
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Soluções integradas para convenções, feiras e eventos corporativos com tecnologia de ponta
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" color="primary" variant="shadow">
                    Nossos Serviços
                  </Button>
                  <Button size="lg" variant="bordered" className="border-primary/50 hover:border-primary">
                    Fale Conosco
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>

      <section id="services" className="container mx-auto px-6 py-32">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon="lucide:wifi"
              title="Redes Wi-Fi"
              description="Infraestrutura de rede dedicada e de alta performance para seus eventos"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon="lucide:shopping-bag"
              title="Marketplace"
              description="Plataforma digital para expositores e participantes"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon="lucide:ticket"
              title="Sistema de Tickets"
              description="Sistema de tickets, portaria e controle de acesso para eventos"
            />
          </motion.div>
          
        </div>
      </section>

      {/* Rest of the sections remain the same */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sobre a EventHubs
          </h2>
          <p className="text-gray-400 text-lg text-center mb-6">
            Somos especialistas em criar a infraestrutura perfeita para eventos de todos os portes.
            Nossa missão é garantir que sua experiência seja impecável do início ao fim.
          </p>
          <div className="flex justify-center mb-12">
            <AvatarGroup size="lg" max={5}>
              <Avatar src="https://i.pravatar.cc/150?u=1" />
              <Avatar src="https://i.pravatar.cc/150?u=2" />
              <Avatar src="https://i.pravatar.cc/150?u=3" />
              <Avatar src="https://i.pravatar.cc/150?u=4" />
              <Avatar src="https://i.pravatar.cc/150?u=5" />
            </AvatarGroup>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <StatCard number="500+" text="Eventos Realizados" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatCard number="1M+" text="Participantes" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatCard number="98%" text="Satisfação" />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-30 -z-10"></div>
          <Card className="max-w-2xl mx-auto bg-black/50 backdrop-blur-sm border border-white/10">
            <CardBody className="text-center p-12">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Vamos Conversar?
              </h2>
              <p className="text-gray-400 mb-8">
                Entre em contato para discutir seu próximo evento
              </p>
              <Button size="lg" color="primary" variant="shadow">
                Agendar Consulta
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Icon icon="lucide:zap" className="text-2xl text-primary" />
              <p className="font-bold ml-2">EventHubs</p>
            </div>
            <div className="flex gap-6">
              <Link color="foreground" href="#" size="sm">
                Política de Privacidade
              </Link>
              <Link color="foreground" href="#" size="sm">
                Termos de Uso
              </Link>
            </div>
          </div>
          <Divider className="my-4" />
          <p className="text-center text-gray-500 text-sm">
            © 2024 EventHubs. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>

  );
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-black/50 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300">
      <CardBody className="p-8">
        <div className="rounded-full w-16 h-16 bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
          <Icon icon={icon} className="text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-gray-400 text-center">{description}</p>
      </CardBody>
    </Card>
  );
}

interface StatCardProps {
  number: string;
  text: string;
}

function StatCard({ number, text }: StatCardProps) {
  return (
    <Card className="bg-black/50 backdrop-blur-sm border border-white/10">
      <CardBody className="text-center p-6">
        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          {number}
        </p>
        <p className="text-gray-400">{text}</p>
      </CardBody>
    </Card>
  );
}