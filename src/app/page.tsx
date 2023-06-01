import ProjectPreview from '@/components/ProjectPreview/page'
import { PhoneIcon, MailIcon, MessageCircleIcon } from 'lucide-react'
import { CSSProperties } from 'react'

export default async function Home() {
  return (
    <main>
      <section className="section-separator mx-auto my-0 flex h-full min-h-[97vh] max-w-5xl flex-col items-center justify-center p-14 text-center">
        <h1 className="text-2xl leading-relaxed md:text-4xl">
          Welcome to my World
        </h1>
        <p
          className="typing-animation text-sm transition-all md:text-xl"
          style={{ '--lineHeight': '1.8rem', '--delay': '0s' } as CSSProperties}
        >
          I am Claudio Filho, I am full-stack web developer and UI/UX javascript
          specialist. Check my socials medias and take one view on my{' '}
          <a
            className="text-[#c17dff] transition-colors hover:text-[#c98fff]"
            href={`${process.env.URL}/#portifolio-section`}
          >
            portifolio pages
          </a>
          .
        </p>
      </section>
      <section
        id="portifolio-section"
        className="section-separator mx-auto my-0 flex h-auto max-h-[97vh] max-w-5xl  flex-col gap-10 p-14 text-start"
      >
        <div>
          <h1 className="text-2xl leading-relaxed md:text-4xl">Portifolio</h1>
          <p className="text-sm md:text-xl">
            Come check some of my jobs and check yours all tech i used
          </p>
        </div>
        <ProjectPreview />
      </section>
      <section className="mx-auto my-0 flex h-auto max-h-[97vh] max-w-5xl flex-col gap-10 p-14 text-start">
        <div>
          <h1 className="text-2xl leading-relaxed md:text-4xl">Contacts</h1>
          <p className="text-sm md:text-xl">
            Come check some of my jobs and check yours all tech i used
          </p>
        </div>
        <ul className="flex justify-evenly">
          <li className="h-20 w-20 rounded-lg border-4 border-gray-50 transition-colors delay-75 ease-in-out hover:border-gray-300 hover:text-gray-300">
            <a
              className="flex h-full w-full items-center justify-center"
              href="https://wa.me/351961358647"
              target={'_blank'}
              rel="noreferrer"
              aria-label="Go to Whatsapp"
            >
              <MessageCircleIcon className="h-12 w-12" />
            </a>
          </li>
          <li className="h-20 w-20 rounded-lg border-4 border-gray-50 transition-colors delay-75 ease-in-out hover:border-gray-300 hover:text-gray-300">
            <button
              // onClick={() => setModalIsOpen(!modalIsOpen)}
              className="flex h-full w-full items-center justify-center"
              aria-label="Open Form Email"
              type="button"
            >
              <MailIcon className="h-12 w-12" />
            </button>
          </li>
          <li className="h-20 w-20 rounded-lg border-4 border-gray-50 transition-colors delay-75 ease-in-out hover:border-gray-300 hover:text-gray-300">
            <a
              className="flex h-full w-full items-center justify-center"
              href="tel:+351-961-358-647"
              aria-label="Tell to my number: +351-961-358-647"
            >
              <PhoneIcon className="h-12 w-12 " />
            </a>
          </li>
        </ul>
      </section>
    </main>
  )
}
