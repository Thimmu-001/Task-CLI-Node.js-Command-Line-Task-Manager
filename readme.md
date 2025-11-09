✅ Task CLI – Node.js Command Line Task Manager

A simple command-line task manager built using Node.js.
You can add, update, delete, list, and mark tasks as done/in-progress.
All tasks are stored in data.json.

📦 Features

✅ Add a new task
✅ Update task name
✅ Delete task
✅ Mark task as done
✅ Mark task as in-progress
✅ List all tasks
✅ List tasks by status (done / todo / in-progress)

🛠️ Technology

Node.js

File System (JSON storage)

📁 Project Structure
project1.js
data.json
README.md

▶️ How to Run
1) Install Node.js

Check:

node -v

2) Run the script
node project1.js <command>

✅ Commands
✅ Add Task

Default status = todo

node project1.js add "Buy groceries"


Output example:

Task added successfully

✅ Update task (by ID)
node project1.js update <id> "<new task name>"


Example:

node project1.js update 1 "Buy groceries and cook dinner"

✅ Delete task
node project1.js delete <id>


Example:

node project1.js delete 1

✅ Mark task as in-progress
node project1.js mark-in-progress <id>


Example:

node project1.js mark-in-progress 2

✅ Mark task as done
node project1.js mark-done <id>


Example:

node project1.js mark-done 2

✅ List all tasks
node project1.js list


Output example:

Task: Buy groceries, Stage: todo
Task: Study JS, Stage: in-progress

✅ List tasks by status
node project1.js list <status>


Supported status:

done

todo

in-progress

Example:

node project1.js list done

📦 Data Storage

All tasks are stored in data.json like:

[
  {
    "task": "Buy groceries",
    "nextid": 1,
    "progress": "todo"
  },
  {
    "task": "Read book",
    "nextid": 2,
    "progress": "done"
  }
]

🔍 How IDs Work

IDs are auto-generated based on the number of tasks.
Each new task gets:

nextid = users.length + 1

⚠️ Limitations

❌ No validation on stage input
❌ IDs may break if you delete tasks and add more
✅ Still works fine for simple usage

🚀 Future Improvements

✅ Auto-increment ID even after deletion
✅ Add proper help menu
✅ Add timestamps
✅ Use libraries (Commander / Inquirer)



👨‍💻 Author
THIMMARAJU B S 