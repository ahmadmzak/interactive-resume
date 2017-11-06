var bio = {
  "name": "Ahmed Zakir",
  "role": "Software Engineer",
  "welcomeMessage": "Welcome to my Interactive Resume Site",
  "biopic": "images/mypic.jpg",
  "contacts": {
    "mobile": "+97335038875",
    "email": "ahmadmzak@gmail.com",
    "github": "ahmadmzak",
    "location": "Bahrain"
  },
  "skills": ["HTML", "CSS", "JavaScript", "C", "C++", "Java", "Algorithms and Data Structures"]
};

var education = {
  "schools": [{
    "name": "University of Notthingham",
    "location": "Semenyih, Malaysia",
    "degree": "BEng",
    "majors": ["Electrical & Electronic Engineering"],
    "date": 2015,
    "url": "http://www.nottingham.edu.my"
    },
    {
    "name": "Swinburne University of Technologys",
    "location": "Kuching, Malaysia",
    "degree": "Foundation",
    "url": "http://www.swinburne.edu.my",
    "majors": ["Science & Engineering"]
    }
  ],
  "onlineCourses": [{
      "title": "Algorithms and Data Structures",
      "school": "Stanford University",
      "date": "",
      "url": ""
    }, {
      "title": "",
      "school": "",
      "date": "",
      "url": ""
    }, {
      "title": "",
      "school": "",
      "date": "",
      "url": ""
    }]
};

var work = {
  "jobs": [{
    "employer": "CoreZee",
    "title": "Software Engineer",
    "location": "Karachi, Pakistan",
    "dates": "Nov 2016 - Sep 2017",
    "description": "Designed, implemented, and tested software for networking devices"
  }]
};

var projects = {
  "projects": [{
      "title": "Project 1",
      "dates": "Current",
      "description": "A simple project!",
      "images": ["images/project1.jpg"]
  }]
};

projects.display = function() {
  for (let i=0; i<projects.projects.length; i++){
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
    if (projects.projects[i].images.length > 0){
      for (let j=0; j<projects.projects[i].images.length; j++){
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
      }
    }
  }
}

education.display = function() {

}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#header").append(formattedName);
  $("#header").append(formattedRole);
  $("#header").append(formattedWelcomeMsg);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedMobile);
  $("#header").append(formattedEmail);
  $("#header").append(formattedLocation);
  $("#header").append(formattedGitHub);
  $("#header").append(HTMLskillsStart);
  for (let i=0; i<bio.skills.length-1; i++){
    $("#header").append(bio.skills[i] +" | ");
  }
  $("#header").append(bio.skills[bio.skills.length-1]);
}

work.display = function() {
  for (var job = 0; job < work.jobs.length; job++){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

bio.display();
education.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
