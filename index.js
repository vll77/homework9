//NAV ITEMS
let navItemsArray = ["Introduction", "Education and Experience", "Skills", "Projects", "Contact Me"];

function updateNavItems()
{
    $("#navbar-container").empty();

    $.each(navItemsArray, function(_, item) {
        let itemNoSpaces = item.split(" ").join("-");
        $("#navbar-container").append(`
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#${itemNoSpaces}">${item}</a>
              </li>
        `);
    });
}

updateNavItems();



//DOWNLOAD BUTTON AND COUNTER
let hasDownloadedResume = false;
let downloadCount = 0;
let userName = "Vance Lambert";

function displayDownload()
{
    if(!hasDownloadedResume)
    {
    alert("Your resume downloaded successfully!");
    }

    hasDownloadedResume = true;
}

function delayedDisplayDownload() 
{
    setTimeout(displayDownload, 2000);
}

function updateDownload()
{
    downloadCount++;
    delayedDisplayDownload();
    $(".download-count").text("Download Count: " + downloadCount);
}

$("#download-button").on("click", updateDownload);



//GREETING
function showGreeting()
{
    let greetingMessage = "Hello, my name is " + userName +"! Welcome to my portfolio";
    $("#Greeting p").text(greetingMessage);
}

showGreeting();



//Skill LIST
    //initialize list
    let skillsArray = ["DH avie wack daffy", "Switch stunt groomer flow stomp", "Travel reverse camber ripper saddle 180", "A fourth item", "Skinny washboard road rash park gaper"];

    function updateSkillsContainer(skillsArray)
    {
        $(".list-group").empty();
    
        $.each(skillsArray, function(index, skill) {
            $(".list-group").append(`
                <div class='skill-and-button'>
                    <li class='list-group-item item-${index} editable' contenteditable='true'>
                        ${skill}  
                    </li>
                    <button class='remove-skill-button item-${index}'>Remove</button>
                </div>
            `);
        });
    }
    
    updateSkillsContainer(skillsArray);
    
        //add function
    $("#add-skill-button").on("click", addSkill)

    $("#skill-input-box").on("keydown", function(event) {
        if(event.key === "Enter")
        {
            addSkill();
        }

        else if(event.key === "Escape")
        {
            $("#skill-input-box").val("");
        }
    });

    function addSkill ()
    {
        let newSkill = $("#skill-input-box").val();
        
        if(!skillsArray.includes(newSkill) && newSkill !== "")
        {
            skillsArray.push(newSkill);

            $("#skill-input-box").val("");
    
            updateSkillsContainer(skillsArray);
        }
    }
    
        //remove function
    $(document).on("click", ".remove-skill-button", function() {
        let clickedIndex = ($(this).attr("class").match(/item-(\d+)/)[1]);
    
        skillsArray.splice(clickedIndex, 1);
    
        updateSkillsContainer(skillsArray);
    })
    
        //edit function
    $(document).on



//PROJECTS SECTION
    //initialize project objects
const projects = 
[
    {
    title: "Project 1 Name",
    description: "Proin mattis enim eget massa interdum ultrices. Nulla in sagittis augue. Quisque purus urna, lacinia sit amet facilisis viverra, iaculis sed tortor. Duis sed erat quis tellus imperdiet posuere.",
    deadline: "2024-07-11",
    imageUrl:"./Files/Robot-pic-1.jpg",
    altText: "nice robot"
    },

    {
        title:"Project 2 Name" ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper bibendum nibh nec tristique. Fusce quis enim nunc. Aenean ut euismod urna, eget egestas ligula.",
        deadline: "2024-10-23",
        imageUrl:"./Files/H2O.jpg",
        altText: "H2O Molecule"
    },

    {
        title: "Project 3 Name",
        description: "Maecenas ligula nulla, dignissim ut nibh eu, gravida mattis nulla. Vivamus ultrices dictum nibh at imperdiet. In ut leo consequat lacus ornare cursus. Nullam dolor dui, bibendum vitae eros at.",
        deadline: "2024-12-04",
        imageUrl:"./Files/water-2-wine.jpg",
        altText: "water to wine"
    }
]

    //set status
let numOfProjects = projects.length;

function getDaysUntilDeadline(dueDate, projectNumber)
{
    let currentDate = Date.now();
    let targetDate = new Date(dueDate).getTime();
    let difference = targetDate - currentDate;
    let days = Math.round(difference / (1000 * 3600 * 24));
    console.log("There are " + days + " days until Project" + projectNumber + "is due.");
    return days;
}

function setProjectStatus(dueDate, projectNumber)
{
    if(getDaysUntilDeadline(dueDate, projectNumber) > 0)
    {
        return "Ongoing";
    }

    else
    {
        return "Completed";
    }
}

console.log("Projects length:", projects.length);
console.log("Card elements length:", $("#Projects .card").length);

// Display projects
$("#Projects .card").each(function(index) {
  $(this).find(".card-title").text(`${projects[index].title} (Deadline: ${projects[index].deadline})`);

  let status = setProjectStatus(projects[index].deadline, index + 1);
  $(this).find(".card-status").text(`Status: ${status}`);
  $(this).find(".card-text").text(projects[index].description);
  $(this).find("img").attr({
    src: projects[index].imageUrl,
    alt: projects[index].altText
  });
});
