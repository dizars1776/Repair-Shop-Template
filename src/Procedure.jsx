import React from 'react'

class Procedure extends React.Component {
  render() {
    const themeData = this.props.themeData.procedure
    return (
      <section id="normal-width-section">
        <div className="container mx-auto">
          <aside>
            <p>
              <i></i>
              aside text
            </p>
          </aside>
          <article>
            {themeData ? (
              <>
                <h2>{themeData.title}</h2>
                <ul
                  aria-label={themeData.ariaLabel}
                  className="before:content-[attr(aria-label)]"
                >
                  {themeData.liItems.map((li, index) => (
                    <li key={index}>{li}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2>Procedure title</h2>
                <ul>
                  <li>list's title</li>
                  <li>list's title</li>
                  <li>list's title</li>
                </ul>
              </>
            )}
          </article>
        </div>
      </section>
    )
  }
}

export default Procedure
