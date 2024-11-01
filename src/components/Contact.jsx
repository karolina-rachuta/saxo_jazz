function Contact() {
  return (
    <div className="contact__container" id="contact">
      <h2>Contact</h2>
      <div className="contact__box">
        <h3>Saxo Jazz Djs</h3>
        <p>phone: +48 777 555 666</p>
        <p>emial: saxojazzdjs@gmail.com</p>
      </div>
      <div className="contact__box">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea cols={60} rows={20} placeholder="Write your message"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
