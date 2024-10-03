"use client";
export default function Result() {
  function generateResults() {
    // Get form values with null check
    const rollNoInput = document.getElementById("rollNo") as HTMLInputElement | null;
    const classSelect = document.getElementById("class") as HTMLSelectElement | null;
    const yearSelect = document.getElementById("year") as HTMLSelectElement | null;
    const resultContainer = document.getElementById("resultContainer") as HTMLElement | null;
    const resultHeading = document.getElementById("resultHeading") as HTMLElement | null;
    const showResultButton = document.getElementById("showResultButton") as HTMLButtonElement | null;

    if (!rollNoInput || !classSelect || !yearSelect || !resultContainer || !resultHeading || !showResultButton) {
      alert("Form element not found");
      return;
    }

    const rollNo = rollNoInput.value;
    const selectedClass = classSelect.value;
    const selectedYear = yearSelect.value;

    // Clear previous results
    resultContainer.innerHTML = ''; 

    // Ensure roll number is between 1 and 100
    const rollNoNum = Number(rollNo);
    if (isNaN(rollNoNum) || rollNoNum < 1 || rollNoNum > 100) {
      alert("Please enter a roll number between 1 and 100.");
      return;
    }

    if (rollNo === "" || selectedClass === "" || selectedYear === "") {
      alert("Please fill in all the details");
      return;
    }

    // Disable the button after the first click
    showResultButton.disabled = true;
    showResultButton.classList.add("cursor-not-allowed", "opacity-50");

    // Subjects list
    const subjects = ["Mathematics", "English", "Physics", "Computer Science", "Chemistry"];
    resultHeading.style.display = 'block'; // Show the result heading after clicking
    resultContainer.innerHTML = ''; // Clear the previous result if any

    // Generate random result (Cleared or Failed) for each subject
    const results = subjects.map((subject) => {
      const status = Math.random() > 0.5 ? "Cleared" : "Failed";
      return { subject, status };
    });

    // Display the results
    results.forEach((result) => {
      const resultRow = document.createElement("div");
      resultRow.classList.add("flex", "justify-between", "items-center", "border-b", "py-2");

      const subjectName = document.createElement("span");
      subjectName.classList.add("text-lg");
      subjectName.innerText = result.subject;

      const status = document.createElement("span");
      status.classList.add("font-bold", result.status === "Cleared" ? "text-green-500" : "text-red-500");
      status.innerText = result.status;

      resultRow.appendChild(subjectName);
      resultRow.appendChild(status);
      resultContainer.appendChild(resultRow);
    });
  }

  return (
    <main className="bg-gradient-to-br from-[#eef2f7] to-[#d9e2ec] min-h-screen flex flex-col items-center justify-center py-12">
      {/* Title Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#1c3549]">Check Your Results</h1>
        <p className="text-lg text-gray-700 mt-2">Enter your details below to view your examination results.</p>
        <p className="text-sm text-gray-500 mt-1">Please enter a roll number between 1 and 100.</p>
      </section>

      {/* Form Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="mb-4">
          <label htmlFor="rollNo" className="block text-sm font-semibold text-[#1c3549] mb-2">Roll Number</label>
          <input
            type="text"
            id="rollNo"
            placeholder="Enter your Roll Number"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1c3549]"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="class" className="block text-sm font-semibold text-[#1c3549] mb-2">Select Class</label>
          <select
            id="class"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1c3549]"
          >
            <option value="" disabled selected>Select your class</option>
            <option value="10">Class 10</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block text-sm font-semibold text-[#1c3549] mb-2">Year</label>
          <select
            id="year"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1c3549]"
          >
            <option value="2024" selected>2024</option>
          </select>
        </div>

        <button
          id="showResultButton"
          className="bg-[#1c3549] text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-[#2c4662] transition-colors duration-300"
          onClick={generateResults}
        >
          Show Results
        </button>

        {/* Results Section */}
        <h6
          id="resultHeading"
          className="text-3xl font-semibold text-[#1c3549] text-center mt-6 mb-4"
          style={{ display: 'none' }}  // Initially hidden
        >
          Your Results
        </h6>
        <div id="resultContainer" className="flex flex-col space-y-4"></div>
      </section>
    </main>
  );
}
