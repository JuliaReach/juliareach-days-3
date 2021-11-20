function add_item(person) {
    var s = `<li>${person.Name} `

    if (person.github != undefined) {
        s += add_icon('github', person.github);
    }

    if (person.gitlab != undefined) {
        s += add_icon('gitlab', person.gitlab);
    }

    if (person.twitter != undefined) {
        s += add_icon('twitter', person.twitter);
    }

    if (person.linkedin != undefined) {
        s += add_icon('linkedin', person.linkedin);
    }

    if (person.homepage != undefined) {
        s += add_icon('homepage', person.homepage);
    }

    s += `</li>`
    return s;
}

var part_list = `<ul>`
for (const person of persons) {
    part_list += add_item(person) 
}

part_list += `</ul>`
document.getElementById("part_list").innerHTML = part_list