function newTask(){

    var taskDescription = document.getElementById("newTask").value

    createTask(taskDescription)

    updateScreen()

}


function updateScreen(){

    var list = "<ul>"

    tasks.forEach(task => {
    list += "<li id-data=" + task.id + ">"+ task.data.description+ "</li>"
    list += "<button onclick=removeTask(this) id-data=" + task.id+ ">Apagar</button>"
})

list += "</ul>"




document.getElementById("list").innerHTML = list
document.getElementById("newTask").value = ""

}

function removeTask(element){
    

    var id =  element.getAttribute("id-data")

    
    

    deleteTask(id)
    updateScreen()

}


var tasks = []




function idGenerator(){

    var timestamp = new Date()

    var id = timestamp.getHours().toString()+
             timestamp.getMinutes().toString()+
             timestamp.getSeconds().toString()+
             timestamp.getMilliseconds().toString()

             return id
}

function createTask(taskDescription){


    var task = {
        id: idGenerator(),
        data:{
            description: taskDescription
        }
    }

    tasks.push(task)


}



function deleteTask(id){
    

    tasks = tasks.filter(task=>task.id != element.getAttribute("id-data"))

    updateScreen()

}