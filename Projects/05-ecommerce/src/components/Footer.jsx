/* eslint-disable react/prop-types */
import './Footer.css'

export function Footer ({filters}) {

  return (
    <footer className='footer'>
        {
            JSON.stringify(filters)
        }
    </footer>
  )
}