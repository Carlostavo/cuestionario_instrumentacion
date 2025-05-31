document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        // Conceptos Básicos de Redes de Computadoras
        {
            question: "¿Qué es una red de computadoras?",
            options: [
                "Un grupo de computadoras sin conexión.",
                "Un sistema que permite la comunicación entre dispositivos.",
                "Un programa para crear documentos.",
                "Un sistema operativo."
            ],
            correctAnswer: "Un sistema que permite la comunicación entre dispositivos."
        },
        {
            question: "¿Qué significa IP en redes?",
            options: [
                "Internet Provider",
                "Internet Protocol",
                "Internal Program",
                "Information Processor"
            ],
            correctAnswer: "Internet Protocol"
        },
        {
            question: "¿Qué dispositivo conecta varias redes y dirige el tráfico entre ellas?",
            options: [
                "Switch",
                "Router",
                "Hub",
                "Módem"
            ],
            correctAnswer: "Router"
        },
        {
            question: "¿Qué protocolo se utiliza para transferir archivos entre computadoras en una red?",
            options: [
                "HTTP",
                "FTP",
                "SMTP",
                "DNS"
            ],
            correctAnswer: "FTP"
        },
        {
            question: "¿Cuál de las siguientes es una dirección IPv4 válida?",
            options: [
                "192.168.0.256",
                "255.255.255.0",
                "300.400.500.600",
                "10.0.0.-1"
            ],
            correctAnswer: "255.255.255.0"
        },
        {
            question: "¿Qué dispositivo opera en la capa de enlace de datos del modelo OSI?",
            options: [
                "Router",
                "Switch",
                "Firewall",
                "Servidor"
            ],
            correctAnswer: "Switch"
        },
        {
            question: "¿Qué significa LAN?",
            options: [
                "Local Area Network",
                "Large Access Network",
                "Limited Area Node",
                "Low Access Network"
            ],
            correctAnswer: "Local Area Network"
        },
        {
            question: "¿Qué capa del modelo OSI es responsable de la entrega confiable de datos?",
            options: [
                "Física",
                "Red",
                "Transporte",
                "Aplicación"
            ],
            correctAnswer: "Transporte"
        },
        {
            question: "¿Qué es el protocolo DNS?",
            options: [
                "Un sistema para asignar direcciones IP automáticamente",
                "Un servicio para resolver nombres de dominio en direcciones IP",
                "Un protocolo de transferencia de correo",
                "Una herramienta de cifrado de datos"
            ],
            correctAnswer: "Un servicio para resolver nombres de dominio en direcciones IP"
        },
        {
            question: "¿Qué dispositivo amplifica señales en una red?",
            options: [
                "Hub",
                "Router",
                "Repetidor",
                "Firewall"
            ],
            correctAnswer: "Repetidor"
        },
        {
            question: "¿Qué significa HTTP?",
            options: [
                "Hypertext Transfer Protocol",
                "High Text Transport Protocol",
                "Hyper Transport Technology Protocol",
                "Host Transfer Text Protocol"
            ],
            correctAnswer: "Hypertext Transfer Protocol"
        },
        {
            question: "¿Qué término describe la conexión inalámbrica de dispositivos?",
            options: [
                "WAN",
                "Wi-Fi",
                "VLAN",
                "Ethernet"
            ],
            correctAnswer: "Wi-Fi"
        },
        {
            question: "¿Cuál es la principal función de un firewall en una red?",
            options: [
                "Aumentar la velocidad de conexión",
                "Proteger contra accesos no autorizados",
                "Asignar direcciones IP",
                "Conectar dispositivos inalámbricos"
            ],
            correctAnswer: "Proteger contra accesos no autorizados"
        },
        {
            question: "¿Qué puerto utiliza normalmente el protocolo HTTP?",
            options: [
                "21",
                "80",
                "443",
                "25"
            ],
            correctAnswer: "80"
        },
        {
            question: "¿Cuál de los siguientes es un protocolo de correo electrónico?",
            options: [
                "SMTP",
                "FTP",
                "DHCP",
                "IP"
            ],
            correctAnswer: "SMTP"
        },
        {
            question: "¿Qué tecnología se utiliza para asignar automáticamente direcciones IP a dispositivos en una red?",
            options: [
                "DNS",
                "DHCP",
                "NAT",
                "ARP"
            ],
            correctAnswer: "DHCP"
        },
        {
            question: "¿Qué significa WAN?",
            options: [
                "Wireless Area Network",
                "Wide Area Network",
                "Web Access Network",
                "Wired Access Node"
            ],
            correctAnswer: "Wide Area Network"
        },
        {
            question: "¿Cuál es el estándar más común para redes Ethernet?",
            options: [
                "IEEE 802.11",
                "IEEE 802.3",
                "IEEE 802.15",
                "IEEE 802.16"
            ],
            correctAnswer: "IEEE 802.3"
        },
        {
            question: "¿Qué tipo de red conecta dispositivos en un área geográfica limitada, como un edificio?",
            options: [
                "WAN",
                "LAN",
                "MAN",
                "PAN"
            ],
            correctAnswer: "LAN"
        },
        {
            question: "¿Qué se utiliza para convertir señales digitales en analógicas para la transmisión a través de líneas telefónicas?",
            options: [
                "Hub",
                "Módem",
                "Switch",
                "Access Point"
            ],
            correctAnswer: "Módem"
        },
        // Conceptos de IPv4 e IPv6
        {
            question: "¿Qué longitud tiene una dirección IPv4?",
            options: [
                "32 bits",
                "64 bits",
                "128 bits",
                "256 bits"
            ],
            correctAnswer: "32 bits"
        },
        {
            question: "¿Qué longitud tiene una dirección IPv6?",
            options: [
                "32 bits",
                "64 bits",
                "128 bits",
                "256 bits"
            ],
            correctAnswer: "128 bits"
        },
        {
            question: "¿Cuántos octetos componen una dirección IPv4?",
            options: [
                "2",
                "4",
                "6",
                "8"
            ],
            correctAnswer: "4"
        },
        {
            question: "¿Qué notación se utiliza para escribir direcciones IPv6?",
            options: [
                "Decimal con puntos",
                "Hexadecimal con dos puntos",
                "Binaria con guiones",
                "Decimal con guiones"
            ],
            correctAnswer: "Hexadecimal con dos puntos"
        },
        {
            question: "¿Cuál de las siguientes es una dirección IPv4 válida?",
            options: [
                "300.200.100.50",
                "192.168.1.1",
                "fe80::1",
                "​::1"
            ],
            correctAnswer: "192.168.1.1"
        },
        {
            question: "¿Cuál de las siguientes es una dirección IPv6 válida?",
            options: [
                "192.168.1.1",
                "fe80::1",
                "300.300.300.300",
                "255.255.255.0"
            ],
            correctAnswer: "fe80::1"
        },
        {
            question: "¿Qué rango de direcciones IPv4 es reservado para redes privadas?",
            options: [
                "127.0.0.0/8",
                "192.168.0.0/16",
                "169.254.0.0/16",
                "8.8.8.8/24"
            ],
            correctAnswer: "192.168.0.0/16"
        },
        {
            question: "¿Qué protocolo permite la transición entre IPv4 e IPv6?",
            options: [
                "DHCP",
                "DNS",
                "Dual Stack",
                "NAT"
            ],
            correctAnswer: "Dual Stack"
        },
        {
            question: "¿Cuál es la dirección de loopback en IPv4?",
            options: [
                "192.168.1.1",
                "127.0.0.1",
                "10.0.0.1",
                "255.255.255.255"
            ],
            correctAnswer: "127.0.0.1"
        },
        {
            question: "¿Cuál es la dirección de loopback en IPv6?",
            options: [
                "fe80::1",
                "::1",
                "2001::1",
                "ff02::1"
            ],
            correctAnswer: "::1"
        },
        {
            question: "¿Cuántas direcciones únicas puede proporcionar IPv4?",
            options: [
                "$2^{32}$",
                "$2^{64}$",
                "2128",
                "$2^{256}$"
            ],
            correctAnswer: "$2^{32}$"
        },
        {
            question: "¿Cuántas direcciones únicas puede proporcionar IPv6?",
            options: [
                "$2^{32}$",
                "$2^{64}$",
                "$2^{128}$",
                "$2^{256}$"
            ],
            correctAnswer: "$2^{128}$"
        },
        {
            question: "¿Qué tipo de dirección IPv6 comienza con 'ff'?",
            options: [
                "Direcciones unicast",
                "Direcciones multicast",
                "Direcciones anycast",
                "Direcciones privadas"
            ],
            correctAnswer: "Direcciones multicast"
        },
        {
            question: "¿Qué tecnología de IPv6 simplifica la asignación automática de direcciones?",
            options: [
                "SLAAC",
                "NAT",
                "ARP",
                "DNS"
            ],
            correctAnswer: "SLAAC"
        },
        {
            question: "¿Cuál es el propósito de la dirección IPv6 ::?",
            options: [
                "Direccionar nodos multicast",
                "Representar direcciones IPv4 en IPv6",
                "Representar la dirección nula o no especificada",
                "Identificar la dirección de red"
            ],
            correctAnswer: "Representar la dirección nula o no especificada"
        },
        {
            question: "¿Qué protocolo se usa para resolver direcciones IPv6 a direcciones MAC?",
            options: [
                "ARP",
                "NDP",
                "DNS",
                "ICMP"
            ],
            correctAnswer: "NDP"
        },
        {
            question: "¿Qué significa CIDR en redes IP?",
            options: [
                "Configurable Internet Device Routing",
                "Classless Inter-Domain Routing",
                "Circular Internet Data Route",
                "Common Internet Domain Routing"
            ],
            correctAnswer: "Classless Inter-Domain Routing"
        },
        {
            question: "¿Qué dirección IPv4 es usada para la configuración automática de direcciones (APIPA)?",
            options: [
                "10.0.0.0/8",
                "169.254.0.0/16",
                "192.168.0.0/16",
                "172.16.0.0/12"
            ],
            correctAnswer: "169.254.0.0/16"
        },
        {
            question: "¿Qué ventaja tiene IPv6 sobre IPv4?",
            options: [
                "Mayores velocidades de transmisión",
                "Espacio de direcciones mucho mayor",
                "Compatibilidad mejorada con NAT",
                "Uso exclusivo en redes privadas"
            ],
            correctAnswer: "Espacio de direcciones mucho mayor"
        },
        {
            question: "¿Cuál es el formato comprimido de la dirección IPv6 2001:0db8:0000:0000:0000:ff00:0042:8329?",
            options: [
                "2001:db8::ff00:42:8329",
                "2001:db8:ff00:42:8329",
                "2001::db8:0:ff00:42:8329",
                "2001:0db8:0:0:ff00:0042:8329"
            ],
            correctAnswer: "2001:db8::ff00:42:8329"
        },
        // Conceptos de Switch
        {
            question: "¿Qué es un switch en redes Cisco?",
            options: [
                "Un dispositivo para convertir señales analógicas a digitales.",
                "Un dispositivo que conecta varios dispositivos en una red local.",
                "Un software para configurar redes.",
                "Un protocolo de enrutamiento."
            ],
            correctAnswer: "Un dispositivo que conecta varios dispositivos en una red local."
        },
        {
            question: "¿Qué tabla utiliza un switch para tomar decisiones de reenvío de paquetes?",
            options: [
                "Tabla ARP",
                "Tabla NAT",
                "Tabla CAM",
                "Tabla DNS"
            ],
            correctAnswer: "Tabla CAM"
        },
        {
            question: "¿Qué significa VLAN?",
            options: [
                "Virtual Local Area Network",
                "Virtual Link Access Node",
                "Virtual Layer Allocation Network",
                "Variable Local Area Network"
            ],
            correctAnswer: "Virtual Local Area Network"
        },
        {
            question: "¿Qué protocolo se utiliza para gestionar el tráfico entre VLANs en un switch?",
            options: [
                "OSPF",
                "VTP",
                "STP",
                "ISL"
            ],
            correctAnswer: "VTP"
        },
        {
            question: "¿Qué tipo de switch realiza decisiones de reenvío basadas en la capa 2 del modelo OSI?",
            options: [
                "Switch gestionado",
                "Switch de capa 2",
                "Switch de capa 3",
                "Switch no gestionado"
            ],
            correctAnswer: "Switch de capa 2"
        },
        {
            question: "¿Qué comando de Cisco muestra la tabla MAC en un switch?",
            options: [
                "show vlan",
                "show ip route",
                "show mac address-table",
                "show arp"
            ],
            correctAnswer: "show mac address-table"
        },
        {
            question: "¿Qué protocolo evita bucles en una red conmutada?",
            options: [
                "STP",
                "ARP",
                "NAT",
                "DHCP"
            ],
            correctAnswer: "STP"
        },
        {
            question: "¿Cuál es el propósito del protocolo VTP?",
            options: [
                "Transferir datos entre switches",
                "Administrar las configuraciones de VLAN entre switches",
                "Proveer direcciones IP a dispositivos",
                "Crear rutas redundantes"
            ],
            correctAnswer: "Administrar las configuraciones de VLAN entre switches"
        },
        {
            question: "¿Qué comando se usa para configurar una VLAN en un switch Cisco?",
            options: [
                "vlan add",
                "vlan create",
                "vlan configuration",
                "vlan [ID]"
            ],
            correctAnswer: "vlan [ID]"
        },
        {
            question: "¿Qué tipo de puerto se usa para conectar dos switches y transportar múltiples VLANs?",
            options: [
                "Puerto de acceso",
                "Puerto de troncal",
                "Puerto de enrutamiento",
                "Puerto de gestión"
            ],
            correctAnswer: "Puerto de troncal"
        },
        {
            question: "¿Qué tecnología permite agregar múltiples enlaces físicos como si fueran uno solo?",
            options: [
                "EtherChannel",
                "LACP",
                "STP",
                "VLAN Trunking"
            ],
            correctAnswer: "EtherChannel"
        },
        {
            question: "¿Qué protocolo es utilizado para etiquetar tramas en un enlace troncal?",
            options: [
                "ARP",
                "CDP",
                "802.1Q",
                "802.11n"
            ],
            correctAnswer: "802.1Q"
        },
        {
            question: "¿Qué estado de puerto STP indica que no participa en el reenvío ni en el aprendizaje?",
            options: [
                "Listening",
                "Learning",
                "Blocking",
                "Forwarding"
            ],
            correctAnswer: "Blocking"
        },
        {
            question: "¿Cuál es la prioridad predeterminada para un switch en STP?",
            options: [
                "16384",
                "32768",
                "4096",
                "8192"
            ],
            correctAnswer: "32768"
        },
        {
            question: "¿Qué comando habilita el modo de configuración de un puerto en troncal en un switch?",
            options: [
                "switchport mode access",
                "switchport mode trunk",
                "switchport vlan trunk",
                "switchport enable trunk"
            ],
            correctAnswer: "switchport mode trunk"
        },
        {
            question: "¿Qué tipo de VLAN se utiliza para enviar tráfico sin etiquetar en un enlace troncal?",
            options: [
                "VLAN de gestión",
                "VLAN de datos",
                "VLAN nativa",
                "VLAN predeterminada"
            ],
            correctAnswer: "VLAN nativa"
        },
        {
            question: "¿Qué protocolo propietario de Cisco detecta dispositivos vecinos directamente conectados?",
            options: [
                "CDP",
                "LLDP",
                "DTP",
                "ARP"
            ],
            correctAnswer: "CDP"
        },
        {
            question: "¿Qué modo VTP permite a un switch solamente recibir y propagar configuraciones de VLAN?",
            options: [
                "Transparent",
                "Client",
                "Server",
                "Monitor"
            ],
            correctAnswer: "Client"
        },
        {
            question: "¿Qué comando muestra información sobre las interfaces en un switch Cisco?",
            options: [
                "show vlan",
                "show interfaces status",
                "show running-config",
                "show mac address-table"
            ],
            correctAnswer: "show interfaces status"
        },
        {
            question: "¿Qué función tiene la VLAN de gestión?",
            options: [
                "Proveer acceso a servidores",
                "Separar tráfico multicast",
                "Administrar remotamente el switch",
                "Aumentar el ancho de banda"
            ],
            correctAnswer: "Administrar remotamente el switch"
        },
        // Configuración de VLANs en Switch Cisco
        {
            question: "¿Qué es una VLAN en un switch Cisco?",
            options: [
                "Un protocolo de enrutamiento avanzado.",
                "Una red lógica dentro de un switch.",
                "Una conexión troncal entre switches.",
                "Un servidor de direcciones IP."
            ],
            correctAnswer: "Una red lógica dentro de un switch."
        },
        {
            question: "¿Qué comando crea una VLAN en un switch Cisco?",
            options: [
                "vlan create",
                "vlan add",
                "vlan [ID]",
                "vlan-config"
            ],
            correctAnswer: "vlan [ID]"
        },
        {
            question: "¿Qué comando asigna un puerto a una VLAN específica?",
            options: [
                "switchport mode trunk",
                "switchport access vlan [ID]",
                "interface vlan [ID]",
                "switchport vlan [ID]"
            ],
            correctAnswer: "switchport access vlan [ID]"
        },
        {
            question: "¿Qué comando muestra las VLAN configuradas en un switch?",
            options: [
                "show vlan brief",
                "show running-config",
                "show interfaces vlan",
                "show vlan configuration"
            ],
            correctAnswer: "show vlan brief"
        },
        {
            question: "¿Cuál es el rango de VLANs normales en switches Cisco?",
            options: [
                "1-4094",
                "1-1001",
                "1-1005",
                "1001-4094"
            ],
            correctAnswer: "1-1001"
        },
        {
            question: "¿Qué tipo de VLAN transporta tráfico no etiquetado en un enlace troncal?",
            options: [
                "VLAN predeterminada",
                "VLAN de datos",
                "VLAN nativa",
                "VLAN de gestión"
            ],
            correctAnswer: "VLAN nativa"
        },
        {
            question: "¿Qué comando configura un puerto como troncal en un switch Cisco?",
            options: [
                "switchport mode access",
                "switchport mode trunk",
                "trunk enable",
                "switchport vlan trunk"
            ],
            correctAnswer: "switchport mode trunk"
        },
        {
            question: "¿Qué protocolo se utiliza para etiquetar tramas VLAN en un enlace troncal?",
            options: [
                "ARP",
                "802.1Q",
                "VLAN ID",
                "STP"
            ],
            correctAnswer: "802.1Q"
        },
        {
            question: "¿Cuál es la VLAN predeterminada en un switch Cisco?",
            options: [
                "VLAN 0",
                "VLAN 1",
                "VLAN 100",
                "VLAN 4095"
            ],
            correctAnswer: "VLAN 1"
        },
        {
            question: "¿Qué comando asigna una dirección IP a una VLAN para la gestión remota?",
            options: [
                "ip address [IP] [Máscara]",
                "interface vlan [ID]",
                "interface ip vlan [ID]",
                "switchport ip address [IP]"
            ],
            correctAnswer: "interface vlan [ID]"
        },
        {
            question: "¿Qué comando se usa para eliminar una VLAN en un switch?",
            options: [
                "delete vlan [ID]",
                "no vlan [ID]",
                "erase vlan [ID]",
                "remove vlan [ID]"
            ],
            correctAnswer: "no vlan [ID]"
        },
        {
            question: "¿Qué tipo de puerto se utiliza para conectar un dispositivo final a una VLAN?",
            options: [
                "Puerto de acceso",
                "Puerto de troncal",
                "Puerto de gestión",
                "Puerto híbrido"
            ],
            correctAnswer: "Puerto de acceso"
        },
        {
            question: "¿Qué comando habilita un puerto como acceso?",
            options: [
                "switchport mode trunk",
                "switchport mode access",
                "switchport vlan access",
                "interface vlan access"
            ],
            correctAnswer: "switchport mode access"
        },
        {
            question: "¿Qué protocolo facilita la administración de VLANs entre múltiples switches?",
            options: [
                "STP",
                "VTP",
                "802.1Q",
                "DHCP"
            ],
            correctAnswer: "VTP"
        },
        {
            question: "¿Qué comando se utiliza para guardar la configuración de VLAN en el switch?",
            options: [
                "save vlan",
                "vlan commit",
                "write memory",
                "copy running-config startup-config"
            ],
            correctAnswer: "copy running-config startup-config"
        },
        {
            question: "¿Qué ocurre si no se configura una VLAN nativa en un enlace troncal?",
            options: [
                "Se asigna automáticamente la VLAN 1.",
                "El enlace troncal se desactiva.",
                "No se permite tráfico etiquetado.",
                "Solo se permite tráfico de gestión."
            ],
            correctAnswer: "Se asigna automáticamente la VLAN 1."
        },
        {
            question: "¿Qué rango de VLANs se considera extendido en switches Cisco?",
            options: [
                "1001-4094",
                "1-1005",
                "1006-4094",
                "1-4094"
            ],
            correctAnswer: "1006-4094"
        },
        {
            question: "¿Qué comando muestra información detallada sobre los puertos asociados a una VLAN específica?",
            options: [
                "show vlan [ID]",
                "show vlan brief",
                "show interfaces vlan [ID]",
                "show vlan id [ID]"
            ],
            correctAnswer: "show vlan id [ID]"
        },
        {
            question: "¿Qué archivo almacena las configuraciones de VLAN en un switch?",
            options: [
                "startup-config",
                "vlan.dat",
                "running-config",
                "vlan-config.dat"
            ],
            correctAnswer: "vlan.dat"
        },
        {
            question: "¿Qué comando desactiva un puerto en un switch Cisco?",
            options: [
                "shutdown",
                "disable port",
                "no vlan access",
                "disable vlan"
            ],
            correctAnswer: "shutdown"
        },
        // Cuestionario: Subnetting
        {
            question: "¿Qué es el subnetting?",
            options: [
                "Dividir una red en múltiples redes más pequeñas.",
                "Crear una conexión entre diferentes redes.",
                "Configurar un switch para múltiples VLANs.",
                "Asignar direcciones MAC a dispositivos."
            ],
            correctAnswer: "Dividir una red en múltiples redes más pequeñas."
        },
        {
            question: "¿Qué parte de una dirección IP cambia al aplicar subnetting?",
            options: [
                "El identificador de host.",
                "El prefijo de red.",
                "El protocolo de transporte.",
                "La máscara de subred."
            ],
            correctAnswer: "El identificador de host."
        },
        {
            question: "¿Qué representa la máscara de subred 255.255.255.0?",
            options: [
                "/16",
                "/24",
                "/28",
                "/32"
            ],
            correctAnswer: "/24"
        },
        {
            question: "¿Cuántas subredes se crean con una máscara /26?",
            options: [
                "2",
                "4",
                "8",
                "64"
            ],
            correctAnswer: "4"
        },
        {
            question: "¿Cuántos hosts útiles hay en una subred con máscara /28?",
            options: [
                "2",
                "14",
                "30",
                "62"
            ],
            correctAnswer: "14"
        },
        {
            question: "¿Cuál es el propósito de la dirección de broadcast?",
            options: [
                "Identificar un dispositivo específico en la red.",
                "Enviar paquetes a todos los dispositivos de una subred.",
                "Establecer la puerta de enlace predeterminada.",
                "Conectar dos subredes."
            ],
            correctAnswer: "Enviar paquetes a todos los dispositivos de una subred."
        },
        {
            question: "¿Qué máscara de subred permite hasta 254 hosts?",
            options: [
                "/24",
                "/25",
                "/26",
                "/28"
            ],
            correctAnswer: "/24"
        },
        {
            question: "¿Cuál es la dirección de red para la IP 192.168.1.130/25?",
            options: [
                "192.168.1.0",
                "192.168.1.128",
                "192.168.1.64",
                "192.168.1.192"
            ],
            correctAnswer: "192.168.1.128"
        },
        {
            question: "¿Qué protocolo asigna automáticamente una dirección IP y una máscara de subred?",
            options: [
                "DNS",
                "DHCP",
                "ARP",
                "ICMP"
            ],
            correctAnswer: "DHCP"
        },
        {
            question: "¿Qué significa la notación CIDR?",
            options: [
                "Compact IP Device Routing",
                "Classless Inter-Domain Routing",
                "Configurable Internet Data Range",
                "Common IP Device Router"
            ],
            correctAnswer: "Classless Inter-Domain Routing"
        },
        {
            question: "¿Qué ventaja ofrece el subnetting?",
            options: [
                "Incrementa la cantidad total de direcciones IP.",
                "Mejora la seguridad y el uso eficiente de direcciones IP.",
                "Facilita la traducción de direcciones NAT.",
                "Aumenta la velocidad de transmisión de datos."
            ],
            correctAnswer: "Mejora la seguridad y el uso eficiente de direcciones IP."
        },
        {
            question: "¿Cuántos bits se necesitan para crear 8 subredes?",
            options: [
                "1",
                "2",
                "3",
                "4"
            ],
            correctAnswer: "3"
        },
        {
            question: "¿Qué máscara de subred es equivalente a /27?",
            options: [
                "255.255.255.224",
                "255.255.255.240",
                "255.255.255.192",
                "255.255.255.248"
            ],
            correctAnswer: "255.255.255.224"
        },
        {
            question: "¿Qué dirección es inválida en una subred?",
            options: [
                "La primera dirección de la subred.",
                "La última dirección de la subred.",
                "La dirección de broadcast.",
                "Todas son válidas."
            ],
            correctAnswer: "La dirección de broadcast."
        },
        {
            question: "¿Qué rango de direcciones IP pertenece a la subred 192.168.1.64/26?",
            options: [
                "192.168.1.64 - 192.168.1.127",
                "192.168.1.65 - 192.168.1.126",
                "192.168.1.64 - 192.168.1.126",
                "192.168.1.65 - 192.168.1.127"
            ],
            correctAnswer: "192.168.1.64 - 192.168.1.127"
        },
        {
            question: "¿Qué máscara de subred se debe usar para dividir una red clase C en 16 subredes?",
            options: [
                "/26",
                "/27",
                "/28",
                "/30"
            ],
            correctAnswer: "/28"
        },
        {
            question: "¿Cuál es la máscara de subred predeterminada para una red de clase B?",
            options: [
                "255.0.0.0",
                "255.255.0.0",
                "255.255.255.0",
                "255.255.255.255"
            ],
            correctAnswer: "255.255.0.0"
        },
        {
            question: "¿Cuál es el tamaño del bloque en una subred con máscara /29?",
            options: [
                "2",
                "4",
                "8",
                "16"
            ],
            correctAnswer: "8"
        },
        {
            question: "¿Qué comando muestra la configuración de la máscara de subred en un dispositivo Cisco?",
            options: [
                "show vlan",
                "show ip interface brief",
                "show subnet",
                "show running-config"
            ],
            correctAnswer: "show ip interface brief"
        },
        {
            question: "¿Qué rango de direcciones pertenece a una red clase A?",
            options: [
                "192.0.0.0 - 223.255.255.255",
                "128.0.0.0 - 191.255.255.255",
                "1.0.0.0 - 126.255.255.255",
                "224.0.0.0 - 239.255.255.255"
            ],
            correctAnswer: "1.0.0.0 - 126.255.255.255"
        }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-quiz');
    const resultsContainer = document.getElementById('results');
    let userAnswers = {};

    function loadQuiz() {
        questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.id = `question-${index}`; // Add ID for easy access

            const questionText = document.createElement('p');
            questionText.textContent = `${index + 1}. ${q.question}`;
            questionElement.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');

            q.options.forEach((option, optionIndex) => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `question${index}`;
                input.value = option;

                // Add event listener for immediate feedback
                input.addEventListener('change', (event) => {
                    handleAnswer(index, event.target.value);
                });

                label.appendChild(input);
                label.appendChild(document.createTextNode(option));
                optionsDiv.appendChild(label);
            });

            questionElement.appendChild(optionsDiv);
            quizContainer.appendChild(questionElement);
        });
    }

    function handleAnswer(questionIndex, selectedOption) {
        userAnswers[questionIndex] = selectedOption;
        const questionDiv = document.getElementById(`question-${questionIndex}`);
        const labels = questionDiv.querySelectorAll('label');

        labels.forEach(label => {
            label.classList.remove('selected-correct', 'selected-incorrect', 'correct-answer', 'incorrect-answer');
        });

        const correct = questions[questionIndex].correctAnswer === selectedOption;

        labels.forEach(label => {
            const radio = label.querySelector('input[type="radio"]');
            if (radio.value === selectedOption) {
                if (correct) {
                    label.classList.add('selected-correct');
                } else {
                    label.classList.add('selected-incorrect');
                }
            }
            // Always show the correct answer after a selection
            if (radio.value === questions[questionIndex].correctAnswer) {
                 if (!correct) { // Only highlight if user was incorrect
                    label.classList.add('correct-answer');
                 }
            }
        });
    }

    function showResults() {
        let score = 0;
        quizContainer.querySelectorAll('.question').forEach((questionElement, index) => {
            const selectedOption = userAnswers[index];
            const correctAnswer = questions[index].correctAnswer;

            // Remove previous feedback classes (if any)
            const labels = questionElement.querySelectorAll('label');
            labels.forEach(label => {
                label.classList.remove('selected-correct', 'selected-incorrect', 'correct-answer', 'incorrect-answer');
            });

            if (selectedOption === correctAnswer) {
                score++;
                // Find and highlight the selected correct answer
                questionElement.querySelector(`input[value="${selectedOption}"]`).closest('label').classList.add('selected-correct');
            } else {
                if (selectedOption) { // If an option was selected but was incorrect
                    // Highlight selected incorrect answer
                    questionElement.querySelector(`input[value="${selectedOption}"]`).closest('label').classList.add('selected-incorrect');
                }
                // Highlight the actual correct answer
                questionElement.querySelector(`input[value="${correctAnswer}"]`).closest('label').classList.add('correct-answer');
            }
            // Disable all radio buttons after submitting
            questionElement.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
        });

        resultsContainer.innerHTML = `<p>Has obtenido ${score} de ${questions.length} preguntas correctas.</p>`;
        resultsContainer.classList.remove('hidden');
        submitButton.disabled = true; // Disable submit button after showing results
    }

    submitButton.addEventListener('click', showResults);

    loadQuiz();
});
