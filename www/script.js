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
// Android Back Button
// ===============================

document.addEventListener("backbutton", function () {

  const screens = document.querySelectorAll(".screen");
  let currentScreen = "";

  screens.forEach((screen) => {
    if (screen.classList.contains("active")) {
      currentScreen = screen.id;
    }
  });

  if (currentScreen === "chapter") {
    showScreen("subject");

  } else if (currentScreen === "subject") {
    showScreen("courseDetail");

  } else if (currentScreen === "courseDetail") {
    showScreen("courses");

  } else if (currentScreen === "courses") {
    showScreen("home");

  } else if (currentScreen === "profile") {
    showScreen("home");

  } else if (currentScreen === "home") {
    // Home par rehne do
  }

});
