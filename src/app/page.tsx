import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#eef2f7] to-[#d9e2ec] min-h-screen flex flex-col items-center justify-center py-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-[#1c3549] animate-fadeIn">
          Welcome to the Student Result Portal
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-slideUp">
          Stay updated with your academic performance. Easily access and review your exam results in real-time.
        </p>
      </section>

      <div className="mt-10 space-y-4">
        <Link href="/result"><button  className="bg-[#1c3549] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#2c4662] transition-transform transform hover:scale-105 animate-bounce">
          View Results
        </button></Link>
      </div>
      <section className="mt-16 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="relative w-full lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c3549] via-[#2c4662] to-transparent opacity-40 rounded-lg"></div>
          <Image
            src="/hero.png"
            alt="Student Exam Portal"
            className="rounded-lg shadow-lg w-full h-auto z-10 relative"
            width={800}
            height={600}
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6 text-[#1c3549]">
          <h2 className="text-4xl font-semibold animate-pulse">
            Your Academic Journey at Your Fingertips
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This portal is designed to provide students with quick and easy access to their exam results and academic records. No more waiting for long hours—your results are just a click away.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether youre tracking your progress, checking for improvements, or just reviewing past performance, this portal is your companion through every step of your academic journey.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our goal is to ensure students have the tools they need to succeed. With a user-friendly interface and secure, real-time data, managing your academic progress has never been easier.
          </p>
        </div>
      </section>
    </main>
  );
}
