import './Host.scss'

function Host({ name, picture }) {
  // La maquette affiche le prenom et le nom sur deux lignes.
  const [firstName, ...lastNames] = name.split(' ')

  return (
    <div className="host">
      <p className="host__name">
        <span>{firstName}</span>
        <span>{lastNames.join(' ')}</span>
      </p>
      <img className="host__picture" src={picture} alt={name} />
    </div>
  )
}

export default Host
