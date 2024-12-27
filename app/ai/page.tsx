import MarkdownPage from "@/components/ai/MarkdownPage";
import FormContainer from "@/components/form/formcontanier";
import ImageInput from "@/components/form/imageinput";
import FormInput from "@/components/form/input";
import { SubmitButton } from "@/components/form/submitbtn";
import { gennerateAI } from "@/utils/action";
import React from "react";

function page() {
  return (
    <section>
      <div>
        <p className=" font-semibold mb-8">
          AI Search (Search for tourist destinations using AI with text and
          image)
        </p>
        <p></p>
      </div>
      <div className="border p-8 rounded-md">
        <FormContainer action={gennerateAI}>
          <div className="grid gap-4 md:grid-cols-2 mt-4 ">
            <FormInput type="text" name="search" label="Text ?" />
            <FormInput type="text" name="search" label="Url Image ?" />
          </div>
          <SubmitButton text="Search" className="mt-8" />
        </FormContainer>
        <MarkdownPage />
      </div>
    </section>
  );
}

export default page;
