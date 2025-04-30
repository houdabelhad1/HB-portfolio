import { ArrowRight, ChevronDown, ExternalLink, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-[#2563EB]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-roboto-mono font-bold text-xl text-[#06D6A0]">HB.</div>
          <div className="hidden md:flex space-x-8">
            {["Accueil", "À Propos", "Projets", "Expérience", "Formation", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium hover:text-[#06D6A0] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-[#06D6A0]">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section id="accueil" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 to-transparent opacity-30"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Texte */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="font-roboto-mono text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Houda Belhad <span className="block md:inline">|</span>{" "}
          <span className="text-[#2563EB]">Développeuse Full Stack & Data Engineer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Concevoir des solutions logicielles évolutives, une ligne de code à la fois.
        </p>
        <Button className="bg-[#06D6A0] hover:bg-[#06D6A0]/80 text-black font-medium rounded-md px-6 py-2 flex items-center gap-2 mx-auto md:mx-0">
          Voir mes projets <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Image - Ajoutez cette partie */}
      <div className="md:w-1/2 flex justify-center">
        <Image 
          src="/photo-profil.jpg" 
          alt="Photo de Houda Belhad"
          width={400} // Ajustez selon vos besoins
          height={500} // Ajustez selon vos besoins
          className="rounded-lg shadow-xl"
          priority
        />
      </div>
    </div>

    <div className="mt-16 animate-bounce text-center">
      <a href="#a-propos" className="inline-block">
        <ChevronDown className="h-8 w-8 text-[#06D6A0]" />
      </a>
    </div>
  </div>
</section>

      {/* About Section */}
      <section id="a-propos" className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="font-roboto-mono text-3xl font-bold mb-12 text-center">À Propos</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Actuellement en première année de Master en Ingénierie du Développement Logiciel et Décisionnel, et
                titulaire d'une Licence Fondamentale en Sciences Mathématiques et Informatique, j'ai développé une
                solide compréhension des concepts fondamentaux de l'informatique et du développement logiciel.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Passionnée par la programmation et les architectures distribuées, j'ai renforcé mes compétences à
                travers des projets académiques et personnels, notamment en développement Full Stack et en
                microservices.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">Spring Boot</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">React</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">Java</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">Python</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">SQL</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">Microservices</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">Big Data</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">Hadoop</Badge>
                <Badge className="bg-[#2563EB] hover:bg-[#2563EB]/80">Laravel</Badge>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2 text-[#06D6A0]">Développement Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Spring Boot
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Java
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PHP
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Laravel
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MySQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    SQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Microservices
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-[#06D6A0]">Développement Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    HTML
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    CSS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Bootstrap
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-[#06D6A0]">Data Engineering</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Big Data
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Hadoop
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MapReduce
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PySpark
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-[#06D6A0]">Réseaux Informatiques</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Administration Réseaux
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    VLAN
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Switching
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Routage
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Linux
                  </Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-[#06D6A0]">Mobile</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Android
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Kotlin
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Android Studio
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-roboto-mono text-3xl font-bold mb-4 text-center">Projets</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Une sélection de mes projets académiques et personnels dans différents domaines techniques.
          </p>

          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 max-w-2xl mx-auto">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="reseaux">Réseaux</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/nurse.jpg"
                      alt="NOC Nurse On Call"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
  <a
    href="https://github.com/houdabelhad1/NOC_VIDLD"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-md border border-[#06D6A0] text-sm font-medium text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black px-3 py-1.5"
  >
    <GitHub className="mr-2 h-4 w-4" /> GitHub
  </a>
  <a
    href="https://github.com/houdabelhad1/NOC_VIDLD"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-md border border-[#06D6A0] text-sm font-medium text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black px-3 py-1.5"
  >
    <ExternalLink className="mr-2 h-4 w-4" /> Démo
  </a>
</div>
</div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      NOC Nurse On Call
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Plateforme de gestion des soins infirmiers basée sur une architecture microservices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Spring Boot
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        React.js
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MariaDB
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Microservices
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Eureka
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 2 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/maladie.jpg"
                      alt="Prédiction des Maladies Chroniques"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <GitHub className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Démo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      Prédiction des Maladies Chroniques
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Système de prédiction utilisant le Machine Learning et le Deep Learning sur des données médicales.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Apache Spark
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PySpark
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        HDFS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        TensorFlow
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Scikit-learn
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 3 */}
                {/* Project 3 - Gestion des Horaires de Bus */}
<Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
  <div className="h-48 bg-[#2563EB]/10 relative">
    <Image 
      src="/bus.jpg"
      alt="Application mobile Android"
      width={384}
      height={192}
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
      <Button
        size="sm"
        variant="outline"
        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
        asChild
      >
        <a 
          href="https://github.com/houdabelhad1/NOC_VIDLD" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <GitHub className="mr-2 h-4 w-4" /> GitHub
        </a>
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black cursor-not-allowed"
        disabled
        title="Démo non disponible"
      >
        <ExternalLink className="mr-2 h-4 w-4" /> Démo
      </Button>
    </div>
  </div>
  <CardContent className="p-6">
    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
      Gestion des Horaires de Bus
    </h3>
    <p className="text-gray-400 text-sm mb-4">
      Application mobile Android pour la gestion et le suivi des horaires de bus en temps réel.
    </p>
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline" className="text-xs">
        Kotlin
      </Badge>
      <Badge variant="outline" className="text-xs">
        Android Studio
      </Badge>
      <Badge variant="outline" className="text-xs">
        Figma
      </Badge>
      <Badge variant="outline" className="text-xs">
        Mapbox API
      </Badge>
      <Badge variant="outline" className="text-xs">
        SQLite
      </Badge>
    </div>
  </CardContent>
</Card>

                {/* Project 4 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/ecommerce.jpg"
                      alt="E-commerce Laravel"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <GitHub className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Démo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      E-commerce avec Laravel
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Site web de commerce électronique complet développé avec le framework Laravel.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Laravel
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PHP
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MySQL
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Bootstrap
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Blade
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 5 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/rs.jpeg"
                      alt="Réseau Informatique Entreprise"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <GitHub className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Démo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      Réseau Informatique Entreprise
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Conception et mise en place d'un réseau informatique complet pour une entreprise.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        VLAN
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Firewall
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        DMZ
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        VMWare
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Supervision
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-8">
              {/* Web projects would go here */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/placeholder.svg?height=192&width=384"
                      alt="NOC Nurse On Call"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <GitHub className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Démo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      NOC Nurse On Call
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Plateforme de gestion des soins infirmiers basée sur une architecture microservices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Spring Boot
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        React.js
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MariaDB
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Microservices
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Eureka
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 4 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/placeholder.svg?height=192&width=384"
                      alt="E-commerce Laravel"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <GitHub className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Démo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      E-commerce avec Laravel
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Site web de commerce électronique complet développé avec le framework Laravel.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Laravel
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PHP
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        MySQL
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Bootstrap
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Blade
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reseaux" className="mt-8">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
      <div className="h-48 bg-[#2563EB]/10 relative">
        <Image
          src="/placeholder.svg?height=192&width=384"
          alt="Réseau Informatique Entreprise"
          width={384}
          height={192}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
          <Button
            size="sm"
            variant="outline"
            className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
            asChild
          >
            <a 
              href="https://github.com/houdabelhad1/NOC_VIDLD" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <GitHub className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black cursor-not-allowed"
            disabled
            title="Démo non disponible"
          >
            <ExternalLink className="mr-2 h-4 w-4" /> Démo
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
          Réseau Informatique Entreprise
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Conception et mise en place d'un réseau informatique complet pour une entreprise.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            VLAN
          </Badge>
          <Badge variant="outline" className="text-xs">
            Firewall
          </Badge>
          <Badge variant="outline" className="text-xs">
            DMZ
          </Badge>
          <Badge variant="outline" className="text-xs">
            VMWare
          </Badge>
          <Badge variant="outline" className="text-xs">
            Supervision
          </Badge>
        </div>
      </CardContent>
    </Card>
  </div>
</TabsContent>
            <TabsContent value="data" className="mt-8">
              {/* Data projects would go here */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 2 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/maladie.jpg"
                      alt="Prédiction des Maladies Chroniques"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <GitHub className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Démo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      Prédiction des Maladies Chroniques
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Système de prédiction utilisant le Machine Learning et le Deep Learning sur des données médicales.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        Apache Spark
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PySpark
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        HDFS
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        TensorFlow
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Scikit-learn
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reseaux" className="mt-8">
              {/* Réseaux projects would go here */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 5 */}
                <Card className="bg-[#1A1A1A] border-[#2563EB]/20 overflow-hidden hover:border-[#06D6A0] transition-all duration-300 group">
                  <div className="h-48 bg-[#2563EB]/10 relative">
                    <Image
                      src="/rs.jpeg"
                      alt="Réseau Informatique Entreprise"
                      width={384}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#121212]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <GitHub className="mr-2 h-4 w-4" /> GitHub
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#06D6A0] text-[#06D6A0] hover:bg-[#06D6A0] hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Démo
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-roboto-mono text-xl font-bold mb-2 group-hover:text-[#06D6A0] transition-colors">
                      Réseau Informatique Entreprise
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Conception et mise en place d'un réseau informatique complet pour une entreprise.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        VLAN
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Firewall
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        DMZ
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        VMWare
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Supervision
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="font-roboto-mono text-3xl font-bold mb-12 text-center">Expérience Professionnelle</h2>

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-2 border-[#2563EB] ml-3 md:ml-6 pl-8 pb-8">
              {/* Experience 1 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] bg-[#121212] p-1 rounded-full border-2 border-[#2563EB]">
                  <div className="w-6 h-6 bg-[#06D6A0] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2563EB]/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <h3 className="font-roboto-mono text-xl font-bold text-[#06D6A0]">Enseignante d'informatique</h3>
                    <span className="text-sm text-gray-400">Oct 2023 - Juil 2024</span>
                  </div>
                  <h4 className="font-medium mb-3">SOLUCE</h4>
                  <p className="text-gray-300 text-sm">
                    Enseignement de l'informatique et accompagnement des étudiants dans leurs projets techniques.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] bg-[#121212] p-1 rounded-full border-2 border-[#2563EB]">
                  <div className="w-6 h-6 bg-[#06D6A0] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                      <line x1="8" x2="16" y1="21" y2="21"></line>
                      <line x1="12" x2="12" y1="17" y2="21"></line>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2563EB]/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <h3 className="font-roboto-mono text-xl font-bold text-[#06D6A0]">
                      Stagiaire | Administrateur de réseaux
                    </h3>
                    <span className="text-sm text-gray-400">Avr 2023 - Juin 2023</span>
                  </div>
                  <h4 className="font-medium mb-3">Netmar SARL</h4>
                  <p className="text-gray-300 text-sm">
                    Intégration de l'IP sec en GMDSS (Global Maritime Distress and Safety System).
                  </p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-[#121212] p-1 rounded-full border-2 border-[#2563EB]">
                  <div className="w-6 h-6 bg-[#06D6A0] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                      <line x1="8" x2="16" y1="21" y2="21"></line>
                      <line x1="12" x2="12" y1="17" y2="21"></line>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2563EB]/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <h3 className="font-roboto-mono text-xl font-bold text-[#06D6A0]">
                      Stagiaire | Administrateur de réseaux
                    </h3>
                    <span className="text-sm text-gray-400">Juin 2022 - Juil 2022</span>
                  </div>
                  <h4 className="font-medium mb-3">Netmar SARL</h4>
                  <p className="text-gray-300 text-sm">
                    Configuration des switch dans le cadre de maintenance des site VTS (Vessel Traffic Services)
                    Mohammédia et MRCC (Maritime Rescue Coordination Centres) Bouznika.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-roboto-mono text-3xl font-bold mb-12 text-center">Formation</h2>

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-2 border-[#2563EB] ml-3 md:ml-6 pl-8 pb-8">
              {/* Education 1 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] bg-[#121212] p-1 rounded-full border-2 border-[#2563EB]">
                  <div className="w-6 h-6 bg-[#06D6A0] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2563EB]/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <h3 className="font-roboto-mono text-xl font-bold text-[#06D6A0]">
                      Master en Ingénierie du Développement Logiciel et Décisionnel
                    </h3>
                    <span className="text-sm text-gray-400">2023 - 2024 (en cours)</span>
                  </div>
                  <h4 className="font-medium mb-3">Faculté des Sciences de Rabat (FSR)</h4>
                  <p className="text-gray-300 text-sm">
                    Spécialisation en développement logiciel, architecture de systèmes distribués et ingénierie
                    décisionnelle.
                  </p>
                </div>
              </div>

              {/* Education 2 */}
              <div className="mb-12 relative">
                <div className="absolute -left-[41px] bg-[#121212] p-1 rounded-full border-2 border-[#2563EB]">
                  <div className="w-6 h-6 bg-[#06D6A0] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2563EB]/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <h3 className="font-roboto-mono text-xl font-bold text-[#06D6A0]">
                      Licence Fondamentale en Science Mathématique et Informatique
                    </h3>
                    <span className="text-sm text-gray-400">2023</span>
                  </div>
                  <h4 className="font-medium mb-3">Faculté des Sciences de Rabat (FSR)</h4>
                  <p className="text-gray-300 text-sm">
                    Formation en mathématiques appliquées et informatique, avec une spécialisation en développement
                    logiciel.
                  </p>
                </div>
              </div>

              {/* Education 3 */}
              <div className="relative">
                <div className="absolute -left-[41px] bg-[#121212] p-1 rounded-full border-2 border-[#2563EB]">
                  <div className="w-6 h-6 bg-[#06D6A0] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2563EB]/20">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                    <h3 className="font-roboto-mono text-xl font-bold text-[#06D6A0]">
                      Diplôme Universitaire de Technologie en Administration des Réseaux Informatiques
                    </h3>
                    <span className="text-sm text-gray-400">2023</span>
                  </div>
                  <h4 className="font-medium mb-3">École Supérieure de Technologie (EST-SALE)</h4>
                  <p className="text-gray-300 text-sm">
                    Formation en administration des réseaux informatiques, sécurité et systèmes d'information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-roboto-mono text-3xl font-bold mb-12 text-center">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certification 1 */}
            <Card className="bg-[#1A1A1A] border-[#2563EB]/20 hover:border-[#06D6A0] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto-mono text-lg font-bold group-hover:text-[#06D6A0] transition-colors">
                      Introduction to Generative AI
                    </h3>
                    <p className="text-sm text-gray-400">Google Cloud Skills Boost</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Certification sur les fondamentaux de l'IA générative, ses applications et ses implications.
                </p>
              </CardContent>
            </Card>

            {/* Certification 2 */}
            <Card className="bg-[#1A1A1A] border-[#2563EB]/20 hover:border-[#06D6A0] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" x2="12" y1="22" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto-mono text-lg font-bold group-hover:text-[#06D6A0] transition-colors">
                      MapReduce and YARN
                    </h3>
                    <p className="text-sm text-gray-400">Cognitive Class</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Certification sur les principes de MapReduce et YARN dans l'écosystème Hadoop.
                </p>
              </CardContent>
            </Card>

            {/* Certification 3 */}
            <Card className="bg-[#1A1A1A] border-[#2563EB]/20 hover:border-[#06D6A0] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" x2="12" y1="22" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto-mono text-lg font-bold group-hover:text-[#06D6A0] transition-colors">
                      Hadoop 101
                    </h3>
                    <p className="text-sm text-gray-400">Cognitive Class</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Certification sur les fondamentaux de Hadoop et son écosystème pour le traitement de données massives.
                </p>
              </CardContent>
            </Card>

            {/* Certification 4 */}
            <Card className="bg-[#1A1A1A] border-[#2563EB]/20 hover:border-[#06D6A0] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M12 18v-6"></path>
                      <path d="M8 18v-1"></path>
                      <path d="M16 18v-3"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto-mono text-lg font-bold group-hover:text-[#06D6A0] transition-colors">
                      Data Analysis with Python
                    </h3>
                    <p className="text-sm text-gray-400">Cognitive Class</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Certification sur l'analyse de données avec Python, incluant pandas, numpy et matplotlib.
                </p>
              </CardContent>
            </Card>

            {/* Certification 5 */}
            <Card className="bg-[#1A1A1A] border-[#2563EB]/20 hover:border-[#06D6A0] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" x2="12" y1="22" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto-mono text-lg font-bold group-hover:text-[#06D6A0] transition-colors">
                      Big Data 101
                    </h3>
                    <p className="text-sm text-gray-400">Cognitive Class</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Certification sur les concepts fondamentaux du Big Data et ses applications dans l'industrie.
                </p>
              </CardContent>
            </Card>

            {/* Certification 6 */}
            <Card className="bg-[#1A1A1A] border-[#2563EB]/20 hover:border-[#06D6A0] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-roboto-mono text-lg font-bold group-hover:text-[#06D6A0] transition-colors">
                      Laravel
                    </h3>
                    <p className="text-sm text-gray-400">ODC</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Certification sur le développement d'applications web avec le framework Laravel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="font-roboto-mono text-3xl font-bold mb-12 text-center">Contact</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-roboto-mono text-xl font-bold mb-6">Envoyez-moi un message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      className="bg-[#1A1A1A] border-[#2563EB]/20 focus:border-[#06D6A0] focus:ring-[#06D6A0]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Votre email"
                      className="bg-[#1A1A1A] border-[#2563EB]/20 focus:border-[#06D6A0] focus:ring-[#06D6A0]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    placeholder="Sujet de votre message"
                    className="bg-[#1A1A1A] border-[#2563EB]/20 focus:border-[#06D6A0] focus:ring-[#06D6A0]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message"
                    className="min-h-[120px] bg-[#1A1A1A] border-[#2563EB]/20 focus:border-[#06D6A0] focus:ring-[#06D6A0]"
                  />
                </div>
                <Button className="w-full bg-[#06D6A0] hover:bg-[#06D6A0]/80 text-black font-medium">
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div>
              <h3 className="font-roboto-mono text-xl font-bold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2563EB]/10 rounded-full flex items-center justify-center mt-1">
                    <Mail className="h-5 w-5 text-[#06D6A0]" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-400">diyaenour75@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2563EB]/10 rounded-full flex items-center justify-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Téléphone</h4>
                    <p className="text-gray-400">0682991096</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2563EB]/10 rounded-full flex items-center justify-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#06D6A0]"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Localisation</h4>
                    <p className="text-gray-400">Témara, Maroc</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium mb-4">Réseaux sociaux</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/houdabelhad1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#2563EB]/10 rounded-full flex items-center justify-center hover:bg-[#06D6A0] hover:text-black transition-colors"
                    >
                      <GitHub className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#2563EB]/10 rounded-full flex items-center justify-center hover:bg-[#06D6A0] hover:text-black transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#2563EB]/20">
        <div className="container mx-auto px-4 text-center">
          <div className="font-roboto-mono font-bold text-xl text-[#06D6A0] mb-4">HB.</div>
          <p className="text-sm text-gray-400 mb-6">
            &copy; {new Date().getFullYear()} Houda Belhad. Tous droits réservés.
          </p>
          <div className="flex justify-center gap-6">
            {["Accueil", "À Propos", "Projets", "Expérience", "Formation", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs hover:text-[#06D6A0] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
