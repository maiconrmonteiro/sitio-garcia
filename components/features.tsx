import { Trees, Home, Car, Users, Leaf } from "lucide-react"

const features = [
  {
    icon: Trees,
    title: "Espaço Amplo",
    description: "Área externa generosa para eventos ao ar livre com vista para a natureza",
  },
  {
    icon: Home,
    title: "Área Coberta",
    description: "Salão elegante e confortável para recepções em qualquer clima",
  },
  {
    icon: Car,
    title: "Estacionamento",
    description: "Amplo espaço para estacionamento de veículos de todos os convidados",
  },
  {
    icon: Users,
    title: "Ambiente Familiar",
    description: "Estrutura segura e acolhedora para eventos com crianças e famílias",
  },
  {
    icon: Leaf,
    title: "Natureza e Tranquilidade",
    description: "Cercado de verde, ar puro e a serenidade do campo",
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-[var(--font-lato)] text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Por que escolher o Sítio Garcia?
          </h2>
          <p className="font-[var(--font-lato)] text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma experiência completa para tornar seu evento inesquecível
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="font-[var(--font-lato)] text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
