import Button from './Button';

function ContactSection() {
  return (
    <section className="mb-8 mt-16 w-full justify-center rounded bg-neutral-ofWhite p-8 text-center text-primary-darkBlue shadow-lg">
      <div className="relative mb-6 inline-block">
        <div className="absolute bottom-0 left-1/2 z-0 h-full w-full -translate-x-20 translate-y-4 transform rounded bg-primary-defaultBlue"></div>
        <a href="mailto:fernandapg82@gmail.com">
          <Button
            type="button"
            label="CONTACT-ME"
            variant="primary"
            ariaLabel="contact-me"
            size="large"
            className="relative z-10 translate-x-4 translate-y-3 hover:scale-[1.15]"
          />
        </a>
      </div>

      <div className="my-6">
        <p>Feel free to contact me.</p>
        <p>I will try to respond as soon as possible.</p>
      </div>

      <p>Email</p>
      <small>fernandapg82@gmail.com</small>
    </section>
  );
}

export default ContactSection;
