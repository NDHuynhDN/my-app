import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

const FormContact = () => {
  const WrapForm = tw.div`
    flex flex-col gap-9 max-w-[520px]`;
  const Line1 = tw.div`
    flex flex-col lg:flex-row lg:max-w-[520px] lg:gap-[36px]`;
  const TextField1 = tw.input`lg:w-[242px]`;

  const TextField2 = tw.input`lg:w-[242px]`;

  const TextField = tw.input`
    `;

  const TextField3 = tw.textarea`
  min-h-[240px] resize-none
  `;
  const ButtonSubmit = tw.button`w-[300px] lg:mb-[112px]`;
  return (
    <WrapForm>
      <Line1>
        <TextField1 placeholder="First Name"></TextField1>
        <TextField2 placeholder="Last Name"></TextField2>
      </Line1>
      <TextField placeholder="Email address"></TextField>
      <TextField placeholder="Subject message"></TextField>
      <TextField3 placeholder="Your inquiry here"></TextField3>
      <ButtonSubmit>Send Message</ButtonSubmit>
    </WrapForm>
  );
};

export default FormContact;
