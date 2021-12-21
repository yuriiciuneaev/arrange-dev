import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { ChevronUpIcon, ArrowLeftIcon } from '@heroicons/react/solid'

const course = 
  {
    id: 1,
    name: 'The Basic Course in Copenhagen at Smertefri Fødsel™',
    href: '#',
    price: '2.395 kr',
    tax_price: '598.75 kr',
    duration: '10. januar - 31. januar',
    imageSrc: '/courses/01_01.png',
    imageAlt: '',
  }

export default function Checkout() {
  const router = useRouter()

  return (
    <div className="bg-white font-inter">
      {/* Background color split screen for large screens */}
      <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
      <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />

      <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-40">
        <h1 className="sr-only">Order information</h1>
        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h4 id="summary-heading" className="text-sm font-medium text-gray-900 flex flex-row items-center lg:pt-14">              
              <Image
                src="/courses/logo_course_01.png"
                width={28}
                height={28}
                className=""
              />
              <span className="pl-3">Smertefri Fødsel™</span>
            </h4>
            <p className="mt-8 font-medium text-base text-[#777777] ">Pay Smertefri Fødsel™</p>
            <p className="text-4xl font-semibold">{course.price}</p>
            <p className="text-xs font-normal text-black">including {course.tax_price} in tax</p>
            <div className="flex items-start py-8 space-x-4">
              <img
                src={course.imageSrc}
                alt={course.imageAlt}
                className="flex-none w-12 h-12 rounded-md object-center object-cover"
              />
              <div className="flex-auto space-y-1 text-gray-500">
                <h3 className="text-sm text-black">{course.name}<span className="pl-2 text-xs text-gray-500">({course.duration})</span></h3>                
              </div>
              <div className="flex-none text-sm font-semibold">
                <p className="text-right">{course.price}</p>
                <p className="text-xs font-normal text-black">including {course.tax_price} in tax</p>
              </div>              
            </div>
            <p className="mt-8 text-xs text-gray-500 font-normal">
              Powered by <span className="font-bold text-[#5b5b5b]">Arrange</span>
            </p>
          </div>
        </section>

        <form className="pt-16 pb-16 px-4 sm:px-6 lg:px-0 lg:row-start-1 lg:col-start-1">
          <div className="max-w-md mx-auto">            
            <h2 id="contact-info-heading" className="flex items-center text-sm font-semibold text-gray-900 pb-10">
              <ArrowLeftIcon
                className='text-black h-4 w-4 mt-0'
                aria-hidden="true"
              />
              <span className="pl-2">Back</span>
            </h2>

            <section>
              <button
                type="button"
                className="w-full flex items-center justify-center bg-black border border-transparent text-white rounded-md py-3 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                <span className="sr-only">Pay with Apple Pay</span>
                <svg className="h-6 w-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 20">
                  <path d="M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z" />
                </svg>
              </button>

              <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-sm font-medium text-gray-500">or pay with card</span>
                </div>
              </div>
            </section>

            <section aria-labelledby="contact-info-heading">
              <h2 id="contact-info-heading" className="sr-only text-lg font-medium text-gray-900">
                Contact information
              </h2>

              <div className="mt-6">
                <label htmlFor="first-name" className="block text-sm font-normal text-black">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="last-name" className="block text-sm font-normal text-black">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email-address" className="block text-sm font-normal text-black">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-normal text-black">
                  Mobile
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </section>

            <section aria-labelledby="payment-heading">
              <h2 id="payment-heading" className="sr-only text-lg font-medium text-gray-900">
                Payment details
              </h2>

              <div className="mt-6">
                <fieldset>
                  <legend className="block text-sm font-normal text-black">Card information</legend>
                  <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                    <div className="relative">
                      <label htmlFor="card-number" className="sr-only">
                        Card number
                      </label>
                      <input
                        type="text"
                        name="card-number"
                        id="card-number"
                        className="pr-32 focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                        placeholder="1234 1234 1234 1234"
                      />
                      <img 
                        src="/courses/major-credit-card-icons.png"
                        className="absolute top-2 right-2 "
                      />
                    </div>
                    <div className="flex -space-x-px">
                      <div className="w-1/2 flex-1 min-w-0">
                        <label htmlFor="card-expiration-date" className="sr-only">
                          Expiration date
                        </label>
                        <input
                          type="text"
                          name="card-expiration-date"
                          id="card-expiration-date"
                          className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                          placeholder="MM / YY"
                        />
                      </div>
                      <div className="relative flex-1 min-w-0 ">
                        <label htmlFor="card-cvc" className="sr-only">
                          CVC
                        </label>
                        <input
                          type="text"
                          name="card-cvc"
                          id="card-cvc"
                          className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                          placeholder="CVC"
                        />
                        <img 
                          src="/courses/credit-card.png"
                          className="absolute top-2 right-2 "
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>                

                <div className="col-span-3 sm:col-span-4 mt-6">
                  <label htmlFor="name-on-card" className="block text-sm font-normal text-black">
                    Name on the card
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name-on-card"
                      name="name-on-card"
                      autoComplete="cc-name"
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="billing-heading" className="mt-6">
              <fieldset className="mt-6 bg-white">
                <legend id="billing-heading" className="block text-sm font-normal text-black">Country and zip-code</legend>
                <div className="mt-1 rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                    >
                      <option>Danmark</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="sr-only">
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                      placeholder="ZIP / Postal code"
                    />
                  </div>
                </div>
              </fieldset>
            </section>

            <div className="mt-10 sm:flex sm:flex-col sm:items-center ">
              <button
                // type="submit"
                type="button"
                className="w-full bg-black border border-transparent rounded-md shadow-sm py-2 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                onClick={() => router.push('/checkout/thankyou')}
              >
                Pay
              </button>
              <p className="lg:max-w-xs text-sm text-center text-xs text-black p-5">
                By making this by making this purchase you agree to our <a href="#" className="text-blue-400 underline">terms</a> and <a href="#" className="text-blue-400 underline">privacy</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
