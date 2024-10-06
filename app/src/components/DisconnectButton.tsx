import useAuth from "../hooks/useAuth"

const DisconnectButton = () => {
  const { signOut } = useAuth()
  return (
    <button onClick={signOut} className="pl-4 text-primary font-body">Disconnect</button>
  )
}

export default DisconnectButton
