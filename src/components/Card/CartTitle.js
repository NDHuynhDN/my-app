import React from "react";

const CardTitle = ({
  idTag,
  className,
  h6textchild,
  h3textchild,
  ptextchild,
}) => {
  return (
    <>
      <section id={idTag} className={className}>
        <div className={className == "contact" ? "pl-[30px] xl:pl-[50%] " : ""}>
          <h6
            className={
              className == "contact"
                ? "text-left font-semibold text-base text-primary-color"
                : "text-center font-semibold text-base text-primary-color"
            }
          >
            {h6textchild}
          </h6>
          <h3
            className={
              className == "contact"
                ? "text-left font-semibold text-4xl p-auto block text-primary-dark"
                : "text-center font-semibold text-4xl xl:max-w-[550px] xl:text-center xl:mx-auto text-primary-dark"
            }
          >
            {h3textchild}
          </h3>
          <p
            className={
              className == "contact"
                ? "text-sm text-left text-primary-light block tracking-wider mb-3"
                : "text-sm text-center text-primary-light block tracking-wider xl:max-w-[850px] xl:mx-auto xl:text-center mt-5"
            }
          >
            {ptextchild}
          </p>
        </div>
      </section>
    </>
  );
};

export default CardTitle;
