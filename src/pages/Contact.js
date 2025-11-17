import '../components/Home.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <h2>Let’s build something great</h2>
        <p>Send a note below — I usually reply within a day.</p>
      </div>
      <form
        className="contact-form"
        action="https://formspree.io/f/xvgqpapd"
        method="POST"
      >
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
        />
        <textarea
          name="message"
          placeholder="Message *"
          rows="4"
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
