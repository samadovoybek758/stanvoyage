"use client";
import ContactFooter from "./ContactFooter";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Contact = () => {
  return (
    <section className="mb-16 sm:mb-20 md:mb-28 lg:mb-[120px]">
      <div className="container grid grid-cols-1 lg:grid-cols-[404px_auto] xl:grid-cols-[504px_auto] gap-4">
        <ContactForm />
        <div className="flex flex-col gap-4">
          <Map className="flex-1" />
          <ContactFooter />
        </div>
      </div>
    </section>
  );
};

export default Contact;
