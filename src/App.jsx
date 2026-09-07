import { useEffect, useMemo, useState } from 'react'

const EVENT_DATE = new Date('2026-10-10T22:00:00-03:00')
const WHATSAPP = '5545991476081'
const HERO_IMAGE = 'https://images.unsplash.com/photo-1651107466227-1a7100432973?auto=format&fit=crop&fm=webp&q=82&w=1400'

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
    const timer = setInterval(() => setTime(getCountdown()), 1000)
    return () => clearInterval(timer)
  }, [])

  const items = [
    ['dias', time.days],
    ['horas', time.hours],
    ['minutos', time.minutes],
    ['segundos', time.seconds],
  ]

  return (
    <div className="countdown" aria-label="Contagem regressiva para a White Party 6">
      {items.map(([label, value]) => (
        <div className="count-item" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

function SponsorSlots() {
  const slots = useMemo(() => Array.from({ length: 24 }, (_, index) => index + 1), [])

  return (
    <div className="sponsor-grid">
      {slots.map((number) => (
        <div className="sponsor-slot" key={number}>
          <div className="logo-placeholder">+</div>
          <span>Patrocinador {String(number).padStart(2, '0')}</span>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=Olá%20quero%20informações%20sobre%20a%20White%20Party%206`

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="White Party 6">
          <span className="brand-copy">WHITE<br />PARTY</span>
          <b>6</b>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#evento">O evento</a>
          <a href="#patrocinadores">Patrocinadores</a>
          <a href="#local">Local</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="top-pill" href="#evento">Evento exclusivo para convidados</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" style={{ backgroundImage: `url(${HERO_IMAGE})` }} aria-hidden="true" />
        <div className="hero-shine" aria-hidden="true" />

        <div className="hero-content">
          <p className="hero-kicker">Uma noite. Um convite. Uma experiência.</p>
          <h1>
            <span>WHITE</span>
            <span>PARTY</span>
            <b>6</b>
          </h1>

          <div className="hero-info">
            <div>
              <span className="info-icon">▣</span>
              <span><small>10 de outubro</small><strong>de 2026</strong></span>
            </div>
            <div>
              <span className="info-icon">◷</span>
              <span><small>A partir</small><strong>das 22h</strong></span>
            </div>
            <div>
              <span className="info-icon">●</span>
              <span><small>Country Clube</small><strong>Catanduvas PR</strong></span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">Fale com a produção</a>
            <span className="exclusive-note">Evento exclusivo para convidados</span>
          </div>
        </div>
      </section>

      <section className="about section" id="evento">
        <div className="vinyl" aria-hidden="true">
          <div className="vinyl-label">70<br />80<br />90<br />2000</div>
        </div>

        <div className="about-copy">
          <p className="section-kicker">Uma viagem no tempo através da música</p>
          <h2>Uma noite inesquecível</h2>
          <p className="lead">Para relembrar os grandes sucessos que marcaram gerações.</p>
          <p>A White Party 6 vai levar você de volta no tempo com músicas dos anos 70, 80, 90 e início dos anos 2000, em uma viagem pelos maiores clássicos das pistas e das rádios.</p>
          <p className="music-list">Disco, Flashback, Eurodance, Dance Music, Pop, Rock Nacional e Internacional, e muito mais.</p>
          <p>Vista-se de branco e prepare-se para viver uma noite especial, cheia de música, nostalgia, encontros e grandes momentos.</p>
          <strong className="invite-note">Evento exclusivo para convidados.</strong>
        </div>

        <div className="headphones" aria-hidden="true">◖◗</div>
      </section>

      <section className="numbers">
        <div className="guest-count">
          <span>+ de</span>
          <strong>640</strong>
          <small>convidados</small>
        </div>

        <div className="countdown-wrap">
          <p>Faltam para o evento</p>
          <Countdown />
        </div>

        <div className="history-text">Grandes histórias continuam</div>
      </section>

      <section className="details-strip">
        <div><span className="info-icon dark">▣</span><span><small>Data</small><strong>10 de outubro de 2026</strong></span></div>
        <div><span className="info-icon dark">◷</span><span><small>Horário</small><strong>A partir das 22h</strong></span></div>
        <div><span className="info-icon dark">●</span><span><small>Local</small><strong>Country Clube de Catanduvas</strong></span></div>
        <div><span className="info-icon dark">♢</span><span><small>Traje</small><strong>Branco</strong></span></div>
        <div><span className="info-icon dark">▣</span><span><small>Evento</small><strong>Exclusivo para convidados</strong></span></div>
      </section>

      <section className="sponsors section" id="patrocinadores">
        <div className="section-heading split">
          <div>
            <p className="section-kicker">Juntos tornando esta noite ainda mais especial</p>
            <h2>Patrocinadores</h2>
          </div>
          <span>Espaço preparado para 24 marcas</span>
        </div>
        <SponsorSlots />
      </section>

      <section className="gallery section">
        <div className="section-heading">
          <p className="section-kicker">Momentos que ficam para sempre</p>
          <h2>Galeria</h2>
        </div>
        <div className="gallery-grid">
          <div className="gallery-card card-one"><span>Pista</span></div>
          <div className="gallery-card card-two"><span>Encontros</span></div>
          <div className="gallery-card card-three"><span>Flashback</span></div>
          <div className="gallery-card card-four"><span>White Party</span></div>
          <div className="gallery-card card-five"><span>Grandes momentos</span></div>
        </div>
      </section>

      <section className="contact section" id="local">
        <div className="contact-card">
          <p className="section-kicker">Local</p>
          <h2>Country Clube de Catanduvas</h2>
          <p>Catanduvas, Paraná</p>
          <a className="outline-btn" href="https://www.google.com/maps/search/?api=1&query=Country+Clube+de+Catanduvas+PR" target="_blank" rel="noreferrer">Ver no mapa</a>
        </div>

        <div className="contact-card" id="contato">
          <p className="section-kicker">Contato</p>
          <h2>Fale com a produção</h2>
          <p>Informações sobre a White Party 6 pelo WhatsApp da Estúdio 11.</p>
          <a className="primary-btn dark-btn" href={whatsappUrl} target="_blank" rel="noreferrer">(45) 99147-6081</a>
        </div>

        <div className="producer-card">
          <span>Realização</span>
          <strong>Estúdio <b>11</b></strong>
          <small>White Party 6</small>
        </div>
      </section>

      <footer>
        <div className="footer-brand">WHITE PARTY <b>6</b></div>
        <p>Catanduvas PR | 10 de outubro de 2026 | Realização Estúdio 11</p>
        <span>Música boa nunca sai de moda.</span>
      </footer>
    </main>
  )
}
