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
