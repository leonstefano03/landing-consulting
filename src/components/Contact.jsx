export default function ContactPage({ imgPeople }) {
  return (
    <header className="relative w-full h-screen  overflow-hidden flex justify-center items-end ">
      <section className="w-full h-full absolute flex flex-col justify-between overflow-hidden ">
        <div
          className="left-0 bottom-0 absolute inset-0 bg-fixed bg-cover bg-center z-5  "
          style={{
            backgroundImage: `url(${imgPeople})`,
            filter: 'blur(3px)',
          }}
        />
      </section>

      <div className="w-[90%] sm:w-[70%] h-[84%] relative z-5  flex items-center">
        <div class="w-full max-h-[90%] relative overflow-hidden z-0 bg-gray-900 backdrop-blur-sm bg-opacity-90 p-8  shadow-md before:w-24 before:h-24 before:absolute before:bg-green-700 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-green-900 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 class=" text-white text-sm sm:text-lg text-bold">CONTACT US</h2>
          <span className="">_________</span>

          <h1 class="text-3xl font-semibold text-white  sm:flex hidden mb-4">
          How can we help you?
          </h1>
          <p className="text-sm sm:text-lg">
            Our goal is to help you enhance your organization. We are by your
            side all the way, getting personally involved and creating a
            long-term relationship to move forward together with confidence.
          </p>
         
          <p className=" sm:mb-6 sm:mt-4 text-sm sm:text-lg">
            Write to us and we will call you without obligation.
          </p>
          <form method="post" action="#">
            <div className=" grid grid-cols-2 gap-x-4 gap-y-2 mb-2">
              <div class="">
                <input
                  class="mt-1 p-2 w-full bg-gray-800 border border-gray-700  text-white"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>

              <div class="">
                <input
                  class="mt-1 p-2 w-full bg-gray-800 border border-gray-700  text-white"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div class="">
                <input
                  class="mt-1 p-2 w-full bg-gray-800 border border-gray-700  text-white"
                  type="company"
                  placeholder="Company"
                />
              </div>

              <div class="">
                <input
                  class="mt-1 p-2 w-full bg-gray-800 border border-gray-700  text-white"
                  name="phone"
                  id="phone"
                  type="phone"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="mb-2 sm:mb-4">
              <textarea
                class="mt-1 p-2 w-full bg-gray-800 border border-gray-700 max-h-[300px]  text-white"
                rows="3"
                name="help"
                id="help"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button
                class="bg-gradient-to-r from-black via-green-900 to-gray-800 text-white px-4 py-2 font-bold hover:opacity-80"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
