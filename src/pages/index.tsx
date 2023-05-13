import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const links = [
  {
    text: "Colorbox",
    url: "http://je-miralles.github.io/colorbox",
    description: "Unapologetically randomized colours.",
    color: "text-sky-700",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="p-24 text-zinc-800 font-sans">
      <h1 className="font-bold text-2xl max-w-xs mb-8">juan emilio miralles</h1>

      <ul className="mb-24 pl-0">
        {links.map(link => (
          <li key={link.url} className="font-light text-2xl max-w-xl mb-8">
            <span>
              <a
                className={`${link.color} font-bold text-base align-middle`}
                href={`${link.url}`}
              >
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>juan emilio miralles</title>
