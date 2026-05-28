
import React from 'react'

export default function App(){
return (
<main>
<section className="hero">
<div className="container">
<img className="logo" src="/logo.png" />
<h1 style={{fontSize:'5rem'}}>Communion of Ordinary Men</h1>
<p style={{fontSize:'1.5rem'}}>You were never meant to walk alone.</p>

<a className="button" href="https://www.facebook.com/profile.php?id=61590155113270" target="_blank">
Join the Facebook Community
</a>

<a className="button" href="mailto:communionofordinarymen@gmail.com">
Email Us
</a>
</div>
</section>

<section className="section">
<div className="container">
<h2>Brotherhood: The Vanished Men</h2>
<div className="card">
<a className="button" href="https://www.amazon.com/s?k=Brotherhood+The+Vanished+Men+Robert+Bowden" target="_blank">
View on Amazon
</a>
</div>
</div>
</section>

<section className="section">
<div className="container">
<h2>Eli Bowden Music</h2>
<div className="card">
<a className="button" href="https://elasticstage.com/srr" target="_blank">
Listen to Eli Bowden
</a>
</div>
</div>
</section>

<section className="section">
<div className="container">
<h2>Ordinary Men Chatroom</h2>
<div className="card">
<p>Create a username and enter the brotherhood.</p>
<input placeholder="Email" style={{width:'100%',padding:'14px',marginBottom:'10px'}} />
<input placeholder="Username" style={{width:'100%',padding:'14px',marginBottom:'10px'}} />
</div>
</div>
</section>

<footer>
<p>© 2026 SmAnderson Ranch Veritas</p>
</footer>
</main>
)
}
