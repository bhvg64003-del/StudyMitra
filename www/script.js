// ===============================
// StudyMitra Navigation
// ===============================

function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ===============================
// Home
// ===============================

function goHome() {
  showScreen("home");
}


// ===============================
// Courses
// ===============================

function openCourses() {
  showScreen("courses");
}

function openCourse() {
  showScreen("courseDetail");
}


// ===============================
// Subject
// ===============================

function openSubject(subjectName) {
  const title = document.getElementById("subjectTitle");

  if (title) {
    title.textContent = subjectName;
  }

  showScreen("subject");
}


// ===============================
// Chapter
// ===============================

function openChapter(chapterName) {
  const title = document.getElementById("chapterTitle");

  if (title) {
    title.textContent = chapterName;
  }

  showScreen("chapter");
}


// ===============================
// Search Courses
// ===============================

function searchCourses(value) {
  const searchText = value.toLowerCase().trim();
  const courses = document.querySelectorAll(".course-card");

  courses.forEach((course) => {
    const name = (
      course.dataset.name +
      " " +
      course.innerText
    ).toLowerCase();

    if (name.includes(searchText)) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}


// ===============================
// Chapter Tabs
// ===============================

function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const tabs = document.querySelectorAll(".tab");

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const selectedContent = document.getElementById(tabId);

  if (selectedContent) {
    selectedContent.classList.add("active");
  }

  tabs.forEach((tab) => {
    const action = tab.getAttribute("onclick");

    if (action && action.includes("'" + tabId + "'")) {
      tab.classList.add("active");
    }
  });
}


// ===============================
// Quick Access / Coming Soon
// ===============================

function showMessage(name) {
  alert(name + " section will be available soon.");
}
 // ===============================
// Edit Profile
// ===============================

function editProfile() {
  const name = prompt("Enter your name:", "StudyMitra Student");

  if (name && name.trim() !== "") {
    const nameElement = document.querySelector(".profile-info h3");
    if (nameElement) {
      nameElement.textContent = name.trim();
    }
  }
}
 
// ===============================
// Course Filters
// ===============================

function filterCourses() {
  const exam = document.getElementById("examSelect").value;
  const className = document.getElementById("classSelect").value;
  const searchBox = document.querySelector(".search");

  const searchText = searchBox
    ? searchBox.value.toLowerCase().trim()
    : "";

  const courses = document.querySelectorAll(".course-card");

  courses.forEach((course) => {
    const text = course.innerText.toLowerCase();

    const examMatch =
      exam === "🔬 Select Exam" ||
      exam === "Other" ||
      text.includes(exam.toLowerCase());

    const classMatch =
      className === "🎓 Select Class" ||
      text.includes(className.toLowerCase());

    const searchMatch =
      text.includes(searchText);

    course.style.display =
      examMatch && classMatch && searchMatch
        ? "block"
        : "none";
  });
}


// ===============================
// Course Filter Events
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const examSelect = document.getElementById("examSelect");
  const classSelect = document.getElementById("classSelect");

  if (examSelect) {
    examSelect.addEventListener("change", filterCourses);
  }

  if (classSelect) {
    classSelect.addEventListener("change", filterCourses);
  }
});

// ===============================
// Automatic Lecture System
// ===============================

const lectureData = {
  "Ch-01 : Mathematical Tools": [
    { title: "Lecture 01", video: "videos/lecture01.mp4" },
    { title: "Lecture 02", video: "videos/lecture02.mp4" },
    { title: "Lecture 03", video: "videos/lecture03.mp4" },
    { title: "Lecture 04", video: "videos/lecture04.mp4" },
    { title: "Lecture 05", video: "videos/lecture05.mp4" }
  ]
};

function loadLectures(chapterName) {
  const lectureBox = document.getElementById("lectures");

  if (!lectureBox) return;

  lectureBox.innerHTML = "";

  const lectures = lectureData[chapterName] || [];

  lectures.forEach((lecture, index) => {

    const card = document.createElement("div");

    card.className = "material-card";

    card.innerHTML = `
      🎥 ${lecture.title}
      <span>▶️</span>
    `;

    card.onclick = function () {
      openVideo(lecture.title, lecture.video);
    };

    lectureBox.appendChild(card);
  });
}


// ===============================
// Video Player
// ===============================

function openVideo(title, videoPath) {

  const video = document.createElement("video");

  video.controls = true;
  video.autoplay = true;
  video.style.width = "100%";
  video.style.borderRadius = "14px";

  video.src = videoPath;

  const lectureBox = document.getElementById("lectures");

  if (lectureBox) {
    lectureBox.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = title;

    lectureBox.appendChild(heading);
    lectureBox.appendChild(video);
  }
}
/* ===============================
   Premium Home Screen
   =============================== */

.home-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px;
  margin-bottom: 18px;
  border-radius: 22px;
  background: linear-gradient(135deg, #18243a, #101827);
}

.hero-small {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.65;
}

.home-hero h2 {
  margin: 7px 0 5px;
  font-size: 25px;
}

.home-hero p {
  margin: 0;
  opacity: 0.65;
  font-size: 13px;
}

.hero-icon {
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: rgba(255,255,255,0.08);
  font-size: 28px;
}

.progress-card {
  padding: 18px;
  margin-bottom: 24px;
  border-radius: 20px;
  background: #151d2d;
}

.progress-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-top span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.55;
}

.progress-top h3 {
  margin: 6px 0 0;
  font-size: 15px;
}

.progress-top strong {
  font-size: 20px;
}

.progress-bar {
  height: 7px;
  margin-top: 16px;
  border-radius: 10px;
  background: rgba(255,255,255,0.08);
  overflow: hidden;
}

.progress-bar div {
  width: 0%;
  height: 100%;
  border-radius: 10px;
  background: #6c63ff;
}

.progress-card p {
  margin: 10px 0 0;
  font-size: 11px;
  opacity: 0.5;
}

.section-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-row > span {
  font-size: 12px;
  opacity: 0.55;
}

.quick-grid button {
  min-height: 82px;
}

.quick-icon {
  font-size: 25px;
  margin-bottom: 7px;
}

.featured-card {
  border: 1px solid rgba(108, 99, 255, 0.25);
}

.home-card-content {
  flex: 1;
}
// ===============================
// FINAL ANDROID BACK BUTTON
// ===============================

document.addEventListener("DOMContentLoaded", async () => {

  if (!window.Capacitor) return;

  const App = window.Capacitor.Plugins.App;

  if (!App) return;

  await App.addListener("backButton", () => {

    const activeScreen = document.querySelector(".screen.active");

    if (!activeScreen) return;

    switch (activeScreen.id) {

      case "chapter":
        showScreen("subject");
        break;

      case "subject":
        showScreen("courseDetail");
        break;

      case "courseDetail":
        showScreen("courses");
        break;

      case "courses":
        showScreen("home");
        break;

      case "profile":
        showScreen("home");
        break;

      case "home":
        App.exitApp();
        break;
    }

  });

});
.card-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1px;
  opacity: 0.5;
}

.home-card-content h3 {
  margin: 5px 0;
}

.home-card-content p {
  margin: 0;
}
