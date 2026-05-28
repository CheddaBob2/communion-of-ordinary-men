
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Mail, Film, BookOpen, Users, Flame, Cross, Music, MessageCircle, Lock, UserPlus, ExternalLink, Mountain, ShoppingBag } from 'lucide-react'
import './styles.css'

const links = {
  facebook: 'https://www.facebook.com/profile.php?id=61590155113270',
  amazonAuthor: 'https://www.amazon.com/Robert-Bowden/e/B006QMPKSI',
  brotherhood: 'https://www.amazon.com/s?k=Brotherhood+The+Vanished+Men+Robert+Bowden',
  eliMusic: 'https://elasticstage.com/srr',
  eliAlbumAmazon: 'https://www.amazon.com/Sorrowful/dp/B0GQ27LT1M',
  email: 'mailto:communionofordinarymen@gmail.com',
  sheenImage: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Fulton_J._Sheen_NYWTS.jpg'
}

function ButtonLink({ href, children, outline=false }) {
  const external = !href.startsWith('#') && !href.startsWith('mailto:')
  return (
    <a className={`button ${outline ? 'outline' : ''}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      {children}
      {external && <ExternalLink size={16} />}
    </a>
  )
}

function FeatureCard({ icon: Icon, title, children }) {
  return (
    <article className="card">
      <Icon className="cardIcon" />
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

function ChatRoom() {
  const [joined, setJoined] = useState(false)
  const [room, setRoom] = useState('prayer')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [posts, setPosts] = useState([
    { room:'prayer', name:'Ordinary Man', time:'6:12 AM', text:'Pray for me. I am trying to be more present at home this week.' },
    { room:'prayer', name:'Brother', time:'6:18 AM', text:'You are not alone. One faithful evening at a time.' },
    { room:'work', name:'James', time:'7:04 AM', text:'Long shift today. Offering it up and trying not to bring the frustration home.' },
    { room:'fathers', name:'Michael', time:'8:31 AM', text:'My son asked me to sit with him last night. I almost said I was too tired. I am glad I did not.' }
  ])

  const rooms = [
    ['prayer','Prayer Requests'],
    ['work','Work & Burdens'],
    ['fathers','Fathers & Sons'],
    ['general','General Brotherhood']
  ]

  function join(e) {
    e.preventDefault()
    if (email.trim() && username.trim()) setJoined(true)
  }

  function send(e) {
    e.preventDefault()
    if (!joined || !message.trim()) return
    const time = new Date().toLocaleTimeString([], { hour:'numeric', minute:'2-digit' })
    setPosts([...posts, { room, name: username || 'Brother', time, text: message.trim() }])
    setMessage('')
  }

  return (
    <div className="chatGrid">
      <div className="panel">
        <UserPlus className="panelIcon" />
        <h3>Member Access</h3>
        <p>Create an email-based username for extended access. This preview is ready to be connected to Supabase or Firebase for real accounts, saved messages, moderation, and email verification.</p>
        {!joined ? (
          <form onSubmit={join} className="form">
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" type="email" />
            <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Create username" />
            <input placeholder="Create password" type="password" />
            <button className="button formButton">Create Access</button>
          </form>
        ) : (
          <div className="signedIn">
            <span>Signed in as</span>
            <strong>{username}</strong>
            <small>{email}</small>
            <button className="plainButton" onClick={() => setJoined(false)}>Sign out</button>
          </div>
        )}

        <div className="standards">
          <Lock size={18} />
          <div>
            <strong>Community Standard</strong>
            <p>No rage-bait. No politics-as-identity. No posturing. Honest brotherhood, prayer, burden-bearing, and communion.</p>
          </div>
        </div>
      </div>

      <div className="chatPanel">
        <div className="chatHeader">
          <div>
            <MessageCircle />
            <div>
              <h3>Ordinary Men Chatroom</h3>
              <p>For prayer, brotherhood, and honest conversation.</p>
            </div>
          </div>
          <span className={joined ? 'badge open' : 'badge'}>{joined ? 'Access Open' : 'Locked'}</span>
        </div>

        <div className="rooms">
          {rooms.map(([id,label]) => (
            <button key={id} onClick={()=>setRoom(id)} className={room === id ? 'room active' : 'room'}>{label}</button>
          ))}
        </div>

        <div className="messages">
          {posts.filter(p => p.room === room).map((p,i)=>(
            <div className="message" key={i}>
              <div><strong>{p.name}</strong><span>{p.time}</span></div>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="chatInput">
          <input disabled={!joined} value={message} onChange={e=>setMessage(e.target.value)} placeholder={joined ? 'Write a message...' : 'Create access first to write'} />
          <button disabled={!joined}>Send</button>
        </form>
      </div>
    </div>
  )
}

function App() {
  return (
    <main>
      <nav>
        <a href="#home" className="brand"><img src="/logo.png" alt="Communion of Ordinary Men logo" /><span>Communion of Ordinary Men</span></a>
        <div className="navLinks">
          <a href="#manifesto">Manifesto</a>
          <a href="#sheen">Sheen</a>
          <a href="#books">Books</a>
          <a href="#music">Music</a>
          <a href="#chat">Chat</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="texture"></div>
        <div className="heroInner">
          <img className="heroLogo" src="/logo.png" alt="Communion of Ordinary Men logo" />
          <p className="eyebrow">Brotherhood. Reverence. Communion.</p>
          <h1>Communion <span>of</span> Ordinary Men</h1>
          <p className="heroLine">You were never meant to walk alone.</p>
          <div className="actions">
            <ButtonLink href={links.facebook}>Join the Facebook Community</ButtonLink>
            <ButtonLink href={links.email} outline>Contact Us</ButtonLink>
          </div>
        </div>
      </section>

      <section id="manifesto" className="section center">
        <p className="eyebrow">Why We Exist</p>
        <h2>There are men everywhere now pretending they are fine.</h2>
        <p className="lead">Communion of Ordinary Men exists to call ordinary men back into communion with Christ and with one another. Not through performance. Not through internet tribes. Not through the worship of masculinity itself. Through brotherhood, sacrifice, reverence, and presence.</p>
      </section>

      <section className="section dark">
        <div className="grid three">
          <FeatureCard icon={Users} title="Brotherhood, Not Isolation">Modern men are connected to everyone and known by almost no one. This project exists to help men rediscover real brotherhood.</FeatureCard>
          <FeatureCard icon={Flame} title="Sacrifice Over Comfort">Christian manhood is not built by posturing. It is formed through fidelity, work, prayer, service, and sacrifice.</FeatureCard>
          <FeatureCard icon={Cross} title="Christ at the Center">Communion flows from Christ. Brotherhood is not the destination by itself. It is restored in Him.</FeatureCard>
        </div>
      </section>

      <section id="sheen" className="section sheen">
        <div className="sheenImage"><img src={links.sheenImage} alt="Venerable Fulton J. Sheen" /></div>
        <div>
          <p className="eyebrow">A Guiding Voice</p>
          <h2>Peace begins in the soul before it reaches the world.</h2>
          <blockquote>“Unless souls are saved, nothing is saved. There can be no world peace unless there is soul peace.”</blockquote>
          <p className="lead small">Communion of Ordinary Men leans heavily on Sheen’s diagnosis of modern alienation: men do not merely need more information, noise, or entertainment. They need Christ, interior peace, and restored communion with one another.</p>
        </div>
      </section>

      <section id="film" className="section film">
        <div className="videoBox"><Film size={70} /><p>The first film belongs here once uploaded to Facebook, YouTube, or Vercel storage.</p></div>
        <div>
          <p className="eyebrow">The First Film</p>
          <h2>The beginning of a quieter kind of brotherhood.</h2>
          <p className="lead small">The internet is not the destination. Communion is. Our films, writings, and gatherings exist as a doorway toward real presence, real conversation, and real life in Christ.</p>
          <ButtonLink href={links.facebook}>Watch on Facebook</ButtonLink>
        </div>
      </section>

      <section id="books" className="section dark">
        <div className="center narrow">
          <p className="eyebrow">Robert Bowden</p>
          <h2>Books for the long road home.</h2>
          <p className="lead small">Catholic writing for ordinary readers, converts, families, and men trying to live faithfully in a fractured world.</p>
        </div>
        <div className="grid two">
          <FeatureCard icon={ShoppingBag} title="Brotherhood: The Vanished Men">The flagship book behind this project, a Catholic reflection on male loneliness, ordinary friendship, sacrifice, and the brotherhood many men have quietly lost.</FeatureCard>
          <FeatureCard icon={BookOpen} title="Robert Bowden on Amazon">Browse the full author catalog, including Catholic fiction, catechetical works, and books for formation.</FeatureCard>
        </div>
        <div className="actions">
          <ButtonLink href={links.brotherhood}>Open Brotherhood on Amazon</ButtonLink>
          <ButtonLink href={links.amazonAuthor} outline>View Author Page</ButtonLink>
        </div>
      </section>

      <section id="music" className="section music">
        <div>
          <p className="eyebrow">Eli Bowden</p>
          <h2>Rugged, honest music for the same road.</h2>
          <p className="lead small">Eli Bowden is the musical expression of the same world: faith, confession, endurance, suffering, hope, and the long road home.</p>
          <div className="actions left">
            <ButtonLink href={links.eliMusic}>Listen to Eli Bowden</ButtonLink>
            <ButtonLink href={links.eliAlbumAmazon} outline>The Long Way Home</ButtonLink>
          </div>
        </div>
        <div className="albumCard">
          <Music size={78} />
          <h3>The Long Way Home</h3>
          <p>Songs for men who are tired, faithful, wounded, stubborn, and still walking.</p>
        </div>
      </section>

      <section className="section coming dark">
        <div className="center narrow">
          <p className="eyebrow">What Is Coming</p>
          <h2>A movement built slowly.</h2>
        </div>
        <div className="grid four">
          <FeatureCard icon={BookOpen} title="Essays & Books">Long-form reflection for men, parishes, and homes.</FeatureCard>
          <FeatureCard icon={Film} title="Short Films">Cinematic meditations for the lonely and faithful.</FeatureCard>
          <FeatureCard icon={Users} title="Brotherhood Nights">Local gatherings built around honest presence.</FeatureCard>
          <FeatureCard icon={Mountain} title="Retreats">Eventually, deeper formation away from the noise.</FeatureCard>
        </div>
      </section>

      <section id="chat" className="section">
        <div className="center narrow">
          <p className="eyebrow">Extended Access</p>
          <h2>A room for ordinary men.</h2>
          <p className="lead small">A protected place for honest conversation, prayer requests, encouragement, and brotherhood beyond social media.</p>
        </div>
        <ChatRoom />
      </section>

      <section id="contact" className="section center contact">
        <Mail size={46} className="goldIcon" />
        <h2>Stay close to the beginning.</h2>
        <p className="lead small">Receive the first films, essays, and invitations as Communion of Ordinary Men takes shape. Contact us anytime at communionofordinarymen@gmail.com.</p>
        <div className="actions">
          <ButtonLink href={links.email}>Email Us</ButtonLink>
          <ButtonLink href={links.facebook} outline>Join the Facebook Community</ButtonLink>
        </div>
      </section>

      <footer>
        <p>Communion of Ordinary Men</p>
        <span>Brotherhood. Reverence. Communion.</span>
        <small>© {new Date().getFullYear()} SmAnderson Ranch Veritas. All rights reserved.</small>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
