import { sha256 } from '../utils/hash'

/**
 * Get hash from an element' the URL or the title.
 * @param element The element
 * @returns The hash string of element
 */
export default async function (element: Element) {
  if (element === null) {
    return null
  }

  let hash: string = null

  const anchor = element.querySelector<HTMLAnchorElement>('.title a')
  if (anchor === null) {
    const title = element.querySelector<HTMLAnchorElement>('.title')
    if (title === null) {
      return null
    }

    hash = await sha256(title.textContent)
  } else {
    hash = await sha256(anchor.href)
  }

  return hash
}
