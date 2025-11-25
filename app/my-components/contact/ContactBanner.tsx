import React from "react";

const ContactBanner = () => {
  return (
    <section className=" h-[40vh] bg-accent-orange/20">
      <div className="flex flex-col gap-3 justify-center items-center  maxWidth-container mx-auto h-full ">
        <h1> Slide Into Our Inbox 💬</h1>
        <p className="text-center">
          Questions? Ideas? Collab dreams? <br />
          We’re just one message away from making it happen.
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;
