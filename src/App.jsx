import { useEffect, useState } from 'react'

const EVENT_DATE = new Date('2026-10-10T22:00:00-03:00')
const HERO_DESKTOP = 'https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/hero-desktop.webp'
const HERO_MOBILE = 'https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/hero-mobile.webp'
const VINYL_IMAGE = 'https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/vinil.webp'
const HEADPHONES_IMAGE = 'https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/headphones.webp'
const ESTUDIO_11_LOGO = 'https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/logo-estudio-11.webp'

const sponsors = [
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/bodega-conveniencia.webp', 'Bodega Conveniência'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/sicredi-logo.webp', 'Sicredi'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/sicoob-logo-1.webp', 'Sicoob'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/orssatto-telecom.webp', 'Orssatto Telecom'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/logo-cresol-02.webp', 'Cresol'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/taxa.webp', 'Taxa'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/ultra-descontao-1.webp', 'Ultra Descontão'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/bernart-planejamentos.webp', 'Bernart Planejamentos'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/loja-vips.webp', 'Loja Vips'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/OTICA-GOLD.webp', 'Ótica Gold'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/clinica-ESPACO-SAUDE-IMAGEM.webp', 'Clínica Espaço Saúde Imagem'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/festa-e-cia.webp', 'Festa e Cia'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/zancanaro-e-grobs.webp', 'Zancanaro e Grobs'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/a-cantina.webp', 'A Cantina'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/MEGA-BEER-novo2.webp', 'Mega Beer'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/sindicato-rural.webp', 'Sindicato Rural'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/gsantin.webp', 'G Santin'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/jenas-e-cia.webp', 'Jenas e Cia'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/nc.webp', 'NC'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/madevan.webp', 'Madevan'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/arena-sene.webp', 'Arena Sene'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/mramos-producoes.webp', 'M Ramos Produções'],
  ['https://catanduvasemfoco.com.br/wp-content/uploads/2026/09/LOGO-ESTUDIO-MIDIA20260807-155701.webp', 'Estúdio Mídia'],
]

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v3M17 2v3M3.5 9h17M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z" /></svg>
}

function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-7.3 7-13A7 7 0 0 0 5 9c0 5.7 7 13 7 13Z" /><circle cx="12" cy="9" r="2.3" /></svg>
}

function DressIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 5 4.5 12h-13L10 8 9 3Z" /><path d="M9.7 7.5h4.6" /></svg>
}

function LockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
}

function getCountdown() {
  const distance = Math.max(0, EVENT_DATE.getTime() - Date.now())
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  }
}

function Countdown() {
  const [time, setTime] = useState(getCountdown)

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getCountdown()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="countdown" aria-label="Contagem regressiva para a White Party 6">
      {[
        ['dias', time.days],
        ['horas', time.hours],
        ['minutos', time.minutes],
        ['segundos', time.seconds],
      ].map(([label, value]) => (
        <div className="count-item" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

function SponsorSpace() {
  return (
    <div className="sponsor-grid" aria-label="Patrocinadores da White Party 6">
      {sponsors.map(([src, alt]) => (
        <div className="sponsor-slot sponsor-logo-card" key={src}>
          <img src={src} alt={alt} loading="lazy" decoding="async" />
        </div>
      ))}
      <div className="sponsor-slot sponsor-logo-card sponsor-empty" aria-hidden="true" />
    </div>
  )
}

const gallery = [
  ['/assets/gallery-dance.webp', 'Pista de dança da White Party'],
  ['/assets/gallery-friends.webp', 'Convidados celebrando juntos'],
  ['/assets/gallery-disco.webp', 'Globo espelhado e luzes da festa'],
  ['/assets/gallery-dj.webp', 'DJ comandando a pista'],
  ['/assets/gallery-crowd.webp', 'Público celebrando a White Party'],
]

export default function App() {
  return (
    <main>
      <header className="topbar">
        <a className="mini-logo" href="#inicio" aria-label="White Party 6">
          <span>WHITE</span>
          <span>PARTY</span>
          <b>6</b>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#evento">O evento</a>
          <a href="#informacoes">Informações</a>
          <a href="#patrocinadores">Patrocinadores</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="contact-pill" href="#contato">Fale conosco</a>
      </header>

      <section className="hero" id="inicio">
        <picture>
          <source media="(max-width: 700px)" srcSet={HERO_MOBILE} />
          <img className="hero-image" src={HERO_DESKTOP} alt="Mulher vestida de branco em uma festa elegante" fetchPriority="high" />
        </picture>
        <div className="hero-wash" aria-hidden="true" />

        <div className="hero-copy">
          <div className="hero-title-wrap">
            <h1><span>WHITE</span><span>PARTY</span></h1>
            <b className="hero-six">6</b>
          </div>
          <p className="hero-tagline">Uma noite. Um convite. Uma experiência.</p>

          <div className="hero-facts">
            <div className="fact"><span className="icon"><CalendarIcon /></span><p><strong>10 de outubro</strong><small>de 2026</small></p></div>
            <div className="fact"><span className="icon"><ClockIcon /></span><p><strong>A partir</strong><small>das 22h</small></p></div>
            <div className="fact"><span className="icon"><PinIcon /></span><p><strong>Country Clube</strong><small>Catanduvas PR</small></p></div>
          </div>

          <a className="gold-button" href="#contato"><LockIcon /> Evento exclusivo para convidados</a>
        </div>

        <div className="hero-script" aria-hidden="true">Good Music<br />Good People<br />Great Moments</div>
      </section>

      <section className="about" id="evento">
        <div className="vinyl real-vinyl" style={{ backgroundImage: `url(${VINYL_IMAGE})` }} aria-hidden="true">
          <span>UMA VIAGEM<br />NO TEMPO<br />ATRAVÉS DA<br />MÚSICA</span>
        </div>

        <div className="about-copy">
          <h2>UMA NOITE INESQUECÍVEL</h2>
          <p className="about-sub">Para relembrar os grandes sucessos que marcaram gerações.</p>
          <p>A White Party 6 vai levar você de volta no tempo com músicas dos anos 70, 80, 90 e início dos anos 2000, em uma viagem pelos maiores clássicos das pistas e das rádios.</p>
          <p className="music-list">Disco, Flashback, Eurodance, Dance Music, Pop, Rock Nacional e Internacional, e muito mais.</p>
          <p>Vista-se de branco e prepare-se para viver uma noite especial, cheia de música, nostalgia, encontros e grandes momentos.</p>
        </div>

        <div className="headphones-wrap" aria-hidden="true">
          <img className="headphones-image" src={HEADPHONES_IMAGE} alt="" loading="lazy" />
          <span>Music<br />Never<br />Ends</span>
        </div>
      </section>

      <section className="numbers">
        <div className="numbers-bg" aria-hidden="true" />
        <div className="guest-count">
          <span>+ de</span>
          <strong>640</strong>
          <small>CONVIDADOS</small>
        </div>
        <div className="countdown-wrap">
          <p>FALTAM</p>
          <Countdown />
        </div>
        <div className="history-script">Grandes histórias<br />continuam</div>
      </section>

      <section className="details-strip" id="informacoes">
        <div className="detail"><span className="icon dark"><CalendarIcon /></span><p><small>Data</small><strong>10 de outubro de 2026</strong></p></div>
        <div className="detail"><span className="icon dark"><ClockIcon /></span><p><small>Horário</small><strong>A partir das 22h</strong></p></div>
        <div className="detail"><span className="icon dark"><PinIcon /></span><p><small>Local</small><strong>Country Clube de Catanduvas</strong></p></div>
        <div className="detail"><span className="icon dark"><DressIcon /></span><p><small>Traje</small><strong>Branco</strong></p></div>
        <div className="detail"><span className="icon dark"><LockIcon /></span><p><small>Evento</small><strong>Exclusivo para convidados</strong></p></div>
      </section>

      <section className="sponsors section" id="patrocinadores">
        <div className="section-title lines"><span /><h2>PATROCINADORES</h2><span /></div>
        <p className="section-note">Juntos tornando esta noite ainda mais especial</p>
        <SponsorSpace />
      </section>

      <section className="gallery section" id="galeria">
        <div className="section-title lines"><span /><h2>GALERIA</h2><span /></div>
        <p className="section-note">Momentos que ficam para sempre</p>
        <div className="gallery-grid">
          {gallery.map(([src, alt], index) => (
            <figure className="gallery-card" key={src}>
              <img src={src} alt={alt} loading="lazy" />
              {index === gallery.length - 1 && <figcaption>Ver mais fotos</figcaption>}
            </figure>
          ))}
        </div>
      </section>

      <section className="bottom-info section" id="contato">
        <div className="info-column" id="local">
          <span className="eyebrow">LOCAL</span>
          <h3>Country Clube de Catanduvas</h3>
          <p>Catanduvas PR</p>
          <a className="outline-button" href="https://www.google.com/maps/search/?api=1&query=Country+Clube+de+Catanduvas+PR" target="_blank" rel="noreferrer"><PinIcon /> Ver no mapa</a>
        </div>

        <div className="info-column contact-column">
          <span className="eyebrow">CONTATO</span>
          <h3>Fale com a produção</h3>
          <p>Os canais oficiais de contato serão adicionados aqui.</p>
          <span className="pending-contact">WhatsApp e Instagram em breve</span>
        </div>

        <div className="producer">
          <span className="eyebrow">REALIZAÇÃO</span>
          <img className="producer-logo" src={ESTUDIO_11_LOGO} alt="Estúdio 11" loading="lazy" decoding="async" />
          <small>White Party 6</small>
        </div>
      </section>

      <footer>
        <div className="footer-logo">WHITE PARTY <b>6</b></div>
        <p>Catanduvas PR | 10 de outubro de 2026 | Realização Estúdio 11</p>
        <span>Música boa nunca sai de moda.</span>
      </footer>
    </main>
  )
}
