const readline=require('readline');
const fs=require('fs');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let users=[];
if(fs.existsSync('data.json')){
    users=JSON.parse(fs.readFileSync("data.json"));
}

const args=process.argv.slice(2);
const option=args[0];
if(option=="add"){
let task=args[1];
    let person={};
    const exist=users.some((user)=>user.task.toLowerCase()===task.toLowerCase());
    if(exist){
        console.log('task already exists');
        return;
    }
    person.task=task;
    let next=users.length;
    person.nextid=++next;
    person.progress="todo";
    users.push(person);
    fs.writeFileSync('data.json',JSON.stringify(users,null,2));
        
    console.log('Task added successfully:', users);
    
};

if(option=="update"){

     if(users.length===0){
        console.log('No tasks available to update.');
        r1.close();
        return;
    }
    //findeindex 
    //find  ==>by using this we can find the object
    //some ==>we can find the exists or not 

    const id=args[1];
    const name=args[2];
    const index=users.findIndex((user)=>user.nextid==id);
    if(index===-1){
        console.log('Task not found.');
        r1.close();
        return;
    }
    users[index].task=name;
    fs.writeFileSync('data.json',JSON.stringify(users,null,2));
    console.log('Task updated successfully:', users);
}
   


if(option=="delete"){
    const id=args[1];
    const index=users.findIndex((user)=>user.nextid==id);
    if(index==-1){
        console.log("the task not found");
        return;
    }
    users.splice(index,1);
    fs.writeFileSync('data.json',JSON.stringify(users,null,2));
    console.log('Task deleted successfully:', users);
}

if(option==" mark-in-progress"){
    const id=args[1];
    const index=users.findIndex((user)=>user.nextid==id);
    if(index==-1){
        console.log("the task is not found");
        return ;
    }
    users[index].progress="in-progress";
    fs.writeFileSync('data.json',JSON.stringify(users,null,2));
    console.log('Task marked as in-progress successfully:', users);
}
if(option=="mark-done"){
    const id=args[1];
    const index=users.findIndex((user)=>user.nextid==id);
    if(index==-1){
        console.log("the task is not found");
        return ;
    }
    users[index].progress="done";
    fs.writeFileSync('data.json',JSON.stringify(users,null,2));
    console.log('Task marked as in-progress successfully:', users);
}




if(option=="list" &&args[1]==undefined){
    if(users.length===0){
        console.log('No tasks available.');
        r1.close();
        return;
    };
    
    for(const user of users){
        console.log(`Task: ${user.task}, Stage: ${user.progress}`);
    }
}

if(option=="list" && args[1]!=undefined){ 
    if(users.length===0){
        console.log('No tasks available.');
        return;
    }
    const stage=args[1];
        const filteredtasks=users.filter((user)=>user.progress.toLowerCase()===stage.toLowerCase());
        if(filteredtasks.length===0){
            console.log('No tasks found for the specified stage.');
            r1.close();
            return;
        }
        else{
            for(const task of filteredtasks){
                console.log(`Task: ${task.task}, Stage: ${task.progress}`);
                r1.close();
               
            }
        }
        return;

   
};

r1.close();