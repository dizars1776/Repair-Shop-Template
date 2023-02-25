function DesktopNav({ themeData }) {
  return (
    <div className="hidden uppercase tracking-wider sm:block">
      <ul id="menu" className="flex gap-x-4">
        {themeData.menuItems
          ? themeData.menuItems.map(([title, url]) => (
              <li key={title}>
                <a href={url} className="hover:text-rose-800">
                  {title}
                </a>
              </li>
            ))
          : [1, 2, 3].map((e) => (
              <li key={e}>
                <a href="#">item {e}</a>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default DesktopNav
