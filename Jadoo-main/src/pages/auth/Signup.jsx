import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import InputBox from '../../components/ui/InputBox';

const Signup = () => {
    const {signup, gmailLogin, githubLogin, anonymousLogin} = useAuth();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const onChange = (e)=> {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    const onSubmit = (e)=> {
        e.preventDefault();
        signup(userData.email, userData.password)
    }


  return (
        <section className="bg-gray-100 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">

              <form onSubmit={onSubmit}>
                <InputBox
                onChange={(e)=> onChange(e)}
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <InputBox
                onChange={(e)=> onChange(e)}
                  type="text"
                  name="password"
                  placeholder="Password"
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <p className="mb-6 text-base text-secondary-color dark:text-dark-7">
                Connect With
              </p>
              <ul className="-mx-2 mb-12 flex justify-between">
                <li className="w-full px-2">
                     <a
                    href="/#"
                    className="flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                  >
                  <FaFacebookF />

                  </a>
                </li>
                <li className="w-full px-2">
                     <button
                    className="w-full flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                    onClick={githubLogin}
                  >
                  <FaGithub />

                  </button>
                </li>
                <li className="w-full px-2">
                  <button
                    className="w-full cursor-pointer flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                    onClick={gmailLogin}
                  >
                    <FaGoogle />
                  </button>
                </li>
                <li className="w-full px-2">
                  <button
                    className="w-full cursor-pointer flex h-11 items-center justify-center rounded-md bg-[#D64937] hover:bg-opacity-90"
                    onClick={anonymousLogin}
                  >
                    AnonymousLogin
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup