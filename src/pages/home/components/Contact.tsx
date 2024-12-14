import Button from './Button'

function ContactSection() {
  return (
    <section className="text-primary-darkBlue mb-8 mt-16 w-full justify-center rounded bg-neutral-ofWhite p-8 text-center shadow-lg">
      <div className="relative mb-6 inline-block">
        <div className="bg-primary-defaultBlue absolute bottom-0 left-1/2 z-0 h-full w-full -translate-x-20 translate-y-4 transform rounded"></div>
        <a href="mailto:fernandapg82@gmail.com">
          <Button
            type="button"
            label="CONTACT-ME"
            variant="primary"
            ariaLabel="contact-me"
            size="large"
            className="relative z-10 translate-x-3 translate-y-3"
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
  )
}

export default ContactSection
