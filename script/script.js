// Job Card Container Part
const jobsCard = [
  {
    id: 1,
    companyName: "Mobile Firs Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    status: "NOT APPLIED",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    id: 2,
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    status: "NOT APPLIED",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    id: 3,
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    status: "NOT APPLIED",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    id: 4,
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    status: "NOT APPLIED",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    id: 5,
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: " $110,000 - $150,000",
    status: "NOT APPLIED",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    id: 6,
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    status: "NOT APPLIED",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    id: 7,
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    status: "NOT APPLIED",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    id: 8,
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    status: "NOT APPLIED",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  },
];

// job-container section
function JobsHandler(tabAll = "all") {
  //
  const container = document.getElementById("job-container");
  container.innerHTML = "";
  let jobCardContainer;
  //
  if (tabAll == "all") {
    jobCardContainer = jobsCard;
  } else {
    jobCardContainer = jobsCard.filter((job) => job.status === tabAll);
  }
  //
  document.getElementById("available-count").innerText =
    jobCardContainer.length + " Jobs";

  //
  if (jobCardContainer.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-base-200 text-center py-20">
        <img src="./jobs.png" alt="" class="mx-auto">
        <h2 class="text-xl font-bold">No jobs Available</h2>
        <p class="text-gray-500">Please check again later.</p>
      </div>
    `;
  }

  //
  jobCardContainer.forEach((job) => {
    //
    const cards = document.createElement("div");
    cards.className =
      "card bg-base-200 shadow-sm border border-gray-100 p-5 mb-4";
    //
    cards.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="space-y-3">
                        <h2 class="text-xl font-bold">${job.companyName}</h2>
                        <p>${job.position}</p>
                        <p>${job.location} • ${job.type} • ${job.salary}</p>
                        <button class="btn btn-sm bg-blue-500/20 text-black pointer-events-none inline-block w-[105px]">${job.status}</button>
                        <p class="mt-2">${job.description}</p>
                    </div>
                    <button onclick="deleteJob(${job.id})" class="btn btn-sm btn-base-200 text-red-500">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
                <div class="mt-4 flex gap-2">
                    <button class="btn btn-success btn-sm"
                        onclick="cardBtnClick(${job.id}, 'interview')">
                            Interview
                    </button>

                    <button class="btn btn-error btn-outline btn-sm"
                        onclick="cardBtnClick(${job.id}, 'rejected')">
                            Rejected
                    </button>
                </div>
            `;

    container.appendChild(cards);
  });

  updateCounts();
}
// counting section
function updateCounts() {
  //
  document.getElementById("total-count").innerText = jobsCard.length;
  //
  document.getElementById("interview-count").innerText = jobsCard.filter(
    (j) => j.status === "interview",
  ).length;

  //
  document.getElementById("rejected-count").innerText = jobsCard.filter(
    (j) => j.status === "rejected",
  ).length;
}
// even handler section part
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    //
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("btn-primary"));
    //
    this.classList.add("btn-primary");
    //
    JobsHandler(this.id);
  });
});
JobsHandler();
