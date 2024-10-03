export default function Help() {
  return (
    <main className="bg-gradient-to-br from-[#eef2f7] to-[#d9e2ec] min-h-screen py-12">
      <section className="text-center space-y-6 mb-8">
        <h1 className="text-4xl font-bold text-[#1c3549]">Help & Support</h1>
        <p className="text-base text-gray-700 max-w-2xl mx-auto">
          Were here to assist you. If you have any questions or issues, please find the answers below or contact us directly for help.
        </p>
      </section>
        <section className="px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-[#1c3549]">How do I check my exam results?</h2>
          <p className="text-gray-700 mt-2">
            To view your exam results, click on the “View Results” button on the home page. You’ll be redirected to a page where you can enter your roll number and access your results.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-[#1c3549]">What should I do if I cant find my result?</h2>
          <p className="text-gray-700 mt-2">
            If you’re unable to locate your result, please verify your roll number and try again. If the issue persists, contact our support team for assistance.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-[#1c3549]">How do I contact support for further help?</h2>
          <p className="text-gray-700 mt-2">
            For any queries, feel free to reach out to us via email at{" "}
            <a
              href="mailto:help@studentportal.com"
              className="text-[#1c3549] underline hover:text-[#2c4662] transition-colors duration-300"
            >
              help@studentportal.com
            </a>{" "}
            or call us at +123-456-7890. Were here to help you Monday to Friday, 9 AM to 5 PM.
          </p>
        </div>
      </section>
       <section className="mt-12 px-6 lg:px-20 flex justify-center">
        <div className="bg-[#4a6072] text-white rounded-lg p-6 shadow-lg hover:shadow-xl w-full max-w-xl">
          <h2 className="text-3xl font-bold">Maximize Your Experience</h2>
          <p className="text-lg mt-4">
            Here are some tips to help you navigate the Student Result Portal:
          </p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>Ensure you enter your roll number correctly for accurate results.</li>
            <li>Bookmark the portal for easy access in the future.</li>
            <li>Regularly check for updates regarding examination schedules and results.</li>
            <li>If you face any issues, dont hesitate to contact support.</li>
          </ul>
          <p className="mt-2">
            Our goal is to provide you with a seamless experience. Enjoy exploring your academic journey!
          </p>
        </div>
      </section>
    </main>
  );
}
