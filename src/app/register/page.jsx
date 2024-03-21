import Link from "next/link";

const Page = () => {
  return (
    <>
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap flex-row-reverse">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                      </div>

                      <form>
                        <p className="mb-4 mt-6 text-center">
                          Please Enter the details
                        </p>
                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init
                        >
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] outline-none "
                            placeholder="Username"
                          />
                        </div>

                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init
                        >
                          <input
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] outline-none "
                            placeholder="Password"
                          />
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="button"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Already have an account ?</p>
                          <Link href="/login">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase "
                            >
                              Login
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{
                      backgroundImage: `url('./assets/worker.png')`,
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
