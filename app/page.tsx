import Image from "next/image";
import Link from "next/link";
import DemoGif from "../app/images/landingPage/demo.png";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";


export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log("-------------session----------",session)

  return (
    <main className="">
      <div className="relavtive isolate pt-14 dark:bg-gray-900">
        <div
          className="absolute insert-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem) aspect-[1155/678] w-[36.125rem]
                  -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]
                  opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
        <div className="py-12 sm:py-20 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Chat with Anyone,anywhere!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              You speak your language, they speak their language.{""}
              <span className="text-indigo-600 dark:text-indigo-500">
                Let AI handle the translation
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing <span aria-hidden="true"></span>
              </Link>
            </div>
            <div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 lg:rounded-2xl lg:p-4">
                  {/* <Image
                           unoptimized
                           src={DemoGif}
                           alt="App screenshot"
                           width={100}
                           height={1}
                          className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                          /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
