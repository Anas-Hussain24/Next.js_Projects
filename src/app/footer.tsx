export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-[#1c3549] to-[#2c4662] py-8 text-center text-white">
        <div className="space-y-4">
          <p className="text-lg font-semibold">© 2024 Student Result Portal. All rights reserved.</p>
          <p className="text-md">
            For any queries or support, feel free to reach out to our helpdesk at{" "}
            <a
              href="mailto:help@studentportal.com"
              className="text-[#d9e2ec] hover:text-white underline transition-colors duration-300"
            >
              help@studentportal.com
            </a>
          </p>
        </div>
      </footer>
    );
  }
  