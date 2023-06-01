import * as Icons from 'lucide-react'

function selectIcon(name: string) {
  const Icon = (Icons as any)[name]
  return <Icon />
}

const listSocialMedias = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/claudio.martins.39',
    bgColor: 'rgb(59, 89, 152)',
    icon: 'Facebook',
  },
  {
    name: 'Instagram',
    url: 'https://Instagram.com/DevClaudioFilho',
    bgColor:
      'radial-gradient(circle at 30% 107%, rgb(253, 244, 151) 0%, rgb(253, 244, 151) 5%, rgb(253, 89, 73) 45%, rgb(214, 36, 159) 60%, rgb(40, 90, 235) 90%)',
    icon: 'Instagram',
  },
  {
    name: 'Github',
    url: 'https://github.com/DevClaudioFilho',
    bgColor: 'rgb(91, 89, 89)',
    icon: 'Github',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/claudio-martins-de-pinho-filho-99a6a1192/',
    bgColor: 'rgb(14, 118, 168)',
    icon: 'Linkedin',
  },
]

export default function SocialMedia() {
  return (
    <ul className="fixed right-0 top-0 z-50 flex">
      {listSocialMedias.map((socialMedias) => (
        <li
          className="h-10 w-10 transition-all duration-700 ease-in-out hover:h-14"
          style={{ background: socialMedias.bgColor }}
          key={socialMedias.name}
        >
          <a
            className="flex h-full w-10 items-center justify-center bg-transparent "
            href="https://github.com/DevClaudioFilho"
            target={'_blank'}
            rel="noreferrer"
            aria-label="Github"
          >
            {selectIcon(socialMedias.icon)}
          </a>
        </li>
      ))}
    </ul>
  )
}
