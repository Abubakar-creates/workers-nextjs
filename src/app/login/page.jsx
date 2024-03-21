import Link from "next/link";
import { FaUser,FaLock } from "react-icons/fa";
 
const Page = () => {
  return (
    <>
      <section className="bg-[#D1D1D1] h-full ">
        <div className="container h-full w-[90%] m-auto py-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 ">
            <div className="w-full">
              <div className="block rounded-lg bg-[#E3E3E3] shadow-lg ">
                <div className="flex flex-wrap  ">
                  <div className="px-4 md:px-0 lg:w-6/12 m-auto">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className=" mt-1 pb-1 text-xl font-semibold">
                          Welcome Back
                        </h4>
                      </div>

                      <form>
                        <p className="mb-4 text-center mt-4">
                          Please login to your account
                        </p>
                        <div
                          className="mb-4"
                         >
                          <input
                            type="text"
                            className="w-full border-[1px] border-white rounded-xl bg-transparent pl-8 py-[0.36rem]  outline-none "
                            placeholder="Username"
                          />
                          <FaUser className="mt-[-28px] ml-[10px]" />
                        </div>

                        <div
                          className="mb-4 my-6" >
                          <input
                            type="password"
                            className="w-full border-[1px] border-white rounded-xl bg-transparent pl-8 py-[0.36rem]  outline-none "
                            placeholder="Password"
                          />
                           <FaLock className="mt-[-28px] ml-[10px]" />
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Don&apos;t have an account?</p>
                          <Link href="/register">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-[#87766A] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal focus:ring-0 "
                            >
                              Register
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none max-md:hidden"
                    style={{
                      backgroundImage: `url('./assets/banner.png')`,
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      {/* <h4 className="mb-6 text-xl font-semibold">
                          We are more than just a company
                        </h4>
                        <p className="text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                          consequat.
                        </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
