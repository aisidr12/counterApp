import PropTypes from 'prop-types'

//export function App() {

//<> Esto es equivalente a utilizar un fragmento como padre
export const App = ({ title, subtitle }) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  )

}

//Proptypes para obligar a que se envie siempre
App.proptypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number
}

// Para usarlo como mensajes para cuando no se envian los props
App.defaultProps = {
  title : 'No hay titulo',
  subtitle: 'no hay subtitulo'
}

