import React from "react";

export default function PatientPortal() {
  return (
    <div className="align-middle">
      <section className="bg-coolGray-50 py-4">
        <div className="container px-4 mx-auto"> </div>
      </section>
      <img
        className="rounded-10xl align-middle block"
        src="images/Screenshot-2022-08-18-220026.jpg"
        alt=""
      />
      <section
        className="py-24 md:py-32"
        style={{
          backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-14 md:mb-0">
              <div className="max-w-md">
                <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold">
                  Are you a patient or a physician's office?
                </h2>
                <p className="text-lg md:text-xl font-heading font-medium text-coolGray-500">
                  F.A.S.T Makes Medical Care Easy For All!
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="flex flex-wrap items-center md:justify-end">
                <a
                  className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm"
                  href="physicianpage.html"
                >
                  Physician's Office
                </a>
                <a
                  class="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-coolGray-800 bg-white hover:bg-coolGray-100 font-medium focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 border border-coolGray-100 rounded-md shadow-sm"
                  href="#"
                >
                  Patient
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
