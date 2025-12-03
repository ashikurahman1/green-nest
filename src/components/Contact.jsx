export default function ContactUs() {
  return (
    <div className="  bg-gradient-to-b from-green-50 via-white to-white py-30 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-10/12 mx-auto  ">
        <div className="">
          <main className="rounded-2xl bg-white shadow-md p-8 ">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                {/* Leaf icon */}
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8S3 12 3 12z"
                  ></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-green-800">
                  Contact Greennest
                </h2>
                <p className="mt-1  ">
                  Questions, orders or plant care tips? We'd love to hear from
                  you.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM2 22a10 10 0 0120 0"
                  ></path>
                </svg>
                <div>
                  <div className=" text-green-700 font-medium">Email</div>
                  <div className=" ">hello@greennest.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.9 1.4l.6 2.2a2 2 0 01-.45 1.9l-1.3 1.6a12 12 0 005.6 5.6l1.6-1.3a2 2 0 011.9-.45l2.2.6A2 2 0 0121 17.72V21a2 2 0 01-2 2A19 19 0 013 5z"
                  ></path>
                </svg>
                <div>
                  <div className=" text-green-700 font-medium">Phone</div>
                  <div className=" ">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="pt-4 border-t border-green-50">
                <p className=" ">
                  Our support is available Monday — Friday, 9am — 6pm. We
                  usually reply within 24 hours.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="rounded-lg overflow-hidden bg-green-50 border border-green-100 p-4">
                <div className=" text-green-700 font-medium">
                  Visit our store
                </div>
                <div className="mt-1">42 Plant Lane, Green City</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
