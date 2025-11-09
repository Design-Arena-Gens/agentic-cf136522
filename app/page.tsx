export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="title">श्रीमद् भगवद् गीता</h1>
        <p className="subtitle">अध्याय १ - अर्जुनविषादयोग</p>
      </header>

      <section className="verse-section">
        <div className="verse-label">संस्कृत श्लोक - १</div>
        <div className="verse-text">
          धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |<br />
          मामकाः पाण्डवाश्र्चैव किमकुर्वत सञ्जय || १ ||
        </div>
      </section>

      <section className="meaning-section">
        <div className="meaning-label">हिन्दी भावार्थ</div>
        <div className="meaning-text">
          <span className="speaker">धृतराष्ट्र ने कहा —</span>
          <br /><br />
          हे संजय! धर्मभूमि कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे तथा पाण्डु के पुत्रों ने क्या किया?
        </div>
      </section>

      <footer className="footer">
        <p>यह भगवद् गीता का प्रथम श्लोक है, जिसमें महाभारत युद्ध की शुरुआत होती है।</p>
      </footer>
    </main>
  )
}
