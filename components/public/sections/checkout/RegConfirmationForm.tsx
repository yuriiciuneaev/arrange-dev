import React, { Children } from 'react'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { DeviceMobileIcon, CalendarIcon, MailIcon } from '@heroicons/react/outline'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


interface CustomerDetails {
  type: string;
  name: string;
  value?: string | string[];
};

const customer_details: Array<CustomerDetails> = [
  {
    type: "contact",
    name: "Email",
    value: "marie@gmail.com",
  },
  {
    type: "contact",
    name: "Phone",
    value: "+45 23456789",
  },
  {
    type: "contact",
    name: "First name",
    value: "Marie",
  },
  {
    type: "contact",
    name: "Last name",
    value: "Hansen",
  },
  {
    type: "payment",
    name: "Payment method",
    value: "Visa: der ender med 5555 - 2.395 kr",
  },
  {
    type: "address",
    name: "Address",
    value: [
      "Marie hansen",
      "Sønderskovvej 21",
      "5900 Rudkøbing",
      "Danmark"
    ],
  }]

function RegConfirmationForm() {
  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
  return (
    <>
      <form className="z-20 pt-16 pb-16 px-4 sm:px-6 lg:pr-0 lg:pl-10 lg:row-start-1 lg:col-start-1">
        <div className="mx-auto">
          <div className="lg:mt-10">
            <div className="flex flex-row items-start">
              <Image
                src="/icons/check-circle.png"
                width={35}
                height={35}
                className=""
              />                
              <div className="pl-6 mb-4 text-black">
                <p className="font-semibold text-sm">Order #13272</p>
                <p className="font-semibold text-2xl">Thank you for your registration Marie!</p>
              </div>
            </div>
            
            <fieldset>
              <div className="mt-1 bg-white rounded-md shadow-md -space-y-px overflow-hidden border-[#b0b0b0] border">
                <div>
                  <MyMapComponent
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `220px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                  />
                </div>
                <div className="p-5 text-black">
                  <p className="font-semibold text-sm">
                    Your registration has been confirmed
                  </p>
                  <p className="font-normal text-xs pt-1">
                    You will soon receive a confirmation by email, along with your order number.
                  </p>
                </div>
              </div>
            </fieldset>

            <div className="py-8 text-base">
              <h3 className="font-bold  text-black">
                Dear Marie
              </h3>
              <div className="mt-4 space-y-4">
                <p>Tillykke med graviditeten og tak for din tilmelding til Grundkursus hos Smertefri Fødsel Anja Bay Metoden.</p>
                <p>Vi glæder os til at have dig med og aktivt klæde dig på til fødslen og lære hjælp til selvhjælp til din forestående fødsel.</p>
                <p>Der er ingen grund til at forberede dig, inden du fremmøder på modul 1. Du får til den første undervisning udleveret et oversigtshæfte, der indeholder en plan for, hvad du skal øve fra gang til gang. På modul 2 og 3 kan du med fordel tage blødt tøj på, da vi blandt andet skal øve at sidde i hug, når vi beskæftiger os med pressefasen. På modul 3 forventes din partner eller fødselshjælper at deltage, kan den anden ikke deltage på det planlagte tidspunkt, så kontakt os, og vi finder en ny dato på et andet hold.</p>
                <p>Undervisningsoversigten får du som nævnt udleveret første dag, og alt kursusmaterialet henter du her:</p>
                <p>ØVELSESBOG SMERTEFRI FØDSEL ANJA BAY METODEN</p>
                <p>LYDFILER (MP3) OG INSTRUKTIONSVIDEOER</p>
                <p>
                  <span>Du logger ind med:</span><br/>
                  <span>Brugernavn: Kursus21</span><br/>
                  <span>Adgangskode: 022021</span><br/>
                </p>
                <p>
                Vi anbefaler dog, at du venter med at åbne materialet til efter første modul, hvor din underviser instruerer dig i, hvordan du bruger materialet.
                </p>
                <p>
                Du er meget velkommen til at kontakte os, hvis du har spørgsmål. Vi glæder os meget til, at se dig og vække din nysgerrighed omkring det forberedende arbejde og fødslen.
                </p>
                <p>
                  <span>Husk at du skal fremvise coronapas ved indgang til lokalet.</span>
                  <br/>
                  <span>Bedste hilsner</span>
                </p>
                <p>
                  Anja Bay & underviserne
                </p>
              </div>
            </div>

            <div className="mb-8 border border-[#b0b0b0] rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-sm leading-6 font-semibold text-black">Updates</h3>
                <div className="mt-1 max-w-xl text-xs text-black">
                  <p>You will regularly receive updates and notifications on your email.</p>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                  >
                    <DeviceMobileIcon
                      className='text-white h-7 w-7'
                    />
                    <span className="pl-2">Get updates on SMS</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8 border border-[#b0b0b0] rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-sm leading-6 font-bold text-black">Customer information</h3>
                <div className="flex flex-row justify-between text-xs">
                  <dl className="">
                    {customer_details.map((detail) => (
                      detail.type=="contact" && 
                      <div>
                        <dt className="mt-4 mb-1 font-semibold text-black">{detail.name}</dt>
                        <dd className="text-black">{detail.value}</dd>
                      </div>                        
                    ))}
                  </dl>
                  <dl className="">
                    {customer_details.map((detail) => (
                      detail.type=="payment" && 
                      <div>
                        <dt className="mt-4 mb-1 font-semibold black">{detail.name}</dt>
                        <dd className="text-black">{detail.value}</dd>
                      </div>
                    ))}
                    {customer_details.map((detail) => (
                      detail.type=="address" && 
                      <div>
                        <dt className="mt-4 mb-1 font-semibold black">{detail.name}</dt>
                        <dd className="text-black">
                          {
                            Children.map(detail.value, (address) => {
                              return (
                                <div>{address}</div>
                              )                                
                            })
                          }
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="mb-8 lg:mb-20 border border-[#b0b0b0] rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-sm leading-6 font-semibold text-black">Add to your calendar</h3>
                <div className="mt-1 max-w-xl text-xs text-black">
                  <p>Add all meeting days to your own calendar.</p>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-5 py-2 border border-transparent font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                  >
                    <CalendarIcon
                      className='text-white h-7 w-7'
                    />
                    <span className="pl-2">Add dates to your calendar via iCal</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <a href="#" className="flex flex-row items-center order-2 lg:order-1">
                <ArrowLeftIcon
                  className='text-black h-4 w-4 mt-0'
                  aria-hidden="true"
                />
                <span className="pl-2 font-semibold text-sm">
                  Go back
                </span>                  
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm order-1 lg:order-2"
              >
                <MailIcon
                  className='text-white h-7 w-7'
                />
                <span className="pl-2 font-semibold">Do you need help? Contact us</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default RegConfirmationForm
