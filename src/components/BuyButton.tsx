import * as React from "react";

const BuyButton = props => {
  const { className, title } = props;
  const email = "test@test.com";
  const emailLink = `mailto:${email}?subject=${title}&body=Hi, I'm interested in this item: ${title}. [Let us know if you have any questions! Generally, we are available Th/Sa/Sun in San Jose and Friday in Santa Cruz county.] Thanks!`;

  return (
    <a
      className={`h-9 rounded-sm bg-black text-white flex justify-center items-center ${className}`}
      href={emailLink}
    >
      Buy (contact us)
    </a>
  );
};

export default BuyButton;