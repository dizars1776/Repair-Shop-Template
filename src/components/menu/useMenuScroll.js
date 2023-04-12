function useMenuScroll() {
  const findSectionToScroll = (e) => {
    const [href] = e.currentTarget.href.split('#').reverse()
    const sectionToScroll =
      href === 'call-to-action'
        ? document.getElementById(href).offsetTop - 200
        : document.getElementById(href).offsetTop

    return sectionToScroll
  }

  const simpleScroll = (e) => {
    e.preventDefault()
    const sectionToScroll = findSectionToScroll(e)

    window.scrollTo({
      top: sectionToScroll,
      behavior: 'smooth',
    })
  }

  return { simpleScroll }
}

export default useMenuScroll
