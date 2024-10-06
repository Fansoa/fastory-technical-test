import { FormProvider } from "react-hook-form"
import useLoginForm from "../hooks/useLoginForm"
import TextInput from "../components/TextInput"
import backgroundImage from "/images/LOGIN_BG.jpg"
import styles from "../styles/login.module.css"
import classNames from "../utils/methods/classNames"

const LoginPage = () => {
  const { methods, onSubmit } = useLoginForm()
  return (
    <div 
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: "cover"
      }} 
      className="h-screen flex items-center justify-center"
    >
      <div className={classNames("flex items-center justify-center h-full w-full", styles.loginPage)}>

      <FormProvider {...methods}>
        <form 
          className="flex flex-col items-center gap-24 h-fit p-16 rounded-md "
          onSubmit={onSubmit}
        >
          <h1 className={classNames("font-display text-4xl font-bold text-primary uppercase select-none", styles.twinkle)}>Please identify yourself</h1>
          <div className="flex items-center flex-col gap-8">
            <div className="h-14">
              <TextInput name="username" placeholder="Username" autoComplete="username"/>
            </div>
            <div className="h-14">
              <TextInput name="password" type="password" placeholder="Password" autoComplete="current-password"/>
            </div>
            <button className="skew-x-[45deg] w-24 p-2 text-primary bg-secondary" type="submit" onClick={onSubmit}>
              <p className="skew-x-[-45deg]">Log in</p>
            </button>
          </div>
        </form>
      </FormProvider>
      </div>
    </div>
  )
}

export default LoginPage
